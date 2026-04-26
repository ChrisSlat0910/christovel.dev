'use client';

import { motion } from 'motion/react';
import { FiMessageSquare } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, TechStart',
    text: 'The work delivered was absolutely outstanding. The design is not only modern and clean, but also highly focused on user experience. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Siti Rahma',
    role: 'Marketing Director',
    text: 'Our new website received numerous compliments from clients. The workflow is professional and always provides creative solutions to every problem we face.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Andi Wijaya',
    role: 'Product Manager',
    text: 'An incredible collaboration. Beautiful UI design combined with solid frontend code allowed our project to be completed ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="section-testimonials py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p className="label justify-center mb-4"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]" />
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold text-[#E8EAF0]"
          >
            What they say?
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-raised p-7 flex flex-col hover:border-[#4F6EF7]/30 transition-colors duration-300 relative"
            >
              {/* Quote icon */}
              <FiMessageSquare className="absolute top-6 right-6 text-white/10" size={28} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FaStar key={s} size={12} className="text-[#F59E0B]" />
                ))}
              </div>

              <p className="text-[#999] leading-relaxed text-sm mb-8 flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-sm font-semibold text-[#E8EAF0]">{item.name}</p>
                  <p className="text-xs text-[#888]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
