import Docker from "dockerode";
import { randomBytes } from "crypto";
import type { AgentProvisioner, AgentInstance, InstanceStatus, HealthCheck, ProvisionOptions } from "./interface.js";

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

const HERMES_IMAGE = "hermes-agent:latest";
const CONTAINER_PREFIX = "hermes-agent-";
const HERMES_API_PORT = 8642; // Hermes API server port inside the container

function containerName(agentId: string) {
  return `${CONTAINER_PREFIX}${agentId}`;
}

export interface ContainerInfo {
  host: string;
  port: number;
  containerId: string;
  apiKey: string;
}

export class DockerProvisioner implements AgentProvisioner {
  async provision(
    agentId: string,
    userId: string,
    _plan: string,
    options?: ProvisionOptions,
  ): Promise<AgentInstance> {
    const name = containerName(agentId);
    const hostPort = 3100 + Math.floor(Math.random() * 5000);
    const apiKey = randomBytes(32).toString("hex");

    const env = [
      `HERMES_USER_ID=${userId}`,
      "API_SERVER_ENABLED=true",
      `API_SERVER_PORT=${HERMES_API_PORT}`,
      "API_SERVER_HOST=0.0.0.0",
      `API_SERVER_KEY=${apiKey}`,
      "API_SERVER_CORS_ORIGINS=*",
      "GATEWAY_ALLOW_ALL_USERS=true",
    ];
    if (options?.modelKey) {
      env.push(`OPENROUTER_API_KEY=${options.modelKey}`);
    }

    // Remove any stale container with the same name
    try {
      await docker.getContainer(name).remove({ force: true });
    } catch { /* none existed */ }

    const container = await docker.createContainer({
      Image: HERMES_IMAGE,
      name,
      Env: env,
      ExposedPorts: { [`${HERMES_API_PORT}/tcp`]: {} },
      HostConfig: {
        PortBindings: { [`${HERMES_API_PORT}/tcp`]: [{ HostPort: String(hostPort) }] },
        Memory: 512 * 1024 * 1024,
        NanoCpus: 1_000_000_000,
        PidsLimit: 256,
        NetworkMode: "bridge",
        RestartPolicy: { Name: "unless-stopped" },
      },
      Labels: {
        "hermes.agentId": agentId,
        "hermes.userId": userId,
        "hermes.apiKey": apiKey,
        "hermes.managed": "true",
      },
    });

    await container.start();

    return {
      instanceId: container.id,
      host: "127.0.0.1",
      port: hostPort,
      apiKey,
      containerId: container.id,
    };
  }

  // Rebuild connection info for an agent's container directly from Docker, so
  // chat survives a worker restart (in-memory registry loss).
  async recover(agentId: string): Promise<ContainerInfo | null> {
    try {
      const container = docker.getContainer(containerName(agentId));
      const info = await container.inspect();
      const apiKey = info.Config.Labels?.["hermes.apiKey"];
      const bindings = info.HostConfig?.PortBindings?.[`${HERMES_API_PORT}/tcp`];
      const hostPort = bindings?.[0]?.HostPort;
      if (!apiKey || !hostPort) return null;
      return {
        host: "127.0.0.1",
        port: parseInt(hostPort),
        containerId: info.Id,
        apiKey,
      };
    } catch {
      return null;
    }
  }

  async start(containerId: string): Promise<void> {
    await docker.getContainer(containerId).start();
  }

  async stop(containerId: string): Promise<void> {
    await docker.getContainer(containerId).stop({ t: 10 });
  }

  async destroy(containerId: string): Promise<void> {
    const container = docker.getContainer(containerId);
    try { await container.stop({ t: 5 }); } catch { /* maybe already stopped */ }
    await container.remove({ force: true });
  }

  async status(containerId: string): Promise<InstanceStatus> {
    try {
      const info = await docker.getContainer(containerId).inspect();
      if (info.State.Running) return "running";
      return "sleeping";
    } catch {
      return "error";
    }
  }

  async health(containerId: string): Promise<HealthCheck> {
    try {
      const info = await docker.getContainer(containerId).inspect();
      return {
        healthy: info.State.Running,
        uptime: info.State.Running
          ? Math.floor((Date.now() - new Date(info.State.StartedAt).getTime()) / 1000)
          : 0,
      };
    } catch (err) {
      return { healthy: false, error: String(err) };
    }
  }
}
