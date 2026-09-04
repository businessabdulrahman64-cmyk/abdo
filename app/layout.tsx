import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/data/site'
import { Cursor } from '@/components/motion/cursor'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const title = `${site.name} — ${site.title}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'AI web developer',
    'digital product designer',
    'Next.js developer',
    'SaaS development',
    'UI/UX design',
    'AI integration',
    'business automation',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#131315',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-signal focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-signal-foreground"
        >
          Skip to content
        </a>
        {children}
        <Cursor />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
