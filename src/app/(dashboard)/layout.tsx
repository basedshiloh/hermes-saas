import { ReactNode } from "react";

// Dashboard is per-user and auth-gated, so it must never be prerendered at
// build time (Clerk components require a request context). Render on demand.
export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-background-6 min-h-screen">
      {children}
    </div>
  );
}
