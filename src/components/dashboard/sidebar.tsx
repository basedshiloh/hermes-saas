"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/utils/cn";

interface SidebarLink {
  id: string;
  title: string;
  href: string;
  icon: string;
}

const mainLinks: SidebarLink[] = [
  { id: "chat", title: "Chat", href: "/dashboard", icon: "💬" },
  { id: "settings", title: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar({
  packTabs,
}: {
  packTabs?: { id: string; title: string; icon?: string }[];
}) {
  const pathname = usePathname();

  return (
    <aside className="bg-background-8 border-stroke-5 flex h-screen w-64 shrink-0 flex-col border-r">
      <div className="border-stroke-5 flex h-16 items-center border-b px-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary-600 flex size-8 items-center justify-center rounded-lg">
            <span className="text-sm font-bold text-white">H</span>
          </div>
          <span className="text-lg font-semibold text-white">Hermes</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {mainLinks.map((link) => {
            const isActive =
              link.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-primary-600/20 text-primary-300"
                    : "text-white/60 hover:bg-background-7 hover:text-white",
                )}
              >
                <span className="text-base">{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>

        {packTabs && packTabs.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-white/40">
              Tools
            </p>
            <div className="space-y-1">
              {packTabs.map((tab) => {
                const href = `/dashboard/${tab.id}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={tab.id}
                    href={href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-primary-600/20 text-primary-300"
                        : "text-white/60 hover:bg-background-7 hover:text-white",
                    )}
                  >
                    <span>{tab.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <div className="border-stroke-5 border-t px-3 py-3">
        <Link
          href="/dashboard/setup"
          className="text-white/40 hover:text-white/60 flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
        >
          <span>+ Add Pack</span>
        </Link>
      </div>
    </aside>
  );
}
