import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import './globals.css'

import Navbar from '~/components/shared/Navbar'

const releway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car City',
  description:
    'Car City takes car care to the next level with AI! Find trusted professionals in Dhaka for rentals, repairs, parts, and more. AI-powered matching, predictive maintenance, and smart search await. Start your journey today!',
  keywords: [
    'car services',
    'car repair',
    'car rental',
    'car parts',
    'car care',
    'auto repair',
    'mechanic',
    'auto parts store',
    'car wash',
    'detailing',
    'car service marketplace',
    'online car booking',
    'compare car service price',
    'trusted car professionals'
  ],
  generator:
    'Car City: Revolutionizing Car Care with AI-Powered Solutions. Searching for reliable car services in Dhaka just got easier! Car City leverages cutting-edge AI technology to connect you with trusted professionals for rentals, repairs, parts, and more.'
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
      </body>
    </html>
  )
}
