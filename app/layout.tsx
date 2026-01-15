import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sfPro = localFont({
  src: "../public/SF-Pro.ttf",
  variable: "--font-sf-pro",
})

export const metadata: Metadata = {
  title: "Aptly - Airbnb for Parking",
  description: "Find and rent parking spots from your neighbors. The smarter way to park.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} font-sans antialiased tracking-tight`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
