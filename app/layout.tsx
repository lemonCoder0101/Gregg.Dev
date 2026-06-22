import type { Metadata } from "next";
import "./globals.css";
import { personal } from "./data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://gregg-jimenez.dev"),
  title: `${personal.name} | Full-Stack Developer Portfolio`,
  description: `${personal.summary} — Explore my projects, skills, and experience as a BSIT graduate and aspiring full-stack developer.`,
  keywords: [
    "Gregg Anthony Jimenez",
    "Full-Stack Developer",
    "IT Graduate",
    "React Developer",
    "Laravel",
    "Portfolio",
    "Philippines",
    "Tarlac State University",
    "Web Developer",
    "Magna Cum Laude",
    "BSIT",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gregg-jimenez.dev",
    title: `${personal.name} | Full-Stack Developer Portfolio`,
    description: personal.summary,
    siteName: `${personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | Full-Stack Developer Portfolio`,
    description: personal.summary,
    images: ["/og-image.png"],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
