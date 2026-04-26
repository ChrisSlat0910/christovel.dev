import { motion } from 'motion/react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiSpringboot, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiVercel, SiFramer, SiFlyway, SiRailway, SiLinux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const stack = [
  {
    category: 'FRONTEND',
    items: [
      { name: 'Next.js', desc: 'App Router, SSR, TypeScript integration', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'React', desc: 'Component-based UI, hooks, Context API', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', desc: 'Type-safe frontend development', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', desc: 'Utility-first styling', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', desc: 'Animations and transitions', icon: SiFramer, color: '#0055FF' },
    ]
  },
  {
    category: 'BACKEND & DB',
    items: [
      { name: 'Java', desc: 'Primary backend language', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', desc: 'REST APIs, Security, AOP, Actuator', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'PostgreSQL', desc: 'Relational modeling, full-text search, migrations', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', desc: 'Caching, rate limiting, session management', icon: SiRedis, color: '#DC382D' },
      { name: 'Flyway', desc: 'Versioned database migrations', icon: SiFlyway, color: '#CC0200' },
    ]
  },
  {
    category: 'TOOLS',
    items: [
      { name: 'Docker', desc: 'Containerization and local dev environments', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', desc: 'Version control and branching', icon: SiGit, color: '#F05032' },
      { name: 'Railway', desc: 'Cloud backend deployment', icon: SiRailway, color: '#FFFFFF' },
      { name: 'Vercel', desc: 'Frontend deployment', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Linux', desc: 'Server environment and CLI', icon: SiLinux, color: '#FCC624' },
    ]
  }
];

export default function Expertise() {
  return (
    <section id="skills" className="py-24 bg-[linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-black via-sky-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Skills Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3"
            >
              Tech Stack
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Technologies I use.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-base md:text-lg max-w-lg mx-auto"
            >
              The technologies I work with to build reliable, production-ready systems.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stack.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 shadow-sm"
              >
                <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{group.category}</h4>
                <div className="flex flex-col gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center shadow-sm border border-white/10 transition-transform group-hover:scale-110">
                        <item.icon size={20} color={item.color} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white/80 group-hover:text-white transition-colors leading-tight">{item.name}</span>
                        <span className="text-xs text-[#888] mt-0.5">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
