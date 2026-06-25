import type { WebSocket, RawData } from "ws";
import { DockerProvisioner } from "./provisioners/docker.js";

const provisioner = new DockerProvisioner();

interface ContainerInfo {
  host: string;
  port: number;
  containerId: string;
  apiKey: string; // Hermes API_SERVER_KEY (bearer token for the agent's gateway)
}

const containerRegistry = new Map<string, ContainerInfo>();

export function registerContainer(userId: string, info: ContainerInfo) {
  containerRegistry.set(userId, info);
}

export function getContainer(userId: string): ContainerInfo | undefined {
  return containerRegistry.get(userId);
}

async function ensureContainerRunning(userId: string): Promise<ContainerInfo> {
  const info = containerRegistry.get(userId);
  if (!info) {
    throw new Error("No container registered for this user");
  }

  const status = await provisioner.status(info.containerId);
  if (status === "sleeping") {
    await provisioner.start(info.containerId);
    await new Promise((r) => setTimeout(r, 3000));
  }

  return info;
}

// Hermes exposes an OpenAI-compatible API server at POST /v1/chat/completions
async function forwardToHermes(
  containerInfo: ContainerInfo,
  message: string,
  sessionId: string,
): Promise<string> {
  const url = `http://${containerInfo.host}:${containerInfo.port}/v1/chat/completions`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${containerInfo.apiKey}`,
        "X-Hermes-Session-Id": sessionId,
      },
      body: JSON.stringify({
        model: "hermes-agent",
        messages: [{ role: "user", content: message }],
        stream: false,
      }),
    });

    if (!res.ok) {
      throw new Error(`Hermes responded with ${res.status}`);
    }

    const data = await res.json();
    return (
      data.choices?.[0]?.message?.content ||
      data.response ||
      data.message ||
      JSON.stringify(data)
    );
  } catch (err) {
    return `[Agent error: ${err instanceof Error ? err.message : String(err)}. The agent may still be starting up — try again in a moment.]`;
  }
}

export async function handleChatConnection(
  socket: WebSocket,
  userId: string,
) {
  // One chat session per WS connection
  const sessionId = `${userId}-${Date.now()}`;

  socket.send(JSON.stringify({
    type: "status",
    status: "connecting",
    message: "Connecting to your agent...",
  }));

  let containerInfo: ContainerInfo;
  try {
    containerInfo = await ensureContainerRunning(userId);
    socket.send(JSON.stringify({
      type: "status",
      status: "connected",
      message: "Connected to your Hermes agent.",
    }));
  } catch (err) {
    socket.send(JSON.stringify({
      type: "status",
      status: "error",
      message: err instanceof Error ? err.message : "Failed to connect to agent",
    }));
    return;
  }

  socket.on("message", async (data: RawData) => {
    try {
      const parsed = JSON.parse(data.toString());
      const userMessage = parsed.message || parsed.content || data.toString();

      socket.send(JSON.stringify({
        type: "status",
        status: "thinking",
        message: "Hermes is thinking...",
      }));

      const response = await forwardToHermes(containerInfo, userMessage, sessionId);

      socket.send(JSON.stringify({
        type: "message",
        role: "assistant",
        content: response,
      }));
    } catch (err) {
      socket.send(JSON.stringify({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to process message",
      }));
    }
  });
}
