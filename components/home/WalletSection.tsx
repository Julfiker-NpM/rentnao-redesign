'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { TRANSACTIONS } from '@/lib/mock-data';

export function WalletSection() {
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
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="section-title">Never Chase Rent Again</h2>
        <p className="section-subtitle">Automated rent collection and secure wallet management</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Flow Diagram */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div className="space-y-6">
            {[
              { icon: '💰', label: 'Tenant Pays', desc: 'Secure payment processing' },
              { icon: '🔒', label: 'Secure Wallet', desc: 'Your funds are protected' },
              { icon: '✅', label: 'Owner Receives', desc: 'Instant wallet credit' },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
              >
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <p className="font-semibold text-secondary-900">{step.label}</p>
                  <p className="text-sm text-secondary-600">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="ml-auto text-primary-600">
                    <ArrowDownLeft size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wallet Dashboard Preview */}
        <motion.div variants={itemVariants} className="card-base p-8">
          {/* Wallet Card */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white mb-8 shadow-elevated">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-primary-100 text-sm mb-2">Account Balance</p>
                <p className="text-4xl font-bold">৳ 2,88,000</p>
              </div>
              <Wallet size={48} className="opacity-50" />
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-primary-400">
              <span className="text-sm">RentNao Wallet</span>
              <span className="text-xs bg-primary-400 px-3 py-1 rounded-full">Active</span>
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-primary-600" />
              <h3 className="font-semibold text-secondary-900">Recent Transactions</h3>
            </div>

            <div className="space-y-3">
              {TRANSACTIONS.slice(0, 4).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-secondary-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      transaction.status === 'completed'
                        ? 'bg-green-100'
                        : transaction.status === 'pending'
                        ? 'bg-yellow-100'
                        : 'bg-red-100'
                    }`}>
                      {transaction.amount > 0 ? (
                        <ArrowDownLeft className={transaction.status === 'completed' ? 'text-green-600' : 'text-yellow-600'} size={20} />
                      ) : (
                        <ArrowUpRight className="text-blue-600" size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900 text-sm">{transaction.from}</p>
                      <p className="text-xs text-secondary-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-secondary-900">৳ {transaction.amount.toLocaleString()}</p>
                    <p className={`text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'text-green-600'
                        : transaction.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div className="mt-8 pt-6 border-t border-secondary-100 space-y-3">
            {[
              'Automatic Rent Collection',
              'Payment Reminders',
              'Cash In / Cash Out',
              'Transaction History',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-sm text-secondary-600">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
