import type { Metadata } from "next";
import { Inter, Monoton } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://portfolio-placeholder.vercel.app"),
  title: {
    default: "Vivek Tripathi • Front-End Developer",
    template: "%s | Vivek Tripathi",
  },
  description:
    "Portfolio of Vivek Tripathi — Front-End Developer building high-performance, scalable web experiences.",
  openGraph: {
    title: "Vivek Tripathi • Front-End Developer",
    description:
      "Portfolio of Vivek Tripathi with selected work, experience, and contact details.",
    url: "https://portfolio-placeholder.vercel.app",
    siteName: "Vivek Tripathi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Tripathi • Front-End Developer",
    description:
      "Portfolio of Vivek Tripathi — Front-End Developer.",
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
        {children}
      </body>
    </html>
  );
}
