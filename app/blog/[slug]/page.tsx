import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  return post && { title: post.title, description: post.summary }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  if (!post) notFound()
  return (
    <article>
      <Link href="/">&larr; Back</Link>
      <h1 className="mt-6 text-2xl font-semibold">{post.title}</h1>
      <p className="text-[var(--muted)]">{formatDate(post.date)}</p>
      <div className="prose mt-6">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
