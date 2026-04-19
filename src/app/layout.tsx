import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0a0907",
  colorScheme: "dark" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nextcommandai.com"),
  applicationName: "Next Command AI",
  manifest: "/manifest.webmanifest",
  title:
    "Next Command AI Consulting | Secure AI, Cybersecurity & Technology Modernization",
  description:
    "Next Command AI Consulting, LLC is a veteran-owned consulting firm specializing in AI strategy, cybersecurity, and technology modernization for government agencies and prime contractors.",
  openGraph: {
    title: "Next Command AI Consulting | Secure AI Strategy & Cybersecurity",
    description:
      "Veteran-owned consulting firm specializing in AI strategy, cybersecurity, and technology modernization for government agencies and prime contractors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Command AI Consulting | Secure AI Strategy & Cybersecurity",
    description:
      "Veteran-owned consulting firm specializing in AI strategy, cybersecurity, and technology modernization for government agencies and prime contractors.",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-parchment">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
