import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artsy',
  description: 'Developed by Solomon Bassey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap" rel="stylesheet"></link>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
