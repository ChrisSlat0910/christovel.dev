'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiX, FiMaximize2 } from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFramer, SiGit, SiPostgresql, SiSpringboot,
  SiRedis, SiDocker, SiFlyway, SiRailway, SiVercel, SiLinux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

/* ─── CONFIG ─────────────────────────────────────────────────── */
const HOVER_DELAY_MS = 550;

/* ─── DATA ───────────────────────────────────────────────────── */
const techGroups = [
  {
    label: 'FRONTEND',
    items: [
      { Icon: SiNextdotjs,   name: 'Next.js',       color: '#FFFFFF', desc: 'App Router, SSR, TypeScript integration' },
      { Icon: SiReact,       name: 'React',         color: '#61DAFB', desc: 'Component-based UI, hooks, Context API' },
      { Icon: SiTypescript,  name: 'TypeScript',    color: '#3178C6', desc: 'Type-safe frontend development' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS',  color: '#06B6D4', desc: 'Utility-first styling' },
      { Icon: SiFramer,      name: 'Framer Motion', color: '#0055FF', desc: 'Animations and transitions' },
    ],
  },
  {
    label: 'BACKEND & DB',
    items: [
      { Icon: FaJava,        name: 'Java',          color: '#ED8B00', desc: 'Primary backend language' },
      { Icon: SiSpringboot,  name: 'Spring Boot',   color: '#6DB33F', desc: 'REST APIs, Security, AOP, Actuator' },
      { Icon: SiPostgresql,  name: 'PostgreSQL',    color: '#4169E1', desc: 'Relational modeling, full-text search, migrations' },
      { Icon: SiRedis,       name: 'Redis',         color: '#DC382D', desc: 'Caching, rate limiting, session management' },
      { Icon: SiFlyway,      name: 'Flyway',        color: '#CC0200', desc: 'Versioned database migrations' },
    ],
  },
  {
    label: 'TOOLS',
    items: [
      { Icon: SiDocker,      name: 'Docker',        color: '#2496ED', desc: 'Containerization and local dev environments' },
      { Icon: SiGit,         name: 'Git',           color: '#F05032', desc: 'Version control and branching' },
      { Icon: SiRailway,     name: 'Railway',       color: '#FFFFFF', desc: 'Cloud backend deployment' },
      { Icon: SiVercel,      name: 'Vercel',        color: '#FFFFFF', desc: 'Frontend deployment' },
      { Icon: SiLinux,       name: 'Linux',         color: '#FCC624', desc: 'Server environment and CLI' },
    ],
  },
];

type CardId = 1 | 2 | 3 | 4;

const cardDelays: Record<CardId, number> = { 1: 0.05, 2: 0.15, 3: 0.25, 4: 0.35 };

/* ─── COLLAPSED TECH STACK (tall card, row-span-2) ──────────── */
function CollapsedCard2({ onExpand }: { onExpand: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col p-6 overflow-hidden">
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="text-[10px] text-[#555] uppercase tracking-widest font-medium">02</span>
          <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily: 'var(--font-logo)' }}>
            Tech Stack
          </h3>
          <p className="text-[11px] text-[#555] mt-0.5">Core technologies I master</p>
        </div>
        {/* Expand button */}
        <button
          onClick={(e) => { e.stopPropagation(); onExpand(); }}
          className="w-8 h-8 shrink-0 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
        >
          <FiMaximize2 size={13} />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.05] mb-5" />

      {/* Tech groups */}
      <div className="flex flex-col gap-5 overflow-hidden flex-1">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[9px] text-[#444] uppercase tracking-widest mb-2 font-semibold">{group.label}</p>
            <div className="flex flex-col gap-1.5">
              {group.items.map(({ Icon, name, color }) => (
                <div key={name} className="flex items-center gap-2.5">
                  <Icon size={12} style={{ color }} className="shrink-0" />
                  <span className="text-xs text-[#777]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── COLLAPSED IMAGE CARD ───────────────────────────────────── */
function CollapsedImageCard({
  num, title, summary, image, onExpand,
}: { num: string; title: string; summary: string; image: string; onExpand: () => void }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-full object-cover opacity-60 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
      <span className="absolute top-6 left-6 text-[10px] text-[#aaa] uppercase tracking-widest font-medium drop-shadow-lg">{num}</span>
      {/* Expand button */}
      <button
        onClick={(e) => { e.stopPropagation(); onExpand(); }}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/60 transition-all"
      >
        <FiMaximize2 size={13} />
      </button>
      <div className="absolute bottom-6 left-6 right-6 drop-shadow-lg">
        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-logo)' }}>{title}</h3>
        <p className="text-xs text-[#ddd] leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}

/* ─── EXPANDED TECH STACK ────────────────────────────────────── */
function ExpandedCard2() {
  return (
    <div className="absolute inset-0 flex flex-col p-10 md:p-14 overflow-auto">
      <span className="text-[10px] text-[#555] uppercase tracking-widest font-medium mb-3">02</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-logo)' }}>
        Tech Stack
      </h2>
      <p className="text-[#666] text-sm mb-10 max-w-lg">
        The technologies I work with to build reliable, production-ready systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] text-[#444] uppercase tracking-widest mb-5 font-semibold">{group.label}</p>
            <div className="flex flex-col gap-5">
              {group.items.map(({ Icon, name, color, desc }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.35 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{name}</p>
                    <p className="text-[11px] text-[#666] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MINI CARD TYPE ─────────────────────────────────────────── */
type MiniCard = { title: string; desc: string };

/* ─── EXPANDED IMAGE CARD ────────────────────────────────────── */
function ExpandedImageCard({
  num, title, desc, tagline, image, miniCards,
}: {
  num: string; title: string; desc: string; tagline: string;
  image: string; miniCards: MiniCard[];
}) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] flex flex-col">
      {/* Atmospheric background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/80 to-[#080808]" />

      {/* Content — flex column fills height */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-12 overflow-auto">

        {/* ── Title block ── */}
        <div className="mb-8 md:mb-10">
          <span className="text-[10px] text-[#555] uppercase tracking-widest font-medium block mb-4">{num}</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-logo)' }}
          >
            {title}
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed mb-2">{tagline}</p>
          <p className="text-white/35 text-xs md:text-sm max-w-xl leading-relaxed">{desc}</p>
        </div>

        {/* ── 3 mini work-sample cards ── */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {miniCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + i * 0.09, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden flex flex-col"
            >
              {/* GIF / image placeholder */}
              <div className="aspect-video bg-white/[0.03] border-b border-white/[0.05] flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium">GIF Preview</span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/10" />
              </div>
              {/* Text */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-white text-sm font-semibold mb-1.5">{card.title}</p>
                <p className="text-[#666] text-[11px] leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────── */
export default function Experience() {
  const [activeId, setActiveId] = useState<CardId | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const handleEnter = (id: CardId) => {
    clearTimer();
    hoverTimer.current = setTimeout(() => setActiveId(id), HOVER_DELAY_MS);
  };

  const handleGridLeave = () => {
    clearTimer();
    setActiveId(null);
  };

  // cleanup on unmount
  useEffect(() => () => clearTimer(), []);

  // Lock body scroll while a card is expanded
  useEffect(() => {
    if (activeId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  const isOther = (id: CardId) => activeId !== null && activeId !== id;

  return (
    <section id="experience" className="section-experience py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 relative z-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[#888] text-[11px] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              What I Build
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-logo)' }}
            >
              Skills &<br className="hidden md:block" /> Expertise
            </h2>
            <p className="text-white/50 text-lg max-w-lg leading-relaxed">
              What I build and how I build it.
            </p>
          </div>
          <div className="pb-2 shrink-0">
            <a href="#contact" className="btn-white text-xs py-2.5 px-5">Download Resume</a>
          </div>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div
          className="relative w-full"
          onMouseLeave={handleGridLeave}
        >
          {/* Grid skeleton (always rendered - drives layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">

            {/* ── Card 1: row-1, col 1-8 ── */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: cardDelays[1], duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:col-start-1 md:col-span-8 md:row-start-1 md:row-span-1 h-[280px] relative rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.04] bg-[#0C0C0C] hover:border-white/[0.08] transition-colors"
                onMouseEnter={() => handleEnter(1)}
                animate={{
                  opacity: isOther(1) ? 0 : 1,
                  scale:   isOther(1) ? 0.93 : 1,
                  filter:  isOther(1) ? 'blur(4px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CollapsedImageCard
                  num="01"
                  title="Backend Systems"
                  summary="REST API design, authentication, rate limiting, and business logic, built with Java and Spring Boot."
                  image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                  onExpand={() => setActiveId(1)}
                />
              </motion.div>
            </motion.div>

            {/* ── Card 2: tall right, row-span-2 ── */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: cardDelays[2], duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-2 h-[360px] md:h-auto relative rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.04] bg-[#0A0A0A] hover:border-white/[0.08] transition-colors"
                onMouseEnter={() => handleEnter(2)}
                animate={{
                  opacity: isOther(2) ? 0 : 1,
                  scale:   isOther(2) ? 0.93 : 1,
                  filter:  isOther(2) ? 'blur(4px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CollapsedCard2 onExpand={() => setActiveId(2)} />
              </motion.div>
            </motion.div>

            {/* ── Card 3: row-2, col 1-4 ── */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: cardDelays[3], duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="order-3 md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-1 h-[280px] relative rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.04] bg-[#0C0C0C] hover:border-white/[0.08] transition-colors"
                onMouseEnter={() => handleEnter(3)}
                animate={{
                  opacity: isOther(3) ? 0 : 1,
                  scale:   isOther(3) ? 0.93 : 1,
                  filter:  isOther(3) ? 'blur(4px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CollapsedImageCard
                  num="03"
                  title="Database & Infrastructure"
                  summary="Schema design, versioned migrations, and cloud deployment with Docker, Railway, and Vercel."
                  image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
                  onExpand={() => setActiveId(3)}
                />
              </motion.div>
            </motion.div>

            {/* ── Card 4: row-2, col 5-8 ── */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: cardDelays[4], duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="order-4 md:col-start-5 md:col-span-4 md:row-start-2 md:row-span-1 h-[280px] relative rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.04] bg-[#0C0C0C] hover:border-white/[0.08] transition-colors"
                onMouseEnter={() => handleEnter(4)}
                animate={{
                  opacity: isOther(4) ? 0 : 1,
                  scale:   isOther(4) ? 0.93 : 1,
                  filter:  isOther(4) ? 'blur(4px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CollapsedImageCard
                  num="04"
                  title="Full Stack Delivery"
                  summary="End-to-end product development from backend API to responsive frontend, shipped to production."
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  onExpand={() => setActiveId(4)}
                />
              </motion.div>
            </motion.div>

          </div>

          {/* ── Expanded Overlay ── */}
          <AnimatePresence mode="wait">
            {activeId !== null && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-50 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.95)]"
                style={{ background: '#080808', cursor: 'pointer' }}
                onClick={() => setActiveId(null)}
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <FiX size={16} />
                </button>
                {activeId === 1 && (
                  <ExpandedImageCard
                    num="01"
                    title="Backend Systems"
                    tagline="Scalable APIs and robust business logic built for production."
                    desc="Specializing in Java and Spring Boot to create secure, reliable backend infrastructure with comprehensive features and architecture."
                    image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                    miniCards={[
                      { title: 'REST APIs', desc: 'Clean architecture, solid business rules, and strict validation patterns.' },
                      { title: 'Security & Auth', desc: 'Secure backend configurations, role-based access control, and endpoint protection.' },
                      { title: 'Performance', desc: 'Smart caching with Redis, request throttling, and background jobs processing.' },
                    ]}
                  />
                )}
                {activeId === 2 && <ExpandedCard2 />}
                {activeId === 3 && (
                  <ExpandedImageCard
                    num="03"
                    title="Database & Infrastructure"
                    tagline="Reliable data storage and streamlined cloud deployments."
                    desc="From structuring relational databases to containerizing applications and configuring deployment pipelines down to the server level."
                    image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop"
                    miniCards={[
                      { title: 'PostgreSQL', desc: 'Entity relationship modeling, query optimization, and structured database management.' },
                      { title: 'Migrations', desc: 'Safe and reproducible database state transitions using Flyway version control.' },
                      { title: 'DevOps', desc: 'Dockerized local environments and smooth cloud deployments to platforms like Railway and Vercel.' },
                    ]}
                  />
                )}
                {activeId === 4 && (
                  <ExpandedImageCard
                    num="04"
                    title="Full Stack Delivery"
                    tagline="Bridging the gap between server logic and user experience."
                    desc="Taking projects from the whiteboard all the way to a live, polished web application ready for real users."
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                    miniCards={[
                      { title: 'Frontend Integration', desc: 'Seamlessly connecting robust backend systems to modern Next.js and React interfaces.' },
                      { title: 'TypeScript', desc: 'Maintaining end-to-end type safety between the client and server components.' },
                      { title: 'Production Ready', desc: 'Tested, optimized, and ready to scale, delivering complete solutions that solve real problems.' },
                    ]}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
