import type { AgentProvisioner, AgentInstance, InstanceStatus, HealthCheck, ProvisionOptions } from "./interface.js";

export class HetznerVmProvisioner implements AgentProvisioner {
  async provision(_agentId: string, _userId: string, _plan: string, _options?: ProvisionOptions): Promise<AgentInstance> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
  async start(_instanceId: string): Promise<void> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
  async stop(_instanceId: string): Promise<void> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
  async destroy(_instanceId: string): Promise<void> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
  async status(_instanceId: string): Promise<InstanceStatus> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
  async health(_instanceId: string): Promise<HealthCheck> {
    throw new Error("HetznerVmProvisioner not implemented yet");
  }
}
