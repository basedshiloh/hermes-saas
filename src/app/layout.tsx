import { ClerkProvider } from "@clerk/nextjs";
import { fontVariables } from "@/src/utils/font";
import { ReactNode, Suspense } from "react";
import "./globals.css";

// Clerk is only active once its publishable key is configured. This lets the
// marketing site deploy and render with zero env vars; auth turns on later.
const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const body = (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );

  if (!clerkEnabled) return body;

  return <ClerkProvider>{body}</ClerkProvider>;
}
