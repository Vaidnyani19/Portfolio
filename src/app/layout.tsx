import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SlideCursor from "./components/SlideCursor";
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DS/AI Engineer Portfolio",
  description:
    "Data Science & AI Engineer Portfolio — Building intelligence, one model at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${notoSans.variable} antialiased`}
      >
        <GlobalBackground />
        <SlideCursor />
        <Header />
        <PageTransition>
            {children}
        </PageTransition>
      </body>
    </html>
  );
}
