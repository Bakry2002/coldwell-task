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
  title: "Squid",
  description: "Beautiful Landing Page Design for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
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
