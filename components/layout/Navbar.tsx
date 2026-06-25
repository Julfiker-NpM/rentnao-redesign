'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll for glassmorphism effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 10);
    });
  }

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Browse' },
    { href: '#', label: 'About' },
    { href: '#', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-soft'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏘️</span>
            </div>
            <span className="text-xl font-bold text-secondary-900">RentNao</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-secondary-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-secondary-100 transition-colors">
              <Globe size={18} className="text-secondary-600" />
              <span className="text-sm font-medium text-secondary-700">{language}</span>
            </button>

            {/* Auth Buttons */}
            <Link
              href="#"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-secondary-700 hover:text-primary-600 transition-colors font-medium"
            >
              <LogIn size={18} />
              <span>Log In</span>
            </Link>

            <Link
              href="#"
              className="hidden sm:block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="text-secondary-900" />
              ) : (
                <Menu size={24} className="text-secondary-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-secondary-100"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-secondary-100 space-y-2">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors">
                    <LogIn size={18} />
                    Log In
                  </button>
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
