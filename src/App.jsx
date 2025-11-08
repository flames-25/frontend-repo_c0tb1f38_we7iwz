import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

function CookieModal({ open, onClose }) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="mx-4 sm:mx-0 w-full sm:w-[560px] rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight uppercase">
              Privacy & Cookies
            </h3>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              We use cookies to personalize content, analyze traffic, and deliver an elite browsing experience. You can manage preferences anytime.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto rounded-full px-6 py-3 bg-white text-black font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Accept All
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto rounded-full px-6 py-3 bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition-colors"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('dialedweb_cookie_seen');
    if (!seen) setTimeout(() => setShowCookies(true), 700);
  }, []);

  const handleCloseCookies = () => {
    localStorage.setItem('dialedweb_cookie_seen', '1');
    setShowCookies(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />

      <CookieModal open={showCookies} onClose={handleCloseCookies} />
    </div>
  );
}
