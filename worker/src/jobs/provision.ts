import { Job } from "bullmq";
import { DockerProvisioner } from "../provisioners/docker.js";
import { registerContainer } from "../chat-proxy.js";

const provisioner = new DockerProvisioner();

export interface ProvisionJobData {
  userId: string;
  plan: string;
  callbackUrl?: string;
}

export interface ProvisionJobProgress {
  stage: string;
  progress: number;
  error?: string;
}

const STAGES = [
  { id: "queued", label: "Queued", progress: 0 },
  { id: "allocating_host", label: "Allocating host", progress: 15 },
  { id: "pulling_image", label: "Pulling image", progress: 30 },
  { id: "starting_container", label: "Starting container", progress: 50 },
  { id: "installing_hermes", label: "Installing Hermes", progress: 65 },
  { id: "configuring_gateway", label: "Configuring gateway", progress: 80 },
  { id: "health_check", label: "Health check", progress: 90 },
  { id: "ready", label: "Ready", progress: 100 },
];

async function updateStage(job: Job, stageIndex: number) {
  const stage = STAGES[stageIndex];
  await job.updateProgress({ stage: stage.id, progress: stage.progress } as unknown as number);
  await new Promise((r) => setTimeout(r, 1500));
}

export async function processProvisionJob(job: Job<ProvisionJobData>) {
  const { userId, plan } = job.data;

  try {
    await updateStage(job, 0); // queued
    await updateStage(job, 1); // allocating_host
    await updateStage(job, 2); // pulling_image
    await updateStage(job, 3); // starting_container

    const instance = await provisioner.provision(userId, plan);

    await updateStage(job, 4); // installing_hermes
    await updateStage(job, 5); // configuring_gateway

    // health check
    await updateStage(job, 6);
    const health = await provisioner.health(instance.instanceId);
    if (!health.healthy) {
      throw new Error("Health check failed");
    }

    await updateStage(job, 7); // ready

    // Register container for chat proxy
    registerContainer(userId, {
      host: instance.host,
      port: instance.port,
      containerId: instance.containerId!,
    });

    if (job.data.callbackUrl) {
      await fetch(job.data.callbackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          instanceId: instance.instanceId,
          host: instance.host,
          port: instance.port,
          containerId: instance.containerId,
          state: "RUNNING",
        }),
      }).catch(() => {});
    }

    return { instanceId: instance.instanceId, host: instance.host, port: instance.port };
  } catch (err) {
    await job.updateProgress({ stage: "failed", progress: 0, error: String(err) } as unknown as number);
    throw err;
  }
}
