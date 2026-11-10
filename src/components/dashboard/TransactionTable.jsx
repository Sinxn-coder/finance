import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, formatCurrency } from '../../lib/utils';
import { MoreVertical, Filter, Download } from 'lucide-react';

const transactions = [
  { id: 1, user: 'Design Studio', type: 'Expense', category: 'Software', date: 'May 10, 2026', amount: -120.00, status: 'Completed', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=DS' },
  { id: 2, user: 'Apple Inc.', type: 'Expense', category: 'Hardware', date: 'May 08, 2026', amount: -1299.00, status: 'Pending', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Apple' },
  { id: 3, user: 'Upwork Global', type: 'Income', category: 'Freelance', date: 'May 07, 2026', amount: 4500.00, status: 'Completed', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Upwork' },
  { id: 4, user: 'Amazon Web Services', type: 'Expense', category: 'Cloud', date: 'May 05, 2026', amount: -45.50, status: 'Completed', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=AWS' },
  { id: 5, user: 'Stripe Payout', type: 'Income', category: 'SaaS', date: 'May 04, 2026', amount: 12400.00, status: 'Completed', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Stripe' },
  { id: 6, user: 'Dribbble Pro', type: 'Expense', category: 'Subscription', date: 'May 03, 2026', amount: -15.00, status: 'Failed', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Dribbble' },
];

export function TransactionTable() {
  const [filter, setFilter] = useState('All');

  const filteredTransactions = transactions.filter(t => 
    filter === 'All' || t.type === filter
  );

  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white font-outfit">Recent Transactions</h3>
          <p className="text-white/40 text-sm">You have {transactions.length} transactions this month</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
            {['All', 'Income', 'Expense'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                  filter === f ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/20" : "text-white/40 hover:text-white"
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Download size={18} className="text-white/60" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/[0.02] text-white/30 text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Transaction</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <AnimatePresence mode='popLayout'>
              {filteredTransactions.map((tx, index) => (
                <motion.tr 
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={tx.id} 
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-1 group-hover:border-white/20 transition-colors">
                        <img src={tx.avatar} alt="" className="w-full h-full rounded-lg" />
                      </div>
                      <span className="text-sm font-semibold text-white">{tx.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-white/40">{tx.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-white/40">{tx.date}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={cn(
                      "text-sm font-bold font-outfit",
                      tx.type === 'Income' ? "text-accent-quaternary" : "text-white"
                    )}>
                      {tx.type === 'Income' ? '+' : ''}{formatCurrency(tx.amount)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "status-badge",
                      tx.status === 'Completed' ? "status-completed" : 
                      tx.status === 'Pending' ? "status-pending" : "status-failed"
                    )}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/40">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      
      {filteredTransactions.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-white/20 text-sm">No transactions found matching your filter</p>
        </div>
      )}

      <div className="p-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-white/20">Showing {filteredTransactions.length} of {transactions.length}</span>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/40 hover:text-white transition-colors">Previous</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/40 hover:text-white transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
