import Link from 'next/link'
import { publications } from '@/content/publications'

export const metadata = { title: 'Publications' }

export default function Publications() {
  return (
    <>
      <Link href="/">&larr; Back</Link>
      <h1 className="mt-6 text-2xl font-semibold">Publications</h1>
      <ul className="mt-6 space-y-4">
        {publications.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.title}</a>
            <p className="text-[var(--muted)]">{p.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
