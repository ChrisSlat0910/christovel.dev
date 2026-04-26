'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowUpRight, FiX, FiExternalLink } from 'react-icons/fi';
import { SiSpringboot, SiPostgresql, SiRedis, SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiPhp, SiWordpress, SiMysql, SiAndroid, SiFirebase } from 'react-icons/si';
import { FaJava, FaGithub } from 'react-icons/fa';

const techMap = {
  spring: { icon: SiSpringboot, color: '#6DB33F', name: 'Spring Boot' },
  postgres: { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  redis: { icon: SiRedis, color: '#DC382D', name: 'Redis' },
  next: { icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
  react: { icon: SiReact, color: '#61DAFB', name: 'React' },
  typescript: { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  java: { icon: FaJava, color: '#ED8B00', name: 'Java' },
  android: { icon: SiAndroid, color: '#3DDC84', name: 'Android SDK' },
  firebase: { icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  javascript: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  wordpress: { icon: SiWordpress, color: '#21759B', name: 'WordPress' },
  php: { icon: SiPhp, color: '#777BB4', name: 'PHP' },
  mysql: { icon: SiMysql, color: '#4479A1', name: 'MySQL' },
};

const projects = [
  {
    id: 1,
    title: 'Vendly',
    category: 'Full Stack · Deployed',
    year: '2025',
    image: '/images/vendly.png',
    link: 'https://vendly-eta.vercel.app',
    github: 'https://github.com/ChrisSlat0910/vendly',
    stackLogos: [techMap.spring, techMap.postgres, techMap.redis, techMap.next],
    isVertical: false,
    description: 'A community-driven marketplace platform where people from any interest group can buy, sell, and trade within their own trusted space. Built with a long-term vision of custom transaction flows per community type.',
    techStackText: [
      'Java 21, Spring Boot 4.x',
      'Spring Security, JWT Auth, Spring AOP',
      'PostgreSQL 17, Redis 7, Flyway',
      'Next.js 15, TypeScript, Tailwind CSS',
      'Docker, Railway, Vercel'
    ],
    highlights: [
      'JWT stateless auth with httpOnly refresh token cookies',
      'Per-IP rate limiting via Redis',
      'AOP-based admin role guard',
      '20 versioned Flyway migrations',
      'Split-layout listing creation with live preview',
      'Seller dashboard with performance chart and inbox',
      'Admin panel for user and listing management'
    ],
    gallery: [
      '/images/vendly.png',
      '/images/vendly_2.png',
      '/images/vendly_3.png',
      '/images/vendly_4.png',
      '/images/vendly_5.png',
      '/images/vendly_6.png',
      '/images/vendly_7.png',
    ]
  },
  {
    id: 2,
    title: 'MyLikupang.com',
    category: 'Government Contract · Web Dev',
    year: '2022',
    image: '/images/MyLikupang_1.png',
    link: 'https://mylikupang.com',
    stackLogos: [techMap.javascript, techMap.wordpress, techMap.php, techMap.mysql],
    isVertical: false,
    description: 'Tourism web platform developed for the Ministry of Tourism and Creative Economy of Indonesia. Features 360° interactive virtual tours covering 8 destinations in Likupang, North Sulawesi, along with a local product catalog and tourism database.',
    techStackText: [
      'JavaScript, Marzipano (360° virtual tour)',
      'WordPress, PHP',
      'MySQL'
    ],
    highlights: [
      '360° virtual tour across 8 tourist destinations',
      'Local product catalog (culinary, homestay, handicrafts)',
      'Tourism database with mapping and drone photography',
      'Delivered under government contract with Kemenparekraf RI'
    ],
    gallery: [
      '/images/MyLikupang_1.png',
      '/images/MyLikupang_2.png',
      '/images/MyLikupang_3.png',
      '/images/MyLikupang_4.png',
      '/images/MyLikupang_5.png',
      '/images/MyLikupang_6.png',
    ]
  },
  {
    id: 3,
    title: 'SpiritKawanua News App',
    category: 'Mobile Dev · Android',
    year: '2022',
    image: '/images/Spirit_1.jpg',
    link: '#',
    stackLogos: [techMap.java, techMap.android, techMap.firebase],
    isVertical: true,
    description: 'Android news application built for a Kominfo-affiliated media outlet in North Sulawesi. Serves as the primary mobile channel for content distribution with real-time news updates.',
    techStackText: [
      'Java, Android SDK',
      'REST API integration',
      'WebView, Firebase Cloud Messaging'
    ],
    highlights: [
      'REST API integration for real-time content delivery',
      'WebView for in-app article browsing',
      'Push notification system for breaking news',
      'Cross-device compatibility'
    ],
    gallery: [
      '/images/Spirit_1.jpg',
      '/images/Spirit_2.jpg',
      '/images/Spirit_3.jpg',
    ]
  },
];

const neonColors = ['#00ffcc', '#ff00ff', '#ffea00', '#ff0055', '#0077ff', '#39ff14'];

function ProjectCard({ project, index, onClick }: { project: any, index: number, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [glowColor, setGlowColor] = useState('transparent');

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
        setGlowColor(neonColors[Math.floor(Math.random() * neonColors.length)]);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setGlowColor('transparent');
      }}
      initial={{ scale: 0.96 }}
      whileHover={{ scale: 1.02, zIndex: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group border border-white/[0.08] bg-[#0A0A0A] flex flex-col cursor-pointer rounded-4xl overflow-hidden w-full h-[540px] shadow-xl"
      style={{
        boxShadow: isHovered ? `0 10px 40px -10px ${glowColor}` : '0 10px 30px -15px rgba(0,0,0,0.8)',
        borderColor: isHovered ? glowColor : 'rgba(255,255,255,0.08)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
      }}
    >
      {/* Background Neon Blur */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 blur-3xl pointer-events-none rounded-4xl"
        style={{ backgroundColor: glowColor === 'transparent' ? '#fff' : glowColor }}
      />

      {/* Top Half: Image Display */}
      <div className="relative w-full h-[240px] bg-black border-b border-white/5 overflow-hidden shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover opacity-90 group-hover:opacity-100 ${
            project.isVertical 
              ? 'object-top transition-[object-position] duration-5000 ease-in-out group-hover:object-bottom' 
              : 'object-left transition-[object-position] duration-5000 ease-in-out group-hover:object-right group-hover:scale-105'
          }`} 
          referrerPolicy="no-referrer"
        />
        
        {/* Floating Number Overlay */}
        <div className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-sm font-bold shadow-lg">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
           <FiArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom Half: Content Data */}
      <div className="flex flex-col flex-1 p-6 z-10 bg-gradient-to-b from-transparent to-[#050505]">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 text-[9px] font-bold tracking-widest uppercase">
            {project.year}
          </span>
          <span className="text-[#888] text-[9px] font-bold uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{project.title}</h3>
        
        <p className="text-white/50 text-[13px] leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Dynamic Tech Stack Badges */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-white/5">
          {project.stackLogos.map((tech: any, i: number) => (
             <div 
               key={i} 
               className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
               title={tech.name}
             >
               <tech.icon size={12} style={{ color: tech.color }} />
               <span className="text-[9px] text-white/60 font-medium tracking-wide uppercase">{tech.name}</span>
             </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <section id="work" className="section-work py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col mb-12">
          <p className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase mb-4">Projects</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Works.
            </h2>
            <div className="pb-2">
              <a href="#" className="hidden md:flex text-white text-sm font-medium items-center gap-2 hover:text-[#888] transition-colors">
                View All Projects <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Grid Container - 3 Columns Layout with Tall Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

      </div>

      {/* Modal Overlay Windows */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-6 lg:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-7xl h-auto max-h-[95vh] lg:h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-2xl md:rounded-4xl flex flex-col lg:flex-row relative shadow-2xl overflow-y-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-6 lg:right-6 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-xl shadow-2xl"
              >
                <FiX size={20} />
              </button>

              {/* Left Side: Info */}
              <div className="w-full lg:w-[40%] p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-[#050505] lg:overflow-y-auto shrink-0 [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-wrap items-center gap-3 mb-5 mt-6 lg:mt-0">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-[10px] font-bold tracking-widest uppercase border border-white/10">{selectedProject.year}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{selectedProject.category}</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">{selectedProject.title}</h2>
                
                <p className="text-white/60 text-[15px] leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                {/* Rich Tech Stack Logos Rendering */}
                <div className="mb-10">
                  <h4 className="text-white/30 text-[10px] uppercase font-bold tracking-[0.15em] mb-4">Tech Stack Utilized</h4>
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {selectedProject.stackLogos.map((tech: any, i: number) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 shadow-sm select-none">
                        <tech.icon size={16} style={{ color: tech.color }} />
                        <span className="text-xs font-semibold text-white/70">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* Detailed Description Sub-list */}
                  <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/5">
                    {selectedProject.techStackText.map((tech: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-white/50 text-[13px]">
                         <span className="text-white/20 mt-1">▹</span>
                         {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <h4 className="text-white/30 text-[10px] uppercase font-bold tracking-[0.15em] mb-4">Key Highlights</h4>
                  <ul className="flex flex-col gap-3">
                    {selectedProject.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-[15px]">
                         <span className="text-[#39ff14]/70 mt-1"><FiArrowUpRight size={14} /></span>
                         <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto lg:pt-8 flex flex-col xl:flex-row gap-4">
                  {selectedProject.link !== '#' && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform"
                    >
                      View Live Project <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex-1 flex items-center justify-center gap-2 py-4 rounded-full border border-white/20 bg-transparent text-white text-sm font-bold hover:bg-white/5 transition-colors"
                    >
                      <FaGithub size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side: Gallery */}
              <div className="w-full lg:w-[60%] p-6 md:p-10 lg:p-12 bg-[#0c0c0c] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col gap-8 lg:gap-12 pb-16 lg:pb-12">
                {selectedProject.gallery.map((img: string, i: number) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`${selectedProject.title} preview ${i+1}`}
                    className={`w-full h-auto rounded-xl border border-white/10 shadow-2xl bg-black ${selectedProject.isVertical ? "max-w-[320px] mx-auto" : "max-w-full"}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
