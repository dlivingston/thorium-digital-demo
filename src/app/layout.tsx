import type { Metadata } from 'next'
import Header from '@/app/ui/header';
import './globals.css'


export const metadata: Metadata = {
  title: 'Thorium Digital Demo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zfq8yxj.css"/>
      </head>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  )
}
