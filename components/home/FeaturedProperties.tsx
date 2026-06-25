'use client';

import { motion } from 'framer-motion';
import { PropertyCard } from './PropertyCard';
import { FEATURED_PROPERTIES } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export function FeaturedProperties() {
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
      className="py-16 md:py-24 section-container"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-12">
        <div>
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Popular listings in your area</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors group">
          <span>View All</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Properties Grid */}
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {FEATURED_PROPERTIES.slice(0, 6).map((property) => (
          <motion.div key={property.id} variants={itemVariants}>
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View All Button */}
      <motion.div variants={itemVariants} className="md:hidden">
        <button className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group">
          <span>View All Properties</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </motion.section>
  );
}
