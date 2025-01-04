'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Article = {
  id: number;
  link: string;
  title: string;
};

type Props = {
  articles: Article[];
  showMoreLink?: boolean;
};

export default function ReadingsList({ articles, showMoreLink = false }: Props) {
  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      {articles.map((article) => (
        <motion.a
          key={article.id}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-accent transition-colors"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {article.title}
        </motion.a>
      ))}
      {showMoreLink && (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <Link
            href="https://curius.app/karan-mj"
            className="text-sm text-[#ededed70] hover:text-accent transition-colors mt-2 block"
          >
            more →
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
} 