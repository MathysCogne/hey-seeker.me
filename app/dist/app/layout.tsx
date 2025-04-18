import type React from "react"
import { Poppins } from "next/font/google"

// Initialiser la police Poppins avec les poids nécessaires
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={poppins.className}>
      <head>
        <title>HeySeeker - Créateur de vidéos TikTok & Reels</title>
        <meta
          name="description"
          content="Créez des vidéos courtes attrayantes avec HeySeeker pour TikTok et Instagram Reels"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
