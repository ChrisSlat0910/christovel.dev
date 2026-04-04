import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-sky-800/30 via-black to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-32 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Let's build something <span className="text-white/50">amazing</span> together.
            </h3>
            <p className="text-lg text-white/70 mb-10">
              Have a project idea or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/70 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium">Email</p>
                  <p className="font-bold text-white">hello@portfolio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/70 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium">Phone</p>
                  <p className="font-bold text-white">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/70 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium">Location</p>
                  <p className="font-bold text-white">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0A0A0A] p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-black/50 border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Subject</label>
                <input 
                  type="text" 
                  placeholder="Web Design Project"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all resize-none text-white"
                ></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
