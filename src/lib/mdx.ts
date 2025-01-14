import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

// Ensure the posts directory exists
if (!fs.existsSync(POSTS_PATH)) {
  fs.mkdirSync(POSTS_PATH, { recursive: true });
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Post not found: ${realSlug}`);
    }
    throw error;
  }
}

export async function getAllPosts() {
  try {
    const posts = fs.readdirSync(POSTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
      .map((fileName) => {
        const source = fs.readFileSync(
          path.join(POSTS_PATH, fileName),
          'utf8'
        );
        const { data } = matter(source);

        return {
          frontmatter: data,
          slug: fileName.replace(/\.mdx?$/, ''),
        };
      })
      .sort((post1, post2) => (
        new Date(post2.frontmatter.date).getTime() - 
        new Date(post1.frontmatter.date).getTime()
      ));

    return posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
} 