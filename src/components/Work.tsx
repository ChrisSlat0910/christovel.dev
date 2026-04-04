import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Fintech Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'E-Commerce App', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Health Tracker', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Corporate Website', category: 'Web Design', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'AI Analytics Platform', category: 'Fullstack Dev', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'Smart Home IoT', category: 'Backend Dev', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop' }
];

const glowColors = ['#0EA5E9', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const [hoverColor, setHoverColor] = useState('');
  
  // Alternate layout based on image reference
  // Row 1: Top-Left (0), Top-Right (1), Top-Left (2)
  // Row 2: Bottom-Left (3), Top-Left (4), Bottom-Left (5)
  // Let's simplify to: Even index = Text Top, Image Bottom. Odd index = Image Top, Text Bottom.
  const isImageTop = index % 2 !== 0;

  const handleMouseEnter = () => {
    const randomColor = glowColors[Math.floor(Math.random() * glowColors.length)];
    setHoverColor(randomColor);
  };

  const handleMouseLeave = () => {
    setHoverColor('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative cursor-pointer border-b border-r border-white/10 p-6 md:p-8 flex flex-col bg-[#0A0A0A] hover:bg-white/5 hover:z-10 transition-colors duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: hoverColor ? `0 0 40px -10px ${hoverColor}` : '0 0 0px transparent',
        borderColor: hoverColor ? hoverColor : '',
      }}
    >
      {isImageTop ? (
        <>
          <div className="flex-1 rounded-2xl overflow-hidden bg-white/5 relative mb-8 min-h-[200px]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-end">
            <span className="text-5xl font-display font-bold text-white/10 group-hover:text-white transition-colors">0{index + 1}</span>
            <div className="text-right">
              <h4 className="font-bold text-white text-lg">{project.title}</h4>
              <p className="text-sm text-white/50">{project.category}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-start mb-8">
            <span className="text-5xl font-display font-bold text-white/10 group-hover:text-white transition-colors">0{index + 1}</span>
            <div className="text-right">
              <h4 className="font-bold text-white text-lg">{project.title}</h4>
              <p className="text-sm text-white/50">{project.category}</p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-white/5 relative min-h-[200px]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sky-900/30 via-black to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3">Projects</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              Selected Works.
            </h3>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 text-white/70 font-medium hover:text-white transition-colors"
          >
            View All Projects <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
