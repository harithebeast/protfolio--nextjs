import type { Metadata } from 'next'
import './globals.css'
import Layout from '../components/Layout'

export const metadata: Metadata = {
  title: 'Portfolio',
  
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
