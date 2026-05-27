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
  title: "Zakaria Tetbirt | Full-Stack Developer & CS Student",
  description: "Computer Science student at ESTIN and Full-Stack Developer. Building clean, scalable, and premium web experiences with Next.js, Supabase, and AI engineering.",
  keywords: [
    "Zakaria Tetbirt",
    "ESTIN",
    "Algeria Developer",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Next.js Portfolio",
    "Saha-Event",
    "Supabase Developer"
  ],
  authors: [{ name: "Zakaria Tetbirt" }],
  creator: "Zakaria Tetbirt",
  openGraph: {
    title: "Zakaria Tetbirt | Full-Stack Developer & CS Student",
    description: "Computer Science student at ESTIN and Full-Stack Developer. Specializing in building premium and scalable web solutions.",
    url: "https://github.com/Zakaria-tet-cs",
    siteName: "Zakaria Tetbirt Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakaria Tetbirt | Full-Stack Developer & CS Student",
    description: "Computer Science student at ESTIN and Full-Stack Developer. Specializing in building premium and scalable web solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full bg-navy-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
