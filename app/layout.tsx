import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter, Besley } from 'next/font/google'
import ThemeToggle from '@/components/ThemeToggle'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const besley = Besley({ subsets: ['latin'], style: 'italic', variable: '--font-besley' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: 'Robotics, AI and software.',
}

// Light by default; only a stored choice switches to dark (matches jacobg.co)
const themeScript = `try{document.documentElement.classList.add(localStorage.getItem('theme')==='dark'?'dark':'light')}catch(e){document.documentElement.classList.add('light')}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${besley.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header>
          <nav>
            <Link href="/">{site.name}</Link>
            <ThemeToggle />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
