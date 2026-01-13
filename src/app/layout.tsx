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
  metadataBase: new URL("https://semlohsolutions.com"),
  title: {
    default: "Semloh | Institutional Software & Strategic Consulting",
    template: "%s | Semloh"
  },
  description: "Semloh is a multidisciplinary firm specializing in high-performance software development, strategic technical consulting, and venture investing. Operating at the intersection of creation and capital.",
  keywords: ["Software Development", "Technical Consulting", "Venture Capital", "Website Redesign", "Institutional Design", "Chicago Tech", "Semloh Solutions"],
  authors: [{ name: "Semloh Team" }],
  creator: "Semloh",
  publisher: "Semloh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://semlohsolutions.com",
    siteName: "Semloh",
    title: "Semloh | Institutional Software & Strategic Consulting",
    description: "High-performance software development and strategic technical guidance for evolving organizations.",
    images: [
      {
        url: "/og-image.png", // We should ideally have this file
        width: 1200,
        height: 630,
        alt: "Semloh Institutional Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semloh | Institutional Software & Strategic Consulting",
    description: "High-performance software development and strategic technical guidance for evolving organizations.",
    images: ["/og-image.png"],
    creator: "@semlohsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Semloh",
    "url": "https://semlohsolutions.com",
    "logo": "https://semlohsolutions.com/logo.png",
    "description": "A multidisciplinary firm dedicated to software development, strategic consulting, and venture investing.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://x.com/semlohsolutions",
      "https://linkedin.com/company/semloh"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
