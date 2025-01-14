import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/mdx';

export default async function InputPage() {
  const { content } = await getPostBySlug('input');

  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto mt-6">
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </div>
  );
} 