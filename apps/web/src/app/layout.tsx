import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import { ToastProvider } from "@/context/ToastContext";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metatask.ai"),
  title: {
    default: "MetaTask - AI Freelancing Platform",
    template: "%s | MetaTask",
  },
  description:
    "A decentralized freelancing platform powered by blockchain and AI. Discover, collaborate, and earn in a trustless environment.",
  openGraph: {
    title: "MetaTask - AI Freelancing Platform",
    description:
      "Join MetaTask to find AI-powered freelance gigs on a decentralized network.",
    url: "https://metatask.ai",
    siteName: "MetaTask",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "MetaTask Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaTask - AI Freelancing Platform",
    description:
      "AI + Blockchain for the freelance economy. Decentralized, smart, and scalable.",
    images: ["/images/logo.png"],
    creator: "@metatask_ai",
  },
  keywords: [
    "decentralized freelancing",
    "AI gigs",
    "blockchain jobs",
    "MetaTask platform",
    "freelance with crypto",
    "trustless freelancing",
  ],
  authors: [{ name: "MetaTask Team", url: "https://metatask.ai/about" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: "https://metatask.ai",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${nunito.variable} antialiased`}>
          <ToastProvider>
              {children}
          </ToastProvider>
      </body>
      
    </html>
  );
}
