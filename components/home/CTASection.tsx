'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-16 md:py-24 section-container"
    >
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Rent Smarter?
          </h2>

          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
            List residential, commercial properties and billboards for free. Find verified tenants, manage digitally and collect rent automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>List Property Free</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Explore Properties</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
