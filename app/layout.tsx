import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Lumiere Joias | Joias & Pratas Exclusivas',
  description: 'Descubra joias e pratas exclusivas com design sofisticado. Colares, aneis, brincos e pulseiras que realcam sua elegancia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
