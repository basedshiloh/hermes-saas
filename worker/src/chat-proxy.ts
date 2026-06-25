import type { WebSocket, RawData } from "ws";
import { DockerProvisioner, type ContainerInfo } from "./provisioners/docker.js";

const provisioner = new DockerProvisioner();

// agentId -> container connection info (in-memory cache; recoverable from Docker)
const containerRegistry = new Map<string, ContainerInfo>();

export function registerContainer(agentId: string, info: ContainerInfo) {
  containerRegistry.set(agentId, info);
}

async function resolveContainer(agentId: string): Promise<ContainerInfo> {
  let info = containerRegistry.get(agentId);
  if (!info) {
    // Cache miss (e.g. after a worker restart) — rebuild from Docker
    const recovered = await provisioner.recover(agentId);
    if (!recovered) {
      throw new Error("Agent not found or not deployed yet");
    }
    info = recovered;
    containerRegistry.set(agentId, info);
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

export async function handleChatConnection(socket: WebSocket, agentId: string) {
  const sessionId = `${agentId}-${Date.now()}`;

  socket.send(JSON.stringify({
    type: "status",
    status: "connecting",
    message: "Waking your agent...",
  }));

  let containerInfo: ContainerInfo;
  try {
    containerInfo = await resolveContainer(agentId);
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
