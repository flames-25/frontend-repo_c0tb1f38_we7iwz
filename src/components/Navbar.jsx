import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 ${
        scrolled ? 'border-b border-neutral-800' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-black tracking-[0.16em] text-white text-lg uppercase">
          Dialedweb
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#works', label: 'Works' },
            { href: '#contact', label: 'Get In Touch' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-neutral-300 hover:text-white transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
