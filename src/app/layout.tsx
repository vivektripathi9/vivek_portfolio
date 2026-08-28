import type { Metadata } from "next";
import { Inter, Monoton } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/data/site";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} • ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio of Vivek Tripathi — web developer building Shopify storefronts and brand websites.",
  openGraph: {
    title: `${siteConfig.name} • ${siteConfig.title}`,
    description:
      "Shopify storefronts and brand websites — selected work, experience, and contact.",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} • ${siteConfig.title}`,
    description:
      "Web developer building Shopify storefronts and brand websites.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${monoton.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
