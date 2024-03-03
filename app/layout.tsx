import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

import Footer from '~/components/shared/footer'
import Navbar from '~/components/shared/Navbar'
import { siteInfo } from '~/config/site'

const releway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://car-city.vercel.app'),
  title: {
    default: siteInfo.name,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: siteInfo.author,
  generator: siteInfo.generator,
  applicationName: siteInfo.applicationName,
  keywords: siteInfo.keywords,
  creator: siteInfo.name,
  publisher: siteInfo.publisher,
  robots: siteInfo.robots,
  openGraph: {
    title: siteInfo.name,
    description: siteInfo.description,
    siteName: siteInfo.name,
    ...siteInfo.openGraph
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={releway.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
