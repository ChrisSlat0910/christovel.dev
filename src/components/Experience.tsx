import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior UI/UX Designer',
    organization: 'TechNova Solutions',
    period: '2021 - Present',
    description: 'Led the design team in creating interfaces for various SaaS products. Increased user retention by 30% through core app redesign.'
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Creative Digital Agency',
    period: '2018 - 2021',
    description: 'Developed interactive websites for corporate clients using React and modern animations. Worked closely with designers for pixel-perfect implementation.'
  },
  {
    type: 'education',
    title: 'B.S. Information Systems',
    organization: 'Technology University',
    period: '2014 - 2018',
    description: 'Graduated with Cum Laude honors. Focused on human-computer interaction and software engineering.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-900/30 via-black to-black">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3"
          >
            Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Experience & Education
          </motion.h3>
        </div>

        <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 space-y-12">
          {experiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-12 h-12 rounded-full bg-[#0A0A0A] border-4 border-white/10 flex items-center justify-center text-white/70 shadow-sm">
                {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              
              <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs font-bold mb-4 border border-white/10">
                  {item.period}
                </span>
                <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                <p className="text-white/50 font-medium mb-4">{item.organization}</p>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
