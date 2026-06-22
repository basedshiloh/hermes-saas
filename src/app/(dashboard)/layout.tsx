import { ReactNode } from "react";

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
