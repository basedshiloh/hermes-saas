export interface AgentInstance {
  instanceId: string;
  host: string;
  port: number;
  apiKey: string; // Hermes API_SERVER_KEY (bearer token for the gateway)
  containerId?: string;
  vmId?: string;
}

export interface ProvisionOptions {
  modelKey?: string; // BYOK key (e.g. OpenRouter) injected into the agent
}

export type InstanceStatus = "provisioning" | "running" | "sleeping" | "error" | "destroyed";

export interface HealthCheck {
  healthy: boolean;
  uptime?: number;
  error?: string;
}

export interface AgentProvisioner {
  // agentId is the canonical per-agent identifier (DB AgentInstance.id)
  provision(agentId: string, userId: string, plan: string, options?: ProvisionOptions): Promise<AgentInstance>;
  start(containerId: string): Promise<void>;
  stop(containerId: string): Promise<void>;
  destroy(containerId: string): Promise<void>;
  status(containerId: string): Promise<InstanceStatus>;
  health(containerId: string): Promise<HealthCheck>;
}
