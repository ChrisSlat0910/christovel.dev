import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Name & Copyright */}
        <div className="text-sm text-white/70">
          <span className="font-bold text-white">Tricia Asuncion</span> &copy; {currentYear}. All rights reserved.
        </div>

        {/* Middle: Concise Nav */}
        <div className="flex items-center gap-6 text-sm font-medium text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
