import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/layout/header/app-header";
import { AppFooter } from "@/components/layout/app-footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Squid - Beautiful Landing Page Design for You",
    template: "%s | Squid",
  },
  description:
    "Create stunning, responsive landing pages with Squid. Beautiful dark-themed design system with smooth animations, mobile-first approach, and modern UI components built with Next.js and Tailwind CSS.",
  keywords: [
    "landing page",
    "design system",
    "Next.js",
    "Tailwind CSS",
    "responsive design",
    "dark theme",
    "UI components",
    "modern design",
    "web development",
    "React components",
    "Framer Motion",
    "mobile-first",
  ],
  authors: [{ name: "Abdullah Bakry" }],
  creator: "Abdullah Bakry",
  publisher: "Abdullah Bakry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://coldwell-task.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coldwell-task.vercel.app/",
    title: "Squid - Beautiful Landing Page Design for You",
    description:
      "Create stunning, responsive landing pages with Squid. Beautiful dark-themed design system with smooth animations and modern UI components.",
    siteName: "Squid",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Squid Landing Page Preview",
      },
      {
        url: "/logo.svg",
        width: 1200,
        height: 1200,
        alt: "Squid Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Squid - Beautiful Landing Page Design for You",
    description:
      "Create stunning, responsive landing pages with Squid. Beautiful dark-themed design system with smooth animations and modern UI components.",
    images: ["/logo.svg"],
    creator: "@squiddesign",
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
  category: "technology",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Squid",
    "application-name": "Squid",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${poppins.className} bg-black text-white min-h-screen antialiased flex flex-col`}
      >
        <AppHeader />
        <main className="flex-1 pt-14 bg-black text-white">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
