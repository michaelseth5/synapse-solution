import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AIAssistant } from "@/components/ai-assistant";
import { DemoMode } from "@/components/demo-mode";
import { DemoHighlights } from "@/components/demo-highlights";
import { DemoDataIndicator } from "@/components/demo-data-generator";
import { DemoWelcome } from "@/components/demo-welcome";

// Feature flag to control floating callouts
const SHOW_CALLOUTS = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse Solutions - Agentic AI Platform",
  description: "Unify ERP, CRM, HCM, projects, and feedback into a single control tower. Faster decisions, fewer duplicates, higher win rates.",
  keywords: ["AI", "finance", "sales", "operations", "ERP", "CRM", "HCM", "agentic AI"],
  authors: [{ name: "Synapse Solutions" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AIAssistant />
        <DemoWelcome />
        <DemoMode />
        {SHOW_CALLOUTS && <DemoHighlights />}
        <DemoDataIndicator />
      </body>
    </html>
  );
}
