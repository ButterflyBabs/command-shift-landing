import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://commandshift.life"),
  title: "The Command Shift | 21-Day Challenge with AmiLynne Carroll",
  description: "A 21-day challenge to stop living by reaction and start living by command. Join AmiLynne Carroll (Babs) for daily practices that transform your relationship with time, energy, and aligned action.",
  keywords: "life command, aligned action, personal transformation, AmiLynne Carroll, Babs, Sacred Kaleidoscope, LifeCharter, 21 day challenge, stop reacting, intentional living",
  authors: [{ name: "AmiLynne Carroll" }],
  creator: "AmiLynne Carroll",
  publisher: "Sacred Kaleidoscope Community",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://commandshift.life",
    siteName: "The Command Shift",
    title: "The Command Shift | 21-Day Challenge",
    description: "Stop living by reaction. Start living by command. A 21-day challenge with AmiLynne Carroll.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Command Shift - 21 Day Challenge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Command Shift | 21-Day Challenge",
    description: "Stop living by reaction. Start living by command. A 21-day challenge with AmiLynne Carroll.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://commandshift.life",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A2B4A" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
