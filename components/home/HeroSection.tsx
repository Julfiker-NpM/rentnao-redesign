'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                Bangladesh's Smart Rental Marketplace for Owners & Tenants
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed"
            >
              Find verified tenants without spending on To-Let promotions. List properties for free,
              manage rentals digitally, and collect rent automatically.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#"
                className="btn-primary group"
              >
                <span>List Property Free</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#" className="btn-secondary">
                Browse Properties
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg">
                <span className="text-2xl font-bold text-primary-600">500+</span>
                <span className="text-sm text-secondary-600">Properties</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg">
                <span className="text-2xl font-bold text-primary-600">1000+</span>
                <span className="text-sm text-secondary-600">Verified Users</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-square md:aspect-auto h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-100 rounded-3xl opacity-40" />
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-8xl mb-4">🏠</div>
                  <p className="text-xl font-semibold text-secondary-700">Smart Rental Living</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
