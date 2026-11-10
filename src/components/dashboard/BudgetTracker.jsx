import React from 'react';
import { motion } from 'framer-motion';
import { cn, formatCurrency } from '../../lib/utils';

const budgets = [
  { name: 'Food & Dining', spent: 850, total: 1200, color: 'bg-accent-primary' },
  { name: 'Shopping', spent: 420, total: 600, color: 'bg-accent-secondary' },
  { name: 'Bills & Utilities', spent: 1500, total: 1500, color: 'bg-accent-tertiary' },
  { name: 'Entertainment', spent: 180, total: 400, color: 'bg-accent-quaternary' },
  { name: 'Travel', spent: 1200, total: 2000, color: 'bg-rose-500' },
];

export function BudgetTracker() {
  return (
    <div className="glass-card p-6 h-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white font-outfit">Budget Progress</h3>
          <p className="text-white/40 text-sm">Monthly spending limits</p>
        </div>
        <button className="text-xs text-accent-primary font-medium hover:underline">View All</button>
      </div>

      <div className="space-y-6">
        {budgets.map((item, index) => {
          const percentage = Math.min((item.spent / item.total) * 100, 100);
          return (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70 font-medium">{item.name}</span>
                <div className="text-right">
                  <span className="text-white font-bold">{formatCurrency(item.spent)}</span>
                  <span className="text-white/30 ml-1">/ {formatCurrency(item.total)}</span>
                </div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={cn("h-full rounded-full relative", item.color)}
                >
                  {percentage > 90 && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </motion.div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-wider">
                  {percentage.toFixed(0)}% Used
                </span>
                {percentage >= 100 && (
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">
                    Limit Reached
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/10">
        <p className="text-xs text-white/60 leading-relaxed text-center">
          💡 You've spent <span className="text-accent-primary font-bold">12% less</span> on Food than last month. Keep it up!
        </p>
      </div>
    </div>
  );
}
