import Link from 'next/link'
import { projects } from '@/content/projects'

export const metadata = { title: 'Projects' }

export default function Projects() {
  return (
    <>
      <Link href="/">&larr; Back</Link>
      <h1 className="mt-6 text-2xl font-semibold">Projects</h1>
      <ul className="mt-6 space-y-4">
        {projects.map((p) => (
          <li key={p.title}>
            <div className="flex justify-between gap-4">
              <a href={p.href ?? p.github}>{p.title}</a>
              {p.github && p.href && <a href={p.github}>GitHub</a>}
            </div>
            <p className="text-[var(--muted)]">{p.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
