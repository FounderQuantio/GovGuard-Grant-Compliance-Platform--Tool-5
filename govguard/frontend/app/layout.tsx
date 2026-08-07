import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./quantio-theme.css";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--qg-font-loaded" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], variable: "--qg-font-display" });

export const metadata: Metadata = {
  title: "GovGuard™ — Grant Compliance Platform",
  description: "Federal grant compliance and fraud prevention",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <style>{`
          @media (max-width: 768px) {
            .qg-root-shell { height: auto !important; overflow: visible !important; }
            .qg-root-content { overflow: visible !important; }
          }
        `}</style>
        <div className="qg-root-shell" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
          <SiteHeader />
          <div className="qg-root-content" style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
