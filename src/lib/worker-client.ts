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

export async function enqueueProvision(userId: string, plan: string) {
  return workerFetch("/worker/provision", {
    method: "POST",
    body: JSON.stringify({ userId, plan }),
  });
}

export async function startInstance(instanceId: string) {
  return workerFetch("/worker/start", {
    method: "POST",
    body: JSON.stringify({ instanceId }),
  });
}

export async function stopInstance(instanceId: string) {
  return workerFetch("/worker/stop", {
    method: "POST",
    body: JSON.stringify({ instanceId }),
  });
}
