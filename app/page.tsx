import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { formatDate, site } from '@/lib/site'

const pinned = [
  { title: 'Resume', href: '/Resume.pdf' },
  { title: 'Publications', href: '/publications' },
  { title: 'Projects', href: '/projects' },
]

export default function Home() {
  const posts = getPosts()
  return (
    <>
      <h1 className="text-2xl font-semibold">
        {site.name} <span className="text-[var(--muted)]">/</span>
      </h1>
      <p className="mt-6">
        I am a PhD student in Robotics and AI at the University of Michigan. I like research and
        development, especially robotics, artificial intelligence and machine learning.
      </p>
      <p className="mt-4">
        Contact: <a href={`mailto:${site.email}`}>{site.email}</a> ·{' '}
        <a href={site.github}>GitHub</a> · <a href={site.linkedin}>LinkedIn</a> ·{' '}
        <a href={site.twitter}>Twitter</a>
      </p>

      <ul className="mt-10 space-y-2">
        {pinned.map((p) => (
          <li key={p.href} className="flex justify-between gap-4">
            <Link href={p.href}>{p.title}</Link>
            <span className="text-[var(--muted)]">Pinned</span>
          </li>
        ))}
        {posts.map((p) => (
          <li key={p.slug} className="flex justify-between gap-4">
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            <span className="shrink-0 text-[var(--muted)]">{formatDate(p.date)}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
