import { Navbar } from '@/components/navbar/Navbar'
import 'bulma/css/bulma.min.css';
import '@mantine/carousel/styles.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Load the Inter font with 'latin' subset.
const inter = Inter({ subsets: ['latin'] })

/**
 * Metadata for the RootLayout component.
 */
export const metadata: Metadata = {
  title: 'Prject Square',
  description: 'José Mourinho brings confidence to pan-African Sanlam campaign.',
}

/**
 * The RootLayout component represents the root layout of the application.
 * @param {object} props - The properties of the RootLayout component.
 * @param {React.ReactNode} props.children - The children components to be rendered within the layout.
 * @returns {JSX.Element} The RootLayout component JSX.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
