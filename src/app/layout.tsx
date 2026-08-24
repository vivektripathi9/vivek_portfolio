import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-placeholder.vercel.app"),
  title: {
    default: "Aarav Mehta | Creative Developer Portfolio",
    template: "%s | Aarav Mehta",
  },
  description:
    "Modern, premium, animation-rich portfolio website template built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: "Aarav Mehta | Creative Developer Portfolio",
    description:
      "A polished developer portfolio template with premium presentation, selected work, services, and contact sections.",
    url: "https://portfolio-placeholder.vercel.app",
    siteName: "Aarav Mehta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Mehta | Creative Developer Portfolio",
    description:
      "Premium personal portfolio template built for modern frontend developers.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
