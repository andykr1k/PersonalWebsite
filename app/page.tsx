import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { formatDate, site } from '@/lib/site'

const pinned = [
  { title: 'Publications', href: '/publications' },
  { title: 'Projects', href: '/projects' },
  { title: 'Resume', href: '/Resume.pdf' },
]

function Row({ href, title, date }: { href: string; title: string; date: string }) {
  return (
    <li>
      <Link href={href}>
        <div className="post-item">
          <p className="title">{title}</p>
          <div className="divider" />
          <p className="date">{date}</p>
        </div>
      </Link>
    </li>
  )
}

export default function Home() {
  const posts = getPosts()
  return (
    <>
      <div className="about prose">
        <p>
          I&rsquo;m a <strong>PhD student</strong> in <strong>robotics</strong> and <strong>AI</strong>{' '}
          at the University of Michigan. You can check out some of my projects on{' '}
          <a href={site.github}>
            <strong>GitHub</strong>
          </a>
          .
        </p>
        <p>
          I&rsquo;m interested in robotics, artificial intelligence, and machine learning. I enjoy
          research and development, especially building systems that learn.
        </p>
        <p>
          Contact me at{' '}
          <strong>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </strong>
        </p>
      </div>
      <ul className="post-list">
        {pinned.map((p) => (
          <Row key={p.href} href={p.href} title={p.title} date="Pinned" />
        ))}
        {posts.map((p) => (
          <Row key={p.slug} href={`/blog/${p.slug}`} title={p.title} date={formatDate(p.date)} />
        ))}
      </ul>
    </>
  )
}
