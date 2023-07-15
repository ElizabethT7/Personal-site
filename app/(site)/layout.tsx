import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Elisabeth's website`,
  description: 'Frontend developers blog website',
  keywords: [
    'Frontend developers',
    'blog website',
    `Elisabeth's website`,
    'Next.js',
    'React',
    'JavaScript',
    'сайт',
    'заказать сайт'
  ],
  applicationName: `Elisabeth's website app`,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
