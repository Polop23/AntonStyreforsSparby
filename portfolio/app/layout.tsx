import type { Metadata } from 'next'
// Import your chosen fonts
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Set CSS variable
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk', // Set CSS variable
})

export const metadata: Metadata = {
  title: 'My Portfolio - In Progress',
  description: 'A portfolio of work, play, and thought.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}