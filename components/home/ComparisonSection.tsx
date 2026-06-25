'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { COMPARISON_DATA } from '@/lib/constants';

export function ComparisonSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-16 md:py-24 bg-secondary-50"
    >
      <div className="section-container">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Why Choose RentNao?</h2>
          <p className="section-subtitle">Experience the difference between traditional renting and smart rental management</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="card-base overflow-hidden">
            {/* Header */}
            <div className="grid md:grid-cols-2 bg-primary-600 text-white">
              <div className="p-6 border-r border-primary-500">
                <h3 className="text-xl font-semibold">Traditional Renting</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">RentNao</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {COMPARISON_DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid md:grid-cols-2 border-b border-secondary-100 last:border-b-0 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'
                }`}
              >
                {/* Traditional */}
                <div className="p-6 flex items-center gap-3 border-r border-secondary-100">
                  <X size={24} className="text-red-500 flex-shrink-0" />
                  <span className="text-secondary-700">{item.traditional}</span>
                </div>

                {/* RentNao */}
                <div className="p-6 flex items-center gap-3">
                  <Check size={24} className="text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-secondary-900">{item.rentNao}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
