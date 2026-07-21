import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftaiapps.com"),
  title: "SwiftAIApps | AI Agent & Enterprise AI Engineering Company",
  description:
    "We engineer AI agents, enterprise copilots, RAG systems, and workflow automation for organizations that want to operate faster with less manual effort. Production-ready. Ships in weeks.",
  keywords: [
    "AI agent development",
    "enterprise AI solutions",
    "agentic AI development",
    "AI workflow automation",
    "enterprise copilot development",
    "RAG development services",
    "multi-agent systems",
    "AI digital workers",
    "document intelligence",
  ],
  authors: [{ name: "SwiftAIApps" }],
  icons: {
    icon: "/brand/swiftaiapps-mark.png",
    apple: "/brand/swiftaiapps-mark.png",
  },
  openGraph: {
    title: "SwiftAIApps | AI Agent & Enterprise AI Engineering Company",
    description:
      "We engineer AI agents, enterprise copilots, and intelligent workflow systems that help organizations automate operations and move faster.",
    type: "website",
    siteName: "SwiftAIApps",
    images: [
      {
        url: "/brand/swiftaiapps-social-banner.jpg",
        width: 1200,
        height: 630,
        alt: "SwiftAIApps — AI agents that think, decide, and get work done",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftAIApps | AI Agent & Enterprise AI Engineering Company",
    description:
      "We engineer AI agents, enterprise copilots, and intelligent workflow systems that help organizations automate operations and move faster.",
    images: ["/brand/swiftaiapps-social-banner.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
