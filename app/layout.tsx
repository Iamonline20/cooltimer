import type React from "react"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: "500", // 500 is the weight for Medium
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
