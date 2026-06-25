import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import { Queue, Worker } from "bullmq";
import { createHmac, timingSafeEqual } from "crypto";
import { processProvisionJob, type ProvisionJobData } from "./jobs/provision.js";
import { DockerProvisioner } from "./provisioners/docker.js";
import { handleChatConnection, registerContainer } from "./chat-proxy.js";

const PORT = parseInt(process.env.PORT || "4000");
const INTERNAL_TOKEN = process.env.INTERNAL_TOKEN || "";
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

// The browser chat WS proves identity with an HMAC of the userId signed with
// the internal token. The token itself is never exposed to the client.
function verifyChatSig(userId: string, sig: string): boolean {
  if (!userId || !sig) return false;
  const expected = createHmac("sha256", INTERNAL_TOKEN).update(userId).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

const redisOpts = { connection: { url: REDIS_URL } };
const provisioner = new DockerProvisioner();

const provisionQueue = new Queue("provision", redisOpts);

new Worker("provision", processProvisionJob, {
  ...redisOpts,
  concurrency: 2,
});

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });
await app.register(websocket);

app.addHook("onRequest", async (request, reply) => {
  if (request.url === "/worker/health") return;
  // Chat WS uses query param token
  if (request.url.startsWith("/worker/chat")) return;

  const token = request.headers["x-internal-token"];
  if (INTERNAL_TOKEN && token !== INTERNAL_TOKEN) {
    reply.code(401).send({ error: "Unauthorized" });
  }
});

app.get("/worker/health", async () => {
  return { status: "ok", uptime: process.uptime() };
});

app.post("/worker/provision", async (request) => {
  const { agentId, userId, plan, modelKey, callbackUrl } = request.body as ProvisionJobData;
  const job = await provisionQueue.add("provision", { agentId, userId, plan, modelKey, callbackUrl });
  return { jobId: job.id, status: "queued" };
});

app.post("/worker/start", async (request) => {
  const { containerId } = request.body as { containerId: string };
  await provisioner.start(containerId);
  return { status: "started" };
});

app.post("/worker/stop", async (request) => {
  const { containerId } = request.body as { containerId: string };
  await provisioner.stop(containerId);
  return { status: "stopped" };
});

app.post("/worker/destroy", async (request) => {
  const { containerId } = request.body as { containerId: string };
  await provisioner.destroy(containerId);
  return { status: "destroyed" };
});

app.get("/worker/status/:containerId", async (request) => {
  const { containerId } = request.params as { containerId: string };
  const status = await provisioner.status(containerId);
  return { containerId, status };
});

// Report an agent's live container status by agentId (used by the dashboard to
// reconcile state without relying on the provisioning callback).
app.get("/worker/agent/:agentId", async (request) => {
  const { agentId } = request.params as { agentId: string };
  const info = await provisioner.recover(agentId);
  if (!info) return { exists: false };
  const status = await provisioner.status(info.containerId);
  // Keep the chat registry warm so the first message connects instantly
  registerContainer(agentId, info);
  return {
    exists: true,
    status,
    containerId: info.containerId,
    host: info.host,
    port: info.port,
  };
});

app.get("/worker/progress/:jobId", { websocket: true }, (socket, request) => {
  const jobId = (request.params as { jobId: string }).jobId;

  const interval = setInterval(async () => {
    try {
      const job = await provisionQueue.getJob(jobId);
      if (!job) {
        socket.send(JSON.stringify({ error: "Job not found" }));
        clearInterval(interval);
        socket.close();
        return;
      }

      const progress = job.progress;
      const state = await job.getState();
      socket.send(JSON.stringify({ jobId, state, progress }));

      if (state === "completed" || state === "failed") {
        clearInterval(interval);
        socket.close();
      }
    } catch {
      clearInterval(interval);
      socket.close();
    }
  }, 1000);

  socket.on("close", () => clearInterval(interval));
});

// Register a container for an agent (manual / recovery path)
app.post("/worker/register", async (request) => {
  const { agentId, host, port, containerId, apiKey } = request.body as {
    agentId: string; host: string; port: number; containerId: string; apiKey: string;
  };
  registerContainer(agentId, { host, port, containerId, apiKey });
  return { status: "registered" };
});

// Chat WebSocket — authenticates via HMAC signature of the agentId. Only the
// Vercel app (holding the shared secret) can mint a valid sig, and it only does
// so for agents the signed-in user owns.
app.get("/worker/chat", { websocket: true }, (socket, request) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const sig = url.searchParams.get("sig") || "";
  const agentId = url.searchParams.get("agentId") || "";

  if (!agentId) {
    socket.send(JSON.stringify({ type: "error", message: "agentId required" }));
    socket.close();
    return;
  }

  if (INTERNAL_TOKEN && !verifyChatSig(agentId, sig)) {
    socket.send(JSON.stringify({ type: "error", message: "Unauthorized" }));
    socket.close();
    return;
  }

  handleChatConnection(socket, agentId);
});

app.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Worker service running on port ${PORT}`);
});
