import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default async function NotesPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto mt-6">
      <h1 className="font-mono text-2xl sm:text-3xl text-neutral-200 tracking-wider mb-8">
        Notes
      </h1>
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <Link 
              href={`/notes/${post.slug}`} 
              key={post.slug}
              className="block group"
            >
              <article className="flex items-baseline">
                <h2 className="text-lg font-mono group-hover:text-accent transition-colors">
                  {post.frontmatter.title}
                </h2>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 