import { motion } from 'motion/react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiShadcnui,
  SiGo, SiSpringboot, SiPostgresql, SiRedis,
  SiDocker, SiNginx, SiGithubactions, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi, TbWorld } from 'react-icons/tb';

const stack = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js 14', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'shadcn/ui', icon: SiShadcnui, color: '#FFFFFF' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Java 21', icon: FaJava, color: '#ED8B00' },
      { name: 'Go 1.26', icon: SiGo, color: '#00ADD8' },
      { name: 'Spring Boot 4.0', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'REST API', icon: TbApi, color: '#10B981' },
      { name: 'WebSocket', icon: TbWorld, color: '#F59E0B' },
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Docker Compose', icon: SiDocker, color: '#2496ED' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ]
  }
];

export default function Expertise() {
  return (
    <section id="skills" className="py-24 bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-black via-sky-900/20 to-black">
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
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Technologies I use.
            </motion.h3>
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
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shadow-sm border border-white/10 transition-transform group-hover:scale-110">
                        <item.icon size={20} color={item.color} />
                      </div>
                      <span className="font-medium text-white/80 group-hover:text-white transition-colors">{item.name}</span>
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
