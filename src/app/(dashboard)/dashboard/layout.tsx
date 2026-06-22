"use client";

import Sidebar from "@/src/components/dashboard/sidebar";
import Topbar from "@/src/components/dashboard/topbar";
import { ReactNode, useEffect, useState } from "react";

interface InstanceData {
  instance: {
    state: string;
  } | null;
}

interface PackData {
  packs: {
    id: string;
    name: string;
    tabs: { id: string; title: string; icon?: string }[];
    enabled: boolean;
  }[];
}

export default function DashboardInnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [instanceState, setInstanceState] = useState<string | null>(null);
  const [packTabs, setPackTabs] = useState<
    { id: string; title: string; icon?: string }[]
  >([]);

  useEffect(() => {
    fetch("/api/instance")
      .then((r) => r.json())
      .then((data: InstanceData) => {
        setInstanceState(data.instance?.state || null);
      })
      .catch(() => {});

    fetch("/api/packs")
      .then((r) => r.json())
      .then((data: PackData) => {
        const enabledPacks = data.packs.filter((p) => p.enabled);
        const tabs = enabledPacks.flatMap((p) => p.tabs);
        setPackTabs(tabs);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar packTabs={packTabs} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar instanceState={instanceState} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
