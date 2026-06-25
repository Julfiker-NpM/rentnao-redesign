'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { POPULAR_SEARCHES } from '@/lib/constants';

export function SearchSection() {
  const containerVariants = {
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
      className="relative -mt-12 z-10 section-container"
    >
      <div className="card-base p-6 md:p-8">
        {/* Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Location</label>
            <select className="input-base">
              <option>Select Area</option>
              {POPULAR_SEARCHES.map((search) => (
                <option key={search.value} value={search.value}>
                  {search.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Property Type</label>
            <select className="input-base">
              <option>All Types</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Room</option>
              <option>Commercial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Budget Range</label>
            <select className="input-base">
              <option>Any Price</option>
              <option>Under 10,000</option>
              <option>10,000 - 25,000</option>
              <option>25,000 - 50,000</option>
              <option>Above 50,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Bedrooms</label>
            <select className="input-base">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="btn-primary w-full justify-center">
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="border-t border-secondary-100 pt-6">
          <p className="text-sm font-medium text-secondary-600 mb-3">Popular Searches:</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((search) => (
              <button
                key={search.value}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                {search.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
