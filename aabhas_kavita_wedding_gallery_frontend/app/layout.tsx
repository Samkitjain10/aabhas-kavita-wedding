import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { HideErrorOverlay } from "@/components/hide-error-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ankita and Sahil's Wedding Gallery",
  description: "Share and view beautiful memories from our wedding",
  icons: {
    icon: [
      { url: "/Ankita and Sahil wedding logo.png", sizes: "any" },
      { url: "/icon.png", sizes: "any" },
    ],
    shortcut: "/Ankita and Sahil wedding logo.png",
    apple: "/Ankita and Sahil wedding logo.png",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
      >
        <HideErrorOverlay />
        {children}
      </body>
    </html>
  );
}
