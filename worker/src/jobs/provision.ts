import { Job } from "bullmq";
import { DockerProvisioner } from "../provisioners/docker.js";
import { registerContainer } from "../chat-proxy.js";

const provisioner = new DockerProvisioner();

export interface ProvisionJobData {
  agentId: string;
  userId: string;
  plan: string;
  modelKey?: string;
  callbackUrl?: string;
}

const STAGES = [
  { id: "queued", progress: 0 },
  { id: "allocating_host", progress: 15 },
  { id: "pulling_image", progress: 30 },
  { id: "starting_container", progress: 50 },
  { id: "installing_hermes", progress: 65 },
  { id: "configuring_gateway", progress: 80 },
  { id: "health_check", progress: 90 },
  { id: "ready", progress: 100 },
];

async function updateStage(job: Job, stageIndex: number) {
  const stage = STAGES[stageIndex];
  await job.updateProgress({ stage: stage.id, progress: stage.progress } as unknown as number);
  await new Promise((r) => setTimeout(r, 1200));
}

export async function processProvisionJob(job: Job<ProvisionJobData>) {
  const { agentId, userId, plan, modelKey } = job.data;

  try {
    await updateStage(job, 0);
    await updateStage(job, 1);
    await updateStage(job, 2);
    await updateStage(job, 3);

    const instance = await provisioner.provision(agentId, userId, plan, { modelKey });

    await updateStage(job, 4);
    await updateStage(job, 5);
    await updateStage(job, 6);

    const health = await provisioner.health(instance.containerId!);
    if (!health.healthy) {
      throw new Error("Health check failed");
    }

    await updateStage(job, 7);

    registerContainer(agentId, {
      host: instance.host,
      port: instance.port,
      containerId: instance.containerId!,
      apiKey: instance.apiKey,
    });

    if (job.data.callbackUrl) {
      await fetch(job.data.callbackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Internal-Token": process.env.INTERNAL_TOKEN || "",
        },
        body: JSON.stringify({
          agentId,
          containerId: instance.containerId,
          host: instance.host,
          port: instance.port,
          state: "RUNNING",
        }),
      }).catch(() => {});
    }

    return { agentId, instanceId: instance.instanceId };
  } catch (err) {
    await job.updateProgress({ stage: "failed", progress: 0, error: String(err) } as unknown as number);

    if (job.data.callbackUrl) {
      await fetch(job.data.callbackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Internal-Token": process.env.INTERNAL_TOKEN || "",
        },
        body: JSON.stringify({ agentId, state: "ERROR" }),
      }).catch(() => {});
    }
    throw err;
  }
}
