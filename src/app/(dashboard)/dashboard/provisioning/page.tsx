'use client';

import ProvisioningProgress from '@/src/components/dashboard/provisioning/provisioning-progress';

export default function ProvisioningPage() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <ProvisioningProgress />
    </div>
  );
}
