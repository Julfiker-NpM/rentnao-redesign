'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Bed, Bath, Maximize2, Badge, Video, Cube } from 'lucide-react';
import { Property } from '@/types';
import { useState } from 'react';
import Image from 'next/image';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="card-base overflow-hidden flex flex-col h-full group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary-100 h-64">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
          {property.verified && (
            <div className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Badge size={14} />
              Verified
            </div>
          )}
          {property.has3DTour && (
            <div className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Cube size={14} />
              3D Tour
            </div>
          )}
          {property.hasVideoTour && (
            <div className="inline-flex items-center gap-1 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Video size={14} />
              Video
            </div>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary-100 transition-colors shadow-soft"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-secondary-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-primary-600">
            ৳ {property.rent.toLocaleString()}
            <span className="text-sm text-secondary-600 font-normal">/month</span>
          </p>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-secondary-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-secondary-600">
          <MapPin size={18} className="text-primary-600 flex-shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex gap-4 text-secondary-600 text-sm mb-5 pb-5 border-b border-secondary-100">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-primary-600" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} className="text-primary-600" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 size={16} className="text-primary-600" />
            <span>{property.area} sqft</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
