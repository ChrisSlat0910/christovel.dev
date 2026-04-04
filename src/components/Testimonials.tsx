import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, TechStart',
    text: 'The work delivered was absolutely outstanding. The design is not only modern and clean, but also highly focused on user experience. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Siti Rahma',
    role: 'Marketing Director',
    text: 'Our new website received numerous compliments from clients. The workflow is highly professional and always provides creative solutions to every problem we face.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Andi Wijaya',
    role: 'Product Manager',
    text: 'An incredible collaboration. The ability to combine beautiful UI design with solid frontend code allowed our project to be completed ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-arctic-accent uppercase mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-arctic-text"
          >
            What they say?
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-arctic-bg p-8 rounded-3xl border border-arctic-surface relative"
            >
              <Quote className="absolute top-8 right-8 text-arctic-surface w-12 h-12" />
              <p className="text-arctic-text/80 leading-relaxed mb-8 relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold text-arctic-text">{item.name}</h5>
                  <p className="text-sm text-arctic-text/60">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
