import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Eslam Maarouf | Video Editor & Visual Storyteller',
  description: 'Premium portfolio showcasing exceptional video editing and visual storytelling work. Minimal, cinematic, and Awwwards-quality designs.',
  keywords: ['video editor', 'visual storyteller', 'portfolio', 'filmmaker', 'motion graphics'],
  authors: [{ name: 'Eslam Maarouf' }],
  creator: 'Eslam Maarouf',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eslammarouf.com',
    siteName: 'Eslam Maarouf Portfolio',
    title: 'Eslam Maarouf | Video Editor & Visual Storyteller',
    description: 'Premium portfolio showcasing exceptional video editing and visual storytelling work.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Eslam Maarouf Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eslam Maarouf | Video Editor & Visual Storyteller',
    description: 'Premium portfolio showcasing exceptional video editing and visual storytelling work.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23ffffff'>EM</text></svg>" />
      </head>
      <body className="bg-dark-bg text-dark-text font-inter antialiased">
        {children}
      </body>
    </html>
  )
}