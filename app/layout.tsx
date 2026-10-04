import type { Metadata } from 'next'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: 'Personal website of Andrew Krikorian: robotics, AI and software.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-2xl px-4 py-16">{children}</main>
      </body>
    </html>
  )
}
