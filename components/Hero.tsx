'use client';

import { motion } from 'motion/react';
import { FiArrowDown, FiUser } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="section-hero relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
              Hi, I'm Chris.
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-4">
              Full Stack Developer
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl text-[#888] font-normal mb-10 whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Backend-Focused <span className="text-white/20 mx-2">·</span> <span className="text-white/60">Open to Work 2026</span>
            </div>

            <div className="text-xl font-medium text-[#E2E5EF] mb-14">
              I build reliable systems from API design to cloud deployment.
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-20">
              <a href="#work" className="btn-white px-8 py-3.5 rounded-xl border border-white">
                View My Work <FiArrowDown className="-rotate-90 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline px-8 py-3.5 rounded-xl">
                About Me <FiUser />
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 lg:gap-16 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1.5">3+</h3>
                <p className="text-[#888] text-xs font-semibold tracking-wider">YEARS EXPERIENCE</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1.5">10+</h3>
                <p className="text-[#888] text-xs font-semibold tracking-wider">PROJECTS</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1.5">5+</h3>
                <p className="text-[#888] text-xs font-semibold tracking-wider">CLIENTS</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-1 relative w-full max-w-md lg:max-w-[440px] mx-auto lg:ml-auto mt-10 lg:mt-0"
          >
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-white/[0.03] rounded-[3rem] transform rotate-3 scale-105 border border-white/5" />
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 bg-[#111]">
              <img
                src="/Profesional_1.jpeg"
                alt="Developer Portrait"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 left-0 lg:-bottom-8 lg:-left-12 rounded-[1.25rem] p-4 shadow-2xl backdrop-blur-md z-20 border border-white/10 max-w-[90%]"
              style={{ background: 'rgba(10,10,10,0.75)' }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2.5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[#888] text-[10px] font-mono ml-2">&gt;_ app.js</div>
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] leading-loose">
                <p><span className="text-purple-400">const</span> <span className="text-white">developer</span> = {'{'}</p>
                <p className="ml-3"><span className="text-[#888]">name:</span> <span className="text-green-400">'Christovel Slat'</span>,</p>
                <p className="ml-3"><span className="text-[#888]">skills:</span> <span className="text-white">[</span><span className="text-green-400">'Spring Boot'</span>, <span className="text-green-400">'Next.js'</span><span className="text-white">]</span>,</p>
                <p className="ml-3"><span className="text-[#888]">status:</span> <span className="text-green-400">'open to work'</span></p>
                <p>{'}'}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
