import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'RentNao - Bangladesh\'s Smart Rental Marketplace',
  description: 'Find verified tenants without spending on To-Let promotions. List properties for free, manage rentals digitally, and collect rent automatically.',
  keywords: ['rental', 'property', 'rent', 'Bangladesh', 'marketplace', 'tenants'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-secondary-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
