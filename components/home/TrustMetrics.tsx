'use client';

import { motion } from 'framer-motion';
import { TRUST_METRICS } from '@/lib/constants';

export function TrustMetrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="py-16 md:py-20 section-container"
    >
      <div className="grid md:grid-cols-4 gap-8">
        {TRUST_METRICS.map((metric, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {metric.value}
            </div>
            <p className="text-secondary-600 font-medium">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
