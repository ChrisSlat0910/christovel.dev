import { motion } from 'motion/react';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-black via-sky-900/20 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-white/80"></span>
            Website Designer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6"
          >
            Tricia Asuncion , <span className="text-white/40">Web Designer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            Brief initial presentation of myself and my previous experiences.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#0A0A0A] rounded-3xl p-5 border border-white/5 shadow-2xl flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-6 relative bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-white border border-white/10 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Available for work
              </div>
            </div>
            
            <div className="px-2 flex-1 flex flex-col">
              <h4 className="text-2xl font-display font-medium text-white mb-2">Hello I am Tricia Asuncion</h4>
              <p className="text-white/60 text-sm mb-8">Website Designer Based in Philippines.</p>
              
              <div className="flex items-center gap-4 mb-8">
                <a href="#" className="w-12 h-12 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
              </div>

              <div className="mt-auto">
                <a href="#contact" className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-center hover:bg-white/10 transition-colors flex items-center justify-center">
                  Project Inquiry
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0A0A0A] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl flex flex-col"
          >
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              I'm Tricia Asuncion, a dedicated web designer based in Rizal, Philippines. I specialize in creative design combined with seamless technical execution to craft exceptional digital experiences.
            </p>
            
            <div className="h-px w-full bg-white/5 mb-10"></div>
            
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80">Social Media Management</span>
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80">Framer</span>
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80">Showit</span>
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80">Shopify</span>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              {[
                { role: 'Web Design', company: 'KMarshy Photography', year: '2026' },
                { role: 'Web Design', company: 'Classic Head Spa', year: '2026' },
                { role: 'Web Design', company: 'Mason Gear Shop', year: '2025' },
                { role: 'Web Design', company: 'Moisi Co', year: '2025' },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-white/70 text-sm">{item.role}</span>
                  <span className="text-white/90 text-sm font-medium">{item.company}</span>
                  <span className="text-white/50 text-sm text-right">{item.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
