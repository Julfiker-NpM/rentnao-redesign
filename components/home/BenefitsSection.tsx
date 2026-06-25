'use client';

import { motion } from 'framer-motion';
import {
  Home,
  CheckCircle2,
  Zap,
  FileText,
  MessageSquare,
  Camera,
} from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={32} />,
  CheckCircle2: <CheckCircle2 size={32} />,
  Zap: <Zap size={32} />,
  FileText: <FileText size={32} />,
  MessageSquare: <MessageSquare size={32} />,
  Camera: <Camera size={32} />,
};

export function BenefitsSection() {
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
      className="py-16 md:py-24 bg-secondary-50"
    >
      <div className="section-container">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Everything You Need To Rent Smarter</h2>
          <p className="section-subtitle">Complete rental management solution for modern owners and tenants</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-base p-8 group"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <div className="text-primary-600">{iconMap[benefit.icon]}</div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">{benefit.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
