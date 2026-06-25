const WORKER_URL = process.env.WORKER_SERVICE_URL || "http://localhost:4000";
const WORKER_TOKEN = process.env.WORKER_INTERNAL_TOKEN || "";

async function workerFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${WORKER_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Internal-Token": WORKER_TOKEN,
      ...options.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Worker service error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function enqueueProvision(args: {
  agentId: string;
  userId: string;
  plan: string;
  modelKey?: string;
  callbackUrl?: string;
}) {
  return workerFetch("/worker/provision", {
    method: "POST",
    body: JSON.stringify(args),
  });
}

export async function getAgentStatus(agentId: string): Promise<{
  exists: boolean;
  status?: string;
  containerId?: string;
  host?: string;
  port?: number;
}> {
  return workerFetch(`/worker/agent/${agentId}`, { method: "GET" });
}

export async function startContainer(containerId: string) {
  return workerFetch("/worker/start", {
    method: "POST",
    body: JSON.stringify({ containerId }),
  });
}

export async function stopContainer(containerId: string) {
  return workerFetch("/worker/stop", {
    method: "POST",
    body: JSON.stringify({ containerId }),
  });
}

export async function destroyContainer(containerId: string) {
  return workerFetch("/worker/destroy", {
    method: "POST",
    body: JSON.stringify({ containerId }),
  });
}
