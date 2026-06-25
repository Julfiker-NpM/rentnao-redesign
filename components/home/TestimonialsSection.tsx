'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/mock-data';
import { useState } from 'react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-16 md:py-24 bg-secondary-50"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Trusted By Owners & Tenants</h2>
          <p className="section-subtitle">Featured reviews from our community</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setActiveIndex(index)}
              className={`card-base p-8 cursor-pointer transition-all ${
                activeIndex === index ? 'ring-2 ring-primary-500 shadow-elevated' : ''
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-secondary-700 mb-6 leading-relaxed line-clamp-4">
                {testimonial.comment}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-secondary-100">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                      {testimonial.verified && (
                        <CheckCircle2 size={16} className="text-green-500" />
                      )}
                    </div>
                    <p className="text-xs text-secondary-500 capitalize">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Give us your review
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
