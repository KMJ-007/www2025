'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: '00.home' },
  { path: '/input', label: '01.input' },
  { path: '/output', label: '02.output' },
  { path: '/notes', label: '03.notes' },
  { path: '/vibe', label: '04.vibe' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="mt-8 hidden sm:block min-w-[150px]">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`nav-item ${pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
       
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-8 right-8 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
          animate={isOpen ? { backgroundColor: 'rgba(255,255,255,0.1)' } : { backgroundColor: 'rgba(255,255,255,0)' }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          initial={false}
          style={{ borderRadius: '8px' }}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block origin-center"
            style={{ transformOrigin: 'center' }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block origin-center"
            style={{ transformOrigin: 'center' }}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex items-center justify-center"
            >
              <motion.ul 
                className="flex flex-col gap-6 text-2xl items-center"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.path}
                        className={`nav-item ${pathname === item.path ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 