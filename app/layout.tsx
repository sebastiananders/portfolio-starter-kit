import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import AiChat from './components/ai-chat'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sebastian Anders | Product Manager & Builder',
    template: '%s | Sebastian Anders',
  },
  description: 'Product manager with 15 years in digital products who takes products from opportunity to release — and prototypes in code.',
  openGraph: {
    title: 'Sebastian Anders | Product Manager & Builder',
    description: 'Product manager with 15 years in digital products who takes products from opportunity to release — and prototypes in code.',
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
        <main className="min-w-0 mt-6 flex flex-col pb-24">
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
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-xl mx-4 lg:mx-auto px-2 md:px-0 py-4">
            <AiChat />
          </div>
        </div>
      </body>
    </html>
  )
}
