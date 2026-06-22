import { Metadata } from "next";
import AuthGate from "../../auth-gate";

export const metadata: Metadata = {
  title: "Sign In - Hermes Agent",
};

export default function SignInPage() {
  return <AuthGate mode="sign-in" />;
}
