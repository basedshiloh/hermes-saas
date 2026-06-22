"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";

const clerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
);

const appearance = {
  elements: {
    rootBox: "mx-auto",
    card: "bg-background-8 shadow-6 border-stroke-5 border rounded-xl",
    headerTitle: "text-white",
    headerSubtitle: "text-white/60",
    socialButtonsBlockButton:
      "bg-background-7 border-stroke-5 text-white hover:bg-background-9",
    formFieldLabel: "text-white/80",
    formFieldInput:
      "bg-background-7 border-stroke-5 text-white placeholder:text-white/40",
    footerActionLink: "text-primary-400 hover:text-primary-300",
    formButtonPrimary: "bg-primary-600 hover:bg-primary-700 text-white",
  },
};

export default function AuthGate({ mode }: { mode: "sign-in" | "sign-up" }) {
  if (!clerkEnabled) {
    return (
      <div className="bg-background-13 flex min-h-screen items-center justify-center">
        <div className="border-stroke-5 bg-background-8 shadow-6 w-full max-w-sm space-y-6 rounded-xl border p-8 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              {mode === "sign-up" ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-sm text-white/50">
              Authentication is being configured. Check back soon.
            </p>
          </div>
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-13 flex min-h-screen items-center justify-center">
      {mode === "sign-up" ? (
        <SignUp appearance={appearance} />
      ) : (
        <SignIn appearance={appearance} />
      )}
    </div>
  );
}
