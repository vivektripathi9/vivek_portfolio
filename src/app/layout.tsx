import type { Metadata } from "next";
import { Instrument_Serif, Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";

import { PageCurtain } from "@/components/motion/PageCurtain";
import { Preloader } from "@/components/motion/Preloader";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
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
  themeColor: "#0a0a0b",
};

// Runs before paint so repeat visits in a session never flash the preloader.
const introScript = `try{if(sessionStorage.getItem("vt-intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="skip"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="intro-state" strategy="beforeInteractive">
          {introScript}
        </Script>
        <noscript>
          <style>{`.preloader{display:none}[data-reveal]{transform:none!important;clip-path:none!important;opacity:1!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll />
        <PageCurtain />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
