import type { AgentProvisioner, AgentInstance, InstanceStatus, HealthCheck } from "./interface.js";

export class ModalProvisioner implements AgentProvisioner {
  async provision(_userId: string, _plan: string): Promise<AgentInstance> {
    throw new Error("ModalProvisioner not implemented yet");
  }
  async start(_instanceId: string): Promise<void> {
    throw new Error("ModalProvisioner not implemented yet");
  }
  async stop(_instanceId: string): Promise<void> {
    throw new Error("ModalProvisioner not implemented yet");
  }
  async destroy(_instanceId: string): Promise<void> {
    throw new Error("ModalProvisioner not implemented yet");
  }
  async status(_instanceId: string): Promise<InstanceStatus> {
    throw new Error("ModalProvisioner not implemented yet");
  }
  async health(_instanceId: string): Promise<HealthCheck> {
    throw new Error("ModalProvisioner not implemented yet");
  }
}
