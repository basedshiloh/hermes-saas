import SmoothScrollProvider from "@/src/components/animation/smooth-scroll";
import Footer from "@/src/components/shared/layout/footer/footer";
import Navbar from "@/src/components/shared/layout/navbar/navbar";
import { MobileMenuProvider } from "@/src/context/MobileMenuContext";
import { ReactNode } from "react";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MobileMenuProvider>
      <SmoothScrollProvider>
        <Navbar />
        <main className="bg-background-13">{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </MobileMenuProvider>
  );
}
