import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sebastian Anders | Lead Design Engineer',
    template: '%s | Sebastian Anders',
  },
  description: 'Lead Design Engineer with 15+ years experience in UX design, product strategy, and full-stack development',
  openGraph: {
    title: 'Sebastian Anders | Lead Design Engineer',
    description: 'Lead Design Engineer with 15+ years experience in UX design, product strategy, and full-stack development',
    url: baseUrl,
    siteName: 'Sebastian Anders',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mt-8">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <div className="max-w-xl mx-4 lg:mx-auto px-2 md:px-0">
            <Navbar />
          </div>
          {children}
          <div className="max-w-xl mx-4 lg:mx-auto px-2 md:px-0">
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
