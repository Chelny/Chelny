import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL ?? "http://localhost:3000"),
  title: "Chelny Duplan | Senior Software Engineer",
  description: "Senior Software Engineer building web and mobile products. Specialized in frontend, full-stack development, TypeScript, React, Angular and Ionic.",
  applicationName: "Chelny Duplan Portfolio",
  authors: [{ name: "Chelny Duplan" }],
  creator: "Chelny Duplan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Chelny Duplan Portfolio",
    title: "Chelny Duplan | Senior Software Engineer",
    description:
      "Explore my work in frontend, full-stack and mobile development, with many years of software engineering experience.",
    // TODO: Add images when you have a social preview image:
    // images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelny Duplan | Senior Software Engineer",
    description:
      "Building web and mobile products across frontend, full-stack and product engineering.",
    // images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="cd_theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
