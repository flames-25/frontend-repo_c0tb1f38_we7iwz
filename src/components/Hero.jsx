import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ArrowDownCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-24 sm:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] font-extralight uppercase max-w-5xl"
        >
          Partnering with businesses to establish bold digital identities, drive growth, and create impactful online experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-neutral-300 max-w-2xl"
        >
          We blend brand clarity, product precision, and high-performance engineering to create outcomes that move the needle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold tracking-wide shadow-lg hover:shadow-white/20 transition-shadow"
          >
            See More
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 transition-colors"
          >
            Get In Touch
            <ArrowDownCircle className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <Marquee />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    'BRANDING',
    'WEB EXPERIENCE',
    'E-COMMERCE',
    'PERFORMANCE',
    'CONTENT',
    'ANALYTICS',
    'STRATEGY',
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="mt-16 border-y border-neutral-800 py-3 overflow-hidden">
      <motion.div
        className="flex gap-10 pr-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        style={{ width: '200%' }}
      >
        {row.map((t, i) => (
          <span key={i} className="text-neutral-400 uppercase tracking-[0.3em] text-xs">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
