'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/utils/cn';
import type { PackTab } from '@/src/data/mock-dashboard';

const mainLinks = [
  { id: 'chat', title: 'Chat', href: '/dashboard', iconClass: 'icon-message-square' },
  { id: 'settings', title: 'Settings', href: '/dashboard/settings', iconClass: 'icon-settings' },
];

export default function Sidebar({ packTabs }: { packTabs?: PackTab[] }) {
  const pathname = usePathname();

  return (
    <aside className="bg-background-5 border-stroke-5 flex h-screen w-64 shrink-0 flex-col border-r">
      <div className="border-stroke-5 flex h-16 items-center border-b px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="bg-(image:--color-gradient-4) flex size-9 items-center justify-center rounded-xl">
            <span className="font-ibm-plex-mono text-sm font-bold text-white">H</span>
          </span>
          <span className="font-inter-tight text-heading-6 text-accent font-medium">Hermes</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <div className="space-y-1">
          {mainLinks.map((link) => {
            const isActive =
              link.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  'text-tagline-2 font-inter-tight flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-normal transition-colors',
                  isActive
                    ? 'bg-background-7 text-accent'
                    : 'text-primary-50/60 hover:bg-background-7 hover:text-accent',
                )}
              >
                <span className={cn(link.iconClass, 'text-base')} />
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>

        {packTabs && packTabs.length > 0 && (
          <div className="mt-7">
            <p className="text-tagline-3 font-inter-tight text-primary-50/40 mb-2.5 px-3.5 font-normal uppercase tracking-wider">
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
                      'text-tagline-2 font-inter-tight flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-normal transition-colors',
                      isActive
                        ? 'bg-background-7 text-accent'
                        : 'text-primary-50/60 hover:bg-background-7 hover:text-accent',
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
          className="text-tagline-2 font-inter-tight text-primary-50/40 hover:text-primary-50/70 flex items-center gap-2 rounded-xl px-3.5 py-2.5 font-normal transition-colors"
        >
          <span>+ Add Pack</span>
        </Link>
      </div>
    </aside>
  );
}
