import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Beranda', href: '#home', active: true },
  { name: 'Tentang', href: '#about' },
  { name: 'Edukasi', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyek', href: '#work' },
  { name: 'Testimonial', href: '#testimonial' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-slate-900">&lt;HizkiaDev/&gt;</span>
          <span className="text-[10px] font-medium text-slate-500 tracking-widest">FULLSTACK DEVELOPER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 rounded-full",
                link.active 
                  ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2.5 rounded-full bg-slate-200/50 text-slate-600 hover:bg-slate-200 transition-colors">
            <Moon size={18} />
          </button>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    link.active ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600">
                  <Moon size={20} />
                </button>
                <a
                  href="#contact"
                  className="flex-1 text-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
