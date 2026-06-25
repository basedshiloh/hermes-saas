'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/utils/cn';

const links = [
  { id: 'agents', title: 'My Agents', href: '/dashboard', iconClass: 'icon-grid' },
  { id: 'settings', title: 'Settings', href: '/dashboard/settings', iconClass: 'icon-settings' },
];

export default function Sidebar() {
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
          {links.map((link) => {
            const isActive =
              link.href === '/dashboard'
                ? pathname === '/dashboard' || pathname.startsWith('/dashboard/agents')
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
      </nav>

      <div className="border-stroke-5 border-t px-3 py-3">
        <Link
          href="/dashboard/new"
          className="bg-secondary text-tagline-2 font-ibm-plex-mono flex items-center justify-center gap-2 rounded-full py-2.5 font-normal text-white transition-opacity hover:opacity-90"
        >
          + Deploy Agent
        </Link>
      </div>
    </aside>
  );
}
