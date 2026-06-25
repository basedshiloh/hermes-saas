import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import { Queue, Worker } from "bullmq";
import { processProvisionJob, type ProvisionJobData } from "./jobs/provision.js";
import { DockerProvisioner } from "./provisioners/docker.js";
import { handleChatConnection, registerContainer } from "./chat-proxy.js";

const PORT = parseInt(process.env.PORT || "4000");
const INTERNAL_TOKEN = process.env.INTERNAL_TOKEN || "";
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

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
  const { userId, plan, callbackUrl } = request.body as ProvisionJobData;
  const job = await provisionQueue.add("provision", { userId, plan, callbackUrl });
  return { jobId: job.id, status: "queued" };
});

app.post("/worker/start", async (request) => {
  const { instanceId } = request.body as { instanceId: string };
  await provisioner.start(instanceId);
  return { status: "started" };
});

app.post("/worker/stop", async (request) => {
  const { instanceId } = request.body as { instanceId: string };
  await provisioner.stop(instanceId);
  return { status: "stopped" };
});

app.post("/worker/destroy", async (request) => {
  const { instanceId } = request.body as { instanceId: string };
  await provisioner.destroy(instanceId);
  return { status: "destroyed" };
});

app.get("/worker/status/:instanceId", async (request) => {
  const { instanceId } = request.params as { instanceId: string };
  const status = await provisioner.status(instanceId);
  return { instanceId, status };
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

// Register a container for a user (called after provisioning)
app.post("/worker/register", async (request) => {
  const { userId, host, port, containerId } = request.body as {
    userId: string; host: string; port: number; containerId: string;
  };
  registerContainer(userId, { host, port, containerId });
  return { status: "registered" };
});

// Chat WebSocket — authenticates via query param token + userId
app.get("/worker/chat", { websocket: true }, (socket, request) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const token = url.searchParams.get("token");
  const userId = url.searchParams.get("userId");

  if (INTERNAL_TOKEN && token !== INTERNAL_TOKEN) {
    socket.send(JSON.stringify({ type: "error", message: "Unauthorized" }));
    socket.close();
    return;
  }

  if (!userId) {
    socket.send(JSON.stringify({ type: "error", message: "userId required" }));
    socket.close();
    return;
  }

  handleChatConnection(socket, userId);
});

app.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Worker service running on port ${PORT}`);
});
