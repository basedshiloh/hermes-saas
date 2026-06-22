import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Hermes Agent",
};

export default function SignInPage() {
  return (
    <div className="bg-background-13 flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
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
            formButtonPrimary:
              "bg-primary-600 hover:bg-primary-700 text-white",
          },
        }}
      />
    </div>
  );
}
