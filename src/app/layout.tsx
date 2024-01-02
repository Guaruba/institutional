import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Guaruba | Home',
  description: 'Solucionar é o nosso negócio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex min-h-screen flex-col items-center justify-between w-full bg-zinc-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
