import { publications } from '@/content/publications'

export const metadata = { title: 'Publications' }

export default function Publications() {
  return (
    <div className="prose">
      <div className="post-title">
        <h1>Publications</h1>
      </div>
      <div className="entries">
        {publications.map((p) => (
          <div key={p.href} className="entry">
            <p className="entry-title">
              <a href={p.href}>{p.title}</a>
            </p>
            <p className="entry-meta">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
