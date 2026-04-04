import { motion } from 'motion/react';
import { ArrowRight, User, MousePointer2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Problem Solver";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-300/30 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-fuchsia-300/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Open to Work 2025
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
            Solusi Kreatif <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
              Dunia Digital
            </span>
          </h1>
          
          {/* Typing Subheading */}
          <div className="text-xl md:text-2xl text-slate-600 mb-4 font-medium flex items-center gap-2">
            Saya seorang <span className="text-slate-900 font-semibold">{text}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[2px] h-6 bg-fuchsia-500 inline-block"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-slate-500 mb-10 max-w-lg leading-relaxed">
            Mengubah ide kompleks menjadi website modern, responsif, dan interaktif yang membantu bisnis Anda tumbuh lebih cepat.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-purple-500/20"
            >
              Lihat Portfolio
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              Tentang Saya
              <User size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">5+</h4>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Pengalaman</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">50+</h4>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Proyek</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">20+</h4>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Klien</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image & Code Editor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md mt-12 lg:mt-0"
        >
          {/* Main Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Code Editor */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 md:-left-24 w-72 bg-[#1E1E2E] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-10"
          >
            {/* Editor Header */}
            <div className="bg-[#181825] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-400 ml-2 font-mono">{'>_ app.js'}</span>
            </div>
            {/* Editor Body */}
            <div className="p-4 font-mono text-xs leading-relaxed">
              <p className="text-pink-400">const <span className="text-white">developer</span> <span className="text-cyan-400">=</span> <span className="text-yellow-300">{'{'}</span></p>
              <p className="pl-4 text-white">name: <span className="text-green-300">'Hizkia'</span>,</p>
              <p className="pl-4 text-white">skills: <span className="text-yellow-300">['React', 'Next.js']</span>,</p>
              <p className="pl-4 text-white">passionate: <span className="text-purple-400">true</span></p>
              <p className="text-yellow-300">{'}'}</p>
              <br/>
              <p className="text-slate-500">{'// Let\'s build something awesome'}</p>
              <p className="text-cyan-400 mt-2">developer<span className="text-white">.</span><span className="text-blue-400">code</span><span className="text-yellow-300">()</span>;</p>
            </div>
            
            {/* Cursor Icon */}
            <div className="absolute bottom-4 right-4 text-white drop-shadow-md">
              <MousePointer2 className="w-5 h-5 fill-white text-black" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
