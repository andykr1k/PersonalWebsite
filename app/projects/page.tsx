import { projects } from '@/content/projects'

export const metadata = { title: 'Projects' }

export default function Projects() {
  return (
    <div className="prose">
      <div className="post-title">
        <h1>Projects</h1>
      </div>
      <div className="entries">
        {projects.map((p) => (
          <div key={p.title} className="entry">
            <p className="entry-title">
              <a href={p.href ?? p.github}>{p.title}</a>
            </p>
            <p className="entry-meta">
              {p.description}
              {p.github && p.href && (
                <>
                  {' · '}
                  <a href={p.github}>GitHub</a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
