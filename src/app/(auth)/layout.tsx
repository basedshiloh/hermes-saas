import { ReactNode } from "react";

// Clerk's <SignIn>/<SignUp> require a request context, so the auth pages must
// render on demand rather than being prerendered at build time.
export const dynamic = "force-dynamic";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
