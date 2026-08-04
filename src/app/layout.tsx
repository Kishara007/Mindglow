import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mindglow.online'),
  title: "Mindglow | A Quiet Place for a Loud Mind",
  description: "An ad-free, open-access sanctuary built for mental stillness. Experience the calming interactive lantern meditation.",
  openGraph: {
    title: "Mindglow",
    description: "A quiet place for a loud mind.",
    url: "https://www.mindglow.online",
    siteName: "Mindglow",
    images: [
      {
        url: "https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785754353/improve_same_image_qulity_2K_202608031542_uisrsf.jpg",
        width: 1200,
        height: 630,
        alt: "Mindglow - A Quiet Place for a Loud Mind"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindglow",
    description: "A quiet place for a loud mind.",
    images: ["https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785754353/improve_same_image_qulity_2K_202608031542_uisrsf.jpg"],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mindglow',
  description: 'An interactive sanctuary for mental stillness and meditation.',
  url: 'https://www.mindglow.online',
  applicationCategory: 'HealthAndFitnessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-full font-sans selection:bg-black/10 selection:text-black">
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9ERKYLCDKC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ERKYLCDKC');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
