import Docker from "dockerode";
import { randomBytes } from "crypto";
import type { AgentProvisioner, AgentInstance, InstanceStatus, HealthCheck, ProvisionOptions } from "./interface.js";

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

const HERMES_IMAGE = "hermes-agent:latest";
const CONTAINER_PREFIX = "hermes-user-";
const HERMES_API_PORT = 8642; // Hermes API server port inside the container

function containerName(userId: string) {
  return `${CONTAINER_PREFIX}${userId}`;
}

export class DockerProvisioner implements AgentProvisioner {
  async provision(userId: string, _plan: string, options?: ProvisionOptions): Promise<AgentInstance> {
    const name = containerName(userId);
    // Host port that maps to the container's Hermes API server (8642)
    const hostPort = 3100 + Math.floor(Math.random() * 900);
    // Per-container bearer token for the Hermes gateway
    const apiKey = randomBytes(24).toString("hex");

    const env = [
      `HERMES_USER_ID=${userId}`,
      "API_SERVER_ENABLED=true",
      `API_SERVER_PORT=${HERMES_API_PORT}`,
      "API_SERVER_HOST=0.0.0.0",
      `API_SERVER_KEY=${apiKey}`,
      "API_SERVER_CORS_ORIGINS=*",
    ];
    if (options?.modelKey) {
      env.push(`OPENROUTER_API_KEY=${options.modelKey}`);
    }

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
        "hermes.userId": userId,
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

  async start(instanceId: string): Promise<void> {
    const container = docker.getContainer(instanceId);
    await container.start();
  }

  async stop(instanceId: string): Promise<void> {
    const container = docker.getContainer(instanceId);
    await container.stop({ t: 10 });
  }

  async destroy(instanceId: string): Promise<void> {
    const container = docker.getContainer(instanceId);
    try { await container.stop({ t: 5 }); } catch { /* might already be stopped */ }
    await container.remove({ force: true });
  }

  async status(instanceId: string): Promise<InstanceStatus> {
    try {
      const container = docker.getContainer(instanceId);
      const info = await container.inspect();
      if (info.State.Running) return "running";
      if (info.State.Paused) return "sleeping";
      return "sleeping";
    } catch {
      return "error";
    }
  }

  async health(instanceId: string): Promise<HealthCheck> {
    try {
      const container = docker.getContainer(instanceId);
      const info = await container.inspect();
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
