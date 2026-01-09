import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://brunoescorse.com";
const siteName = "Bruno Escorse Bueno";
const title = "Bruno Escorse Bueno — Designer Gráfico";
const description =
  "Designer gráfico focado em design de produtos, identidade visual e composições estratégicas. Experiência prática em e-commerce, atacado e landing pages, com uso consciente de inteligência artificial mantendo o olhar humano.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "designer gráfico",
    "design de produtos",
    "identidade visual",
    "mockups",
    "e-commerce design",
    "landing page design",
    "branding",
    "design estratégico",
    "composições visuais",
    "Rio Grande do Sul",
  ],
  authors: [{ name: "Bruno Escorse Bueno", url: siteUrl }],
  creator: "Bruno Escorse Bueno",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
