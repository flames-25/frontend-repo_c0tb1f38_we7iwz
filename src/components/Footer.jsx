import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-black tracking-[0.16em] uppercase">Dialedweb</div>
            <p className="mt-3 text-neutral-400 text-sm max-w-xs">
              Partnering with bold teams to craft high-impact digital experiences.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase text-neutral-500">Company</div>
            <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#works" className="hover:text-white">Works</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Get In Touch</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase text-neutral-500">Legal</div>
            <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase text-neutral-500">Newsletter</div>
            <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="shrink-0 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between text-xs text-neutral-500">
          <div>© 2025 Dialedweb All Rights Reserved</div>
          <div className="hidden sm:block">Built for the modern web</div>
        </div>
      </div>
    </footer>
  );
}
