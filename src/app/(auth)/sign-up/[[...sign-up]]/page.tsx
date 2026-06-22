import { Metadata } from "next";
import AuthGate from "../../auth-gate";

export const metadata: Metadata = {
  title: "Sign Up - Hermes Agent",
};

export default function SignUpPage() {
  return <AuthGate mode="sign-up" />;
}
