'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiUser, FiBriefcase, FiAward, FiMail, FiCalendar } from 'react-icons/fi';

const navLinks = [
  { name: 'About',      href: '#about',      icon: FiUser },
  { name: 'Projects',   href: '#work',       icon: FiBriefcase },
  { name: 'Experience', href: '#experience', icon: FiAward },
  { name: 'Contact',    href: '#contact',    icon: FiMail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to consider section active
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = `#${section}`;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    // Trigger once on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center shadow-2xl overflow-visible
        ${scrolled 
          /* Scrolled Mobile/Tablet: Slide to bottom | Desktop: Left Sidebar */
          ? 'top-0 lg:top-1/2 translate-y-[calc(100dvh-5.5rem)] lg:-translate-y-1/2 left-1/2 lg:left-6 -translate-x-1/2 lg:translate-x-0 w-[90%] max-w-[360px] lg:max-w-none lg:w-14 h-14 lg:h-auto px-4 lg:px-0 py-0 lg:py-6 flex-row lg:flex-col justify-between lg:justify-start rounded-full lg:rounded-4xl gap-0 lg:gap-8' 
          /* Not Scrolled Mobile/Tablet: Slide to top | Desktop: Top bar */
          : 'top-0 lg:top-6 translate-y-4 lg:translate-y-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] lg:max-w-none lg:w-auto h-14 px-4 lg:px-8 flex-row justify-between lg:justify-center rounded-full gap-0 lg:gap-8'
        }
        bg-[#080808]/80 backdrop-blur-xl border border-white/10
      `}
    >
      {/* Logo */}
      <a 
        href="#" 
        className="flex items-center justify-center hover:opacity-80 transition-opacity group shrink-0" 
        style={{ fontFamily: 'var(--font-logo)' }}
      >
        <div className={`flex items-center justify-center rounded-lg bg-white text-black font-bold tracking-tighter transition-all duration-500 shrink-0 ${scrolled ? 'w-9 h-9 sm:w-10 sm:h-10 text-xl' : 'w-8 h-8 lg:w-8 lg:h-8 mr-0 lg:mr-2 text-base lg:text-base'}`}>
          C<span className="text-gray-500">S</span>
        </div>
        <span className={`text-white transition-all duration-500 font-medium tracking-tight overflow-hidden hidden lg:block ${scrolled ? 'w-0 opacity-0' : 'w-auto opacity-100 text-xl'}`}>
          Chris<span className="text-[#888]">.</span>
        </span>
      </a>

      {/* Vertical divider on mobile */}
      <div className="w-px h-6 bg-white/10 block lg:hidden mx-1" />

      {/* Nav Links */}
      <div className={`flex items-center ${scrolled ? 'flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-6' : 'flex-row gap-2 sm:gap-4 lg:gap-8'}`}>
        {navLinks.map(l => (
          <a key={l.name} href={l.href} className="group relative flex items-center justify-center">
            {/* Horizontal Text: Only on Desktop Not Scrolled */}
            <span className={`text-sm font-medium transition-colors duration-300 ${activeSection === l.href ? 'text-white' : 'text-[#888]'} group-hover:text-white hidden ${scrolled ? '' : 'lg:block'}`}>
              {l.name}
            </span>
            
            {/* Icon: Mobile (Always), Desktop (Only when scrolled) */}
            <l.icon size={20} className={`transition-colors duration-300 ${activeSection === l.href ? 'text-white' : 'text-[#888]'} group-hover:text-white block ${scrolled ? '' : 'lg:hidden'}`} />

            {/* Sidebar Tooltip (Only Desktop Scrolled) */}
            {scrolled && (
              <div 
                className={`hidden lg:flex absolute left-[3.5rem] items-center bg-[#111] border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none whitespace-nowrap shadow-xl transition-all duration-200 ease-out
                  ${activeSection === l.href ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
                `}
              >
                {l.name.split('').map((char, i) => (
                  <span 
                    key={i}
                    className={`transition-all duration-300 ease-out inline-block
                      ${activeSection === l.href ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}
                    `}
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Vertical divider on mobile */}
      <div className="w-px h-6 bg-white/10 block lg:hidden mx-1" />

      {/* CTA Button */}
      <a href="#contact" className="group relative flex items-center justify-center shrink-0">
        <div className={`flex items-center justify-center transition-all duration-300 ${scrolled ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black hover:scale-110' : 'w-8 h-8 sm:w-9 sm:h-9 lg:w-auto lg:h-auto lg:px-5 lg:py-2.5 rounded-full bg-white text-black text-sm font-bold lg:hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}>
          {scrolled ? (
            <FiCalendar size={18} />
          ) : (
            <>
              <span className="hidden lg:block">Book a Call</span>
              <FiCalendar size={16} className="block lg:hidden" />
            </>
          )}
        </div>
        
        {/* Tooltip for Scrolled CTA on Desktop */}
        {scrolled && (
          <div 
            className={`hidden lg:flex absolute left-[3.5rem] items-center bg-white text-black font-bold text-xs px-3 py-1.5 rounded-lg pointer-events-none whitespace-nowrap shadow-xl transition-all duration-200 ease-out
              ${activeSection === '#contact' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
            `}
          >
            {'Book a Call'.split('').map((char, i) => (
              <span 
                key={i}
                className={`transition-all duration-300 ease-out inline-block
                  ${activeSection === '#contact' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}
                `}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        )}
      </a>
    </div>
  );
}
