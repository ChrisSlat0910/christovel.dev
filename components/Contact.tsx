'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight, FiMail, FiX, FiSend, FiGitBranch } from 'react-icons/fi';

/* ─── FORM OVERLAY ───────────────────────────────────────────── */
function ContactForm({ onClose }: { onClose: () => void }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden"
        style={{ background: '#0C0C0C', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <FiX size={16} />
        </button>

        <div className="p-8 md:p-12">
          {!sent ? (
            <>
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium block mb-4">
                New Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-logo)' }}>
                Let&apos;s talk.
              </h2>
              <p className="text-white/40 text-sm mb-8">
                Tell me about your project — I'll reply within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-widest">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Christovel Slat"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-widest">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="hello@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-white/30 uppercase tracking-widest">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Collaboration / Freelance / Inquiry..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-white/30 uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and what you need..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: sending ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
                    color: sending ? 'rgba(255,255,255,0.3)' : '#080808',
                  }}
                >
                  {sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full inline-block"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-8"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center mb-6">
                <FiSend className="text-white" size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-logo)' }}>
                Message Sent!
              </h3>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Thanks for reaching out! I'll get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-2.5 rounded-full border border-white/10 text-white/60 text-xs hover:text-white hover:border-white/20 transition-all"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────── */
const availabilityDots = Array.from({ length: 12 });

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-contact relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-16">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-[11px] mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Let&apos;s Connect
          </motion.div>

          {/* Giant headline */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,9vw,8rem)] font-bold text-white leading-[0.95] tracking-tight"
              style={{ fontFamily: 'var(--font-logo)' }}
            >
              Let&apos;s build<br />
              <span className="text-white/20">something</span><br />
              <span
                className="inline-block"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)', color: 'transparent' }}
              >
                incredible.
              </span>
            </motion.h2>
          </div>

          {/* 3-card info row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
          >
            {/* Card 1 — Email + Social links */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                <FiMail className="text-white" size={15} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Contact</p>

                {/* Email */}
                <a
                  href="mailto:chrisslat9@gmail.com"
                  className="group flex items-center gap-2 mb-2.5 hover:opacity-80 transition-opacity min-w-0"
                >
                  <FiMail size={12} className="text-white/30 shrink-0" />
                  <span className="text-sm text-white font-medium truncate">chrisslat9@gmail.com</span>
                  <FiArrowUpRight size={12} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/christovelslat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 mb-2.5 hover:opacity-80 transition-opacity min-w-0"
                >
                  <FaLinkedin size={12} className="text-[#0A66C2] shrink-0" />
                  <span className="text-sm text-white/70 truncate">linkedin.com/in/christovelslat</span>
                  <FiArrowUpRight size={12} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ChrisSlat0910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0"
                >
                  <FaGithub size={12} className="text-white/60 shrink-0" />
                  <span className="text-sm text-white/70 truncate">github.com/ChrisSlat0910</span>
                  <FiArrowUpRight size={12} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Card 2 — Current Project */}
            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                  <FiGitBranch className="text-white" size={15} />
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-green-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Current Project</p>
                <p className="text-base font-bold text-white mb-1" style={{ fontFamily: 'var(--font-logo)' }}>
                  Vendly
                </p>
                <p className="text-xs text-white/40 leading-relaxed mb-4">
                  Community-based marketplace built with Spring Boot and Next.js 15.
                </p>
                <a
                  href="https://github.com/ChrisSlat0910/vendly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <FaGithub size={12} />
                  View on GitHub
                  <FiArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 3 — Send Message (opens form) */}
            <motion.button
              onClick={() => setFormOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col gap-4 p-6 rounded-2xl text-left cursor-pointer border border-white/10 bg-white hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-black/40">
                  Start a project
                </span>
                <FiArrowUpRight
                  size={18}
                  className="text-black/30 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <div className="mt-auto">
                <p
                  className="text-3xl font-bold text-black leading-tight"
                  style={{ fontFamily: 'var(--font-logo)' }}
                >
                  Send a<br />Message.
                </p>
                <p className="text-xs text-black/40 mt-2">Click to open form — reply &lt; 24 hrs</p>
              </div>
            </motion.button>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/[0.05] mb-12" />

          {/* Footer row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-black text-xs font-bold tracking-tighter">
                  CS
                </div>
                <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-logo)' }}>
                  Christovel Slat
                </span>
              </div>
              <p className="text-white/25 text-xs leading-relaxed">Backend-Focused Full Stack Developer<br className="sm:hidden" /> · Manado, North Sulawesi, Indonesia</p>
            </div>

            {/* Nav links */}
            <div className="flex gap-6">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#work' },
                { label: 'Skills', href: '#experience' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="text-xs text-white/30 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaGithub,    href: 'https://github.com/ChrisSlat0910', label: 'GitHub' },
                { Icon: FaLinkedin,  href: 'https://linkedin.com/in/christovelslat', label: 'LinkedIn' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-white/[0.03] flex items-center justify-between">
            <p className="text-white/20 text-xs">&copy; 2026 Christovel Slat. All rights reserved.</p>
            <div className="flex items-center gap-1.5">
              {availabilityDots.map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ background: i < 8 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)' }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Form Overlay (portal-like, fixed fullscreen) */}
      <AnimatePresence>
        {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
