import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans, GeistMono } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jjxlabs",
  description:
    " Web agency specializing in providing creative and effective web solutions for businesses. Contact us for stunning websites, e-commerce development, and digital marketing services.",
  keywords:
    "web agency, web solutions, website development, e-commerce development, digital marketing,agence web, solutions web, développerment de sites web, développement d'e-commerce, marketing numérique ",
  author: "jjxlabs",
  creator: "Julien Atanassov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
