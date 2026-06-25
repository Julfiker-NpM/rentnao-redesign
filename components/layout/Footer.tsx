'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Browse Properties', href: '#' },
        { label: 'List Property', href: '#' },
        { label: 'Tenant Verification', href: '#' },
        { label: 'Digital Agreements', href: '#' },
        { label: 'Wallet', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Help Center', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏘️</span>
              </div>
              <span className="text-xl font-bold">RentNao</span>
            </div>
            <p className="text-secondary-300 text-sm mb-6">
              Bangladesh's smart rental marketplace for owners & tenants.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-300 text-sm">
                <Phone size={18} className="text-primary-500" />
                <a href="tel:+8809638621" className="hover:text-white transition-colors">
                  +880 96386 21
                </a>
              </div>
              <div className="flex items-center gap-3 text-secondary-300 text-sm">
                <Mail size={18} className="text-primary-500" />
                <a href="mailto:contact@dummy.com" className="hover:text-white transition-colors">
                  contact@dummy.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-secondary-300 text-sm">
                <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Dummy Jinihs Dio, Community Housing, Dhanmondi, Dhaka - 1205</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-secondary-400 text-sm">
            © Copyright {currentYear} Rent Nao Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
