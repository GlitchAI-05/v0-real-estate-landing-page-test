import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Cobalt Realty | Pretoria East Property Specialist',
    template: '%s | Cobalt Realty',
  },
  description: 'Sell your home with confidence. Expert real estate services in Pretoria East with Tanya Bossof. Free property valuations available.',
  keywords: ['Pretoria East real estate', 'property for sale', 'estate agent Pretoria', 'Tanya Bossof', 'Cobalt Realty', 'sell my house Pretoria', 'property valuation'],
  authors: [{ name: 'Cobalt Realty' }],
  creator: 'Cobalt Realty',
  openGraph: {
    title: 'Cobalt Realty | Pretoria East Property Specialist',
    description: 'Sell your home with confidence. Expert real estate services in Pretoria East with Tanya Bossof.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Cobalt Realty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobalt Realty | Pretoria East Property Specialist',
    description: 'Sell your home with confidence. Expert real estate services in Pretoria East.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1D4ED8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
