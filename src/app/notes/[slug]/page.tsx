import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GameOfLife from '@/components/mdx/GameOfLife';

const components = {
  GameOfLife,
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter, content } = await getPostBySlug(params.slug);

    return (
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 mt-6">
        <header className="mb-16">
          <Link href="/notes" className="text-sm font-mono text-foreground/50 hover:text-accent transition-colors mb-8 block">
            ← back to notes
          </Link>
          <div className="space-y-2">

            <h1 className="font-mono text-2xl sm:text-3xl text-neutral-200 tracking-wider">
              {frontmatter.title}
            </h1>
          </div>
        </header>
        <div className="prose prose-invert prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-foreground/10 max-w-none font-mono">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
} 