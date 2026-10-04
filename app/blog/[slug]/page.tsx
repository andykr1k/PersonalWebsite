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
      <div className="post-title">
        <h1>{post.title}</h1>
        <p>{formatDate(post.date)}</p>
      </div>
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
