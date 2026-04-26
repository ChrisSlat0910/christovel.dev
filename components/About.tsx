'use client';

import { motion } from 'motion/react';
import { FaLinkedin, FaGithub, FaInstagram, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiRedis, SiDocker, SiNextdotjs, SiTypescript } from 'react-icons/si';

const socials = [
  { icon: FaLinkedin,   href: '#' },
  { icon: FaGithub,     href: '#' },
  { icon: FaInstagram,  href: '#' },
];

const skillsData = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
];

const experienceList = [
  { role: 'Project-based Developer', company: 'Ministry of Tourism & Creative Economy', period: 'Oct 2022 – Dec 2022', note: 'Government contract · mylikupang.com' },
  { role: 'Mobile App Developer (Internship)', company: 'SpiritKawanua News', period: 'Mar 2022 – Aug 2022', note: 'Android · Java · REST API' },
  { role: 'IT Support Engineer (Internship)', company: 'Kominfo', period: 'Feb 2022 – Aug 2022', note: 'Infrastructure · Hardware support' },
  { role: 'Frontend Web Developer', company: 'Freelance', period: '2021 – 2023', note: 'HTML, CSS, Bootstrap, React' },
];

export default function About() {
  return (
    <section id="about" className="section-about py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Top small badge — hidden intentionally */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Chris, <span className="text-white/60">Full Stack Developer</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            A little bit about me and my journey in software engineering.
          </p>
        </div>

        {/* 2-Column layout */}
        <div className="grid md:grid-cols-12 gap-5">
          
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col p-5 rounded-[1.5rem]"
            style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] mb-6 border border-white/5">
              <img
                src="/Profesional_1.jpeg"
                alt="Profile"
                className="w-full h-full object-cover object-top opacity-90 mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur text-white text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available for work
                </div>
              </div>
            </div>

            <div className="px-1">
              <h3 className="text-2xl font-semibold text-white mb-2">Hi, I'm Christovel Slat</h3>
              <p className="text-white/50 text-base mb-6">Backend-Focused Full Stack Developer.</p>
              
              <div className="flex gap-3 mb-8">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                    <s.icon size={16} />
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.05]">
                 <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">📍</div> 
                    North Sulawesi, Indonesia
                 </div>
                 <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">✉️</div> 
                    chrisslat9@gmail.com
                 </div>
                 <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">🗣️</div> 
                    Indonesian, English
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 flex flex-col p-8 rounded-[1.5rem]"
            style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
              Full Stack Developer with a strong focus on backend engineering. I build production-ready systems using Java Spring Boot, PostgreSQL, and Redis and ship complete products when the project calls for it.
            </p>

            <div className="flex flex-wrap gap-3 mb-14 border-b border-white/[0.04] pb-12">
              {skillsData.map((tech, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#0A0A0A] transition-all overflow-hidden cursor-default"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity" 
                    style={{ backgroundColor: tech.color }}
                  />
                  <tech.icon size={16} color={tech.color} className="relative z-10" />
                  <span className="text-white/70 text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Vertical line marker for timeline */}
              <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/10" />

              {experienceList.map((exp, i) => (
                <div key={i} className="relative pl-8 group">
                  {/* Dot marker */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-[#0D0D0D] bg-white/20 group-hover:bg-white/60 transition-colors z-10" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                    <span className="text-white text-base font-semibold">{exp.role}</span>
                    <span className="text-white/40 text-xs md:text-sm font-mono mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <div className="text-white/60 text-sm mb-1">{exp.company}</div>
                  <div className="text-white/30 text-xs">{exp.note}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
