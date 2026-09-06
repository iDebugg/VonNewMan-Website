import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/utils/site-url";
import { JsonLd } from "@/components/layout/JsonLd";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-source-serif",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: site.name,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${sourceSerif.variable} ${publicSans.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-control focus:bg-paper focus:px-4 focus:py-2 focus:text-label focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <BackToTop />
        <JsonLd />
      </body>
    </html>
  );
}
