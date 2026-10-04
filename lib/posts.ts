import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const dir = path.join(process.cwd(), 'content/posts')

export function getPosts() {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
      return {
        slug: f.replace(/\.mdx$/, ''),
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        draft: Boolean(data.draft),
        content,
      }
    })
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}
