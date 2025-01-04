'use client';

import { motion } from 'framer-motion';

const links = [
  { href: 'https://github.com/KMJ-007', label: 'github' },
  { href: 'https://twitter.com/karanjanthe', label: 'twitter' },
  { href: 'https://curius.app/karan-mj', label: 'curius' },
] as const;

export default function SocialLinks() {
  return (
    <motion.div 
      className="pt-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-xs uppercase tracking-wider text-[#ededed50] mb-3">
        Find me on
      </h3>
      <div className="flex gap-6 text-sm text-[#ededed70]">
        {links.map(({ href, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
} 