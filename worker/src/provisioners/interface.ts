export interface AgentInstance {
  instanceId: string;
  host: string;
  port: number;
  containerId?: string;
  vmId?: string;
}

export type InstanceStatus = "provisioning" | "running" | "sleeping" | "error" | "destroyed";

export interface HealthCheck {
  healthy: boolean;
  uptime?: number;
  error?: string;
}

export interface AgentProvisioner {
  provision(userId: string, plan: string): Promise<AgentInstance>;
  start(instanceId: string): Promise<void>;
  stop(instanceId: string): Promise<void>;
  destroy(instanceId: string): Promise<void>;
  status(instanceId: string): Promise<InstanceStatus>;
  health(instanceId: string): Promise<HealthCheck>;
}
