'use client';

import Sidebar from '@/src/components/dashboard/sidebar';
import Topbar from '@/src/components/dashboard/topbar';
import { PACKS } from '@/src/data/mock-dashboard';
import { ReactNode } from 'react';

const activePack = PACKS[0];

export default function DashboardInnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar packTabs={activePack.tabs} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar instanceState="running" />
        <main className="bg-background-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
