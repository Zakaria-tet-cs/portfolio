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
  description: "Computer Science student at ESTIN and Full-Stack Developer building modern web applications with React, Next.js, Node.js, PostgreSQL, and Prisma.",
  keywords: [
    "Zakaria Tetbirt",
    "ESTIN",
    "Full-Stack Developer",
    "Computer Science Student",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Software Engineer",
    "Algeria"
  ],
  authors: [{ name: "Zakaria Tetbirt" }],
  creator: "Zakaria Tetbirt",
  openGraph: {
    title: "Zakaria Tetbirt | Full-Stack Developer & CS Student",
    description: "Computer Science student at ESTIN building modern web applications with React, Next.js, Node.js, and PostgreSQL.",
    url: "https://github.com/Zakaria-tet-cs",
    siteName: "Zakaria Tetbirt Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakaria Tetbirt | Full-Stack Developer & CS Student",
    description: "Computer Science student at ESTIN building modern web applications with React, Next.js, Node.js, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
      <body className="min-h-full flex flex-col relative bg-noise">
        {/* SVG Gooey Filter for Navbar Blobs */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>

        <div className="aurora-bg"></div>
        {children}
      </body>
    </html>
  );
}