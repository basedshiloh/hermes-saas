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
  provision(userId: string, plan: string, options?: ProvisionOptions): Promise<AgentInstance>;
  start(instanceId: string): Promise<void>;
  stop(instanceId: string): Promise<void>;
  destroy(instanceId: string): Promise<void>;
  status(instanceId: string): Promise<InstanceStatus>;
  health(instanceId: string): Promise<HealthCheck>;
}
