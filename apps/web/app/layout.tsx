import './globals.css'
import '../styles/global.css'
import '@repo/ui/styles.css'
import type { Metadata } from 'next'
import { ScanQR, Sidebar } from '@repo/ui'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CT-POC',
  description: 'A POC for CT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`flex ${montserrat.className} grid grid-cols-1 md:grid-cols-[320px_calc(100%-320px)] h-screen`}
      >
        <Suspense>
          <Sidebar />
          <div className="bg-white text-black pb-20 md:pb-0">
            {children}
            <ScanQR className="absolute z-10 bottom-28 md:bottom-6 right-6" />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
