import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Rocket, BarChart, Globe, Cloud, Cpu, Layers, GitBranch, MessageCircle, Mail, FileText } from 'lucide-react';

function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.04)_100%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        {children}
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div className="space-y-16">
      <Services />
      <Stats />
      <FeaturedWorks />
      <TechAndClients />
      <Testimonials />
      <GlobalTeam />
    </div>
  );
}

function Services() {
  return (
    <SectionWrapper id="about">
      <Reveal>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extralight uppercase tracking-tight">
          Your Digital Powerhouse
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-5 max-w-3xl text-neutral-300">
          End-to-end capabilities from strategy and identity to products and growth. We design, build, and scale experiences that turn attention into traction.
        </p>
      </Reveal>
      <Reveal delay={0.16}>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition">
          Book a call
          <ArrowRight className="h-5 w-5" />
        </a>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Rocket, title: 'Brand & Strategy', desc: 'Positioning, identity systems, and market narratives that resonate.' },
          { icon: Cpu, title: 'Product & Engineering', desc: 'High-performance web apps, storefronts, and platforms at scale.' },
          { icon: BarChart, title: 'Growth & Performance', desc: 'Analytics, SEO, CRO, and lifecycle to drive measurable outcomes.' },
        ].map((item, i) => (
          <Reveal key={item.title} delay={0.05 * i}>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 hover:bg-neutral-900/50 transition-colors">
              <item.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 text-lg font-medium uppercase">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Stat({ value, label, delay = 0 }) {
  const ref = React.useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      const target = value;
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.floor(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6"
    >
      <div className="text-4xl sm:text-5xl font-extralight tabular-nums">{display.toLocaleString()}</div>
      <div className="mt-2 text-neutral-400 uppercase text-xs tracking-widest">{label}</div>
    </motion.div>
  );
}

function Stats() {
  return (
    <SectionWrapper>
      <Reveal>
        <h3 className="text-xl sm:text-2xl uppercase text-neutral-300">Numbers That Just Make Sense</h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat value={100_000_000} label="Client Revenue" />
        <Stat value={700_000} label="Monthly Visitors" delay={0.06} />
        <Stat value={100} label="Projects Delivered" delay={0.12} />
      </div>
    </SectionWrapper>
  );
}

function FeaturedWorks() {
  const projects = [
    { name: 'Kinimatic', hue: 'from-fuchsia-500 to-violet-500' },
    { name: 'Heave', hue: 'from-emerald-500 to-lime-400' },
    { name: 'Essentia', hue: 'from-cyan-400 to-blue-600' },
    { name: 'Peak', hue: 'from-amber-400 to-orange-600' },
    { name: 'Vita Lenta', hue: 'from-rose-500 to-pink-400' },
  ];
  return (
    <SectionWrapper id="works">
      <Reveal>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extralight uppercase tracking-tight max-w-5xl">
          Pioneering Projects That Consistently Redefine What’s Possible
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.05 * i}>
            <a href="#" className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/40 block">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.hue} opacity-70`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div className="text-white font-medium uppercase">{p.name}</div>
                <ArrowRight className="h-5 w-5 text-white transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 hover:bg-neutral-800 transition-colors">
            Explore All Projects
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

function TechAndClients() {
  const tech = [
    { icon: Layers, label: 'Next.js' },
    { icon: GitBranch, label: 'CI/CD' },
    { icon: Cloud, label: 'Edge Hosting' },
    { icon: Globe, label: 'Internationalization' },
    { icon: Cpu, label: 'WebGL / 3D' },
    { icon: Rocket, label: 'Performance' },
  ];
  const tools = ['Simulations', 'VFX', 'Prototyping', 'Content Systems'];
  const cards = [
    { name: 'Slack', icon: MessageCircle, detail: 'Project Velocity', progress: 78 },
    { name: 'Gmail', icon: Mail, detail: 'Weekly Update', progress: 100 },
    { name: 'Notion', icon: FileText, detail: 'Roadmap • On Track', progress: 62 },
  ];
  return (
    <SectionWrapper>
      <Reveal>
        <h3 className="text-xl sm:text-2xl uppercase text-neutral-300">Technology Ecosystem</h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {tech.map((t, i) => (
          <Reveal key={t.label} delay={0.05 * i}>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-center hover:bg-neutral-900/60 transition-colors">
              <t.icon className="mx-auto h-6 w-6" />
              <div className="mt-2 text-xs uppercase tracking-wide text-neutral-300">{t.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase text-neutral-300">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <Reveal key={c.name} delay={0.06 * i}>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5" />
                <div className="uppercase text-sm">{c.name}</div>
              </div>
              <div className="mt-3 text-sm text-neutral-300">{c.detail}</div>
              <div className="mt-4 h-2 rounded-full bg-neutral-800 overflow-hidden">
                <div className="h-full bg-white" style={{ width: `${c.progress}%` }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Testimonials() {
  const items = [
    { name: 'Alex Carter', role: 'CEO, Kinimatic', quote: 'They deliver with precision and speed. Our metrics transformed within weeks.' },
    { name: 'Maya Stern', role: 'Head of Product, Peak', quote: 'A rare blend of creativity and engineering depth.' },
    { name: 'Jordan Vale', role: 'Founder, Essentia', quote: 'World-class partners who understand business outcomes.' },
    { name: 'Samuel Tan', role: 'GM, Heave', quote: 'The attention to detail and polish is next level.' },
  ];
  const doubled = [...items, ...items];
  return (
    <SectionWrapper>
      <Reveal>
        <h3 className="text-xl sm:text-2xl uppercase text-neutral-300">What Our Partners Say</h3>
      </Reveal>
      <div className="mt-6 overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          style={{ width: '200%' }}
        >
          {doubled.map((t, i) => (
            <div key={i} className="w-[360px] shrink-0 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm">{t.name.split(' ').map((s) => s[0]).join('').slice(0,2)}</div>
                <div>
                  <div className="uppercase text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-neutral-200">“{t.quote}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function GlobalTeam() {
  const locations = [
    { city: 'San Francisco', code: 'USA' },
    { city: 'New York', code: 'USA' },
    { city: 'London', code: 'UK' },
    { city: 'Berlin', code: 'DE' },
    { city: 'Bengaluru', code: 'IN' },
    { city: 'Singapore', code: 'SG' },
  ];
  return (
    <SectionWrapper>
      <Reveal>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-extralight">Bridging Cultures, Driving Innovation</h3>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {locations.map((l, i) => (
          <Reveal key={l.city} delay={0.05 * i}>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 flex items-center justify-between">
              <div>
                <div className="uppercase text-lg">{l.city}</div>
                <div className="text-xs text-neutral-400 tracking-widest">{l.code}</div>
              </div>
              <div className="flex -space-x-2">
                {[0,1,2].map((n) => (
                  <div key={n} className="h-9 w-9 rounded-full bg-neutral-800 ring-2 ring-black flex items-center justify-center text-xs">{l.city[0]}</div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
