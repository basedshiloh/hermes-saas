'use client';

import Sidebar from '@/src/components/dashboard/sidebar';
import Topbar from '@/src/components/dashboard/topbar';
import { ReactNode } from 'react';

export default function DashboardInnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="bg-background-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
