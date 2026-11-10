import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowDownLeft, ArrowUpRight, Zap, RefreshCcw } from 'lucide-react';
import { cn } from '../../lib/utils';

const activities = [
  { id: 1, title: 'Payment received', description: 'From Design Studio project', time: '2h ago', icon: ArrowDownLeft, color: 'text-accent-quaternary', bg: 'bg-accent-quaternary/10' },
  { id: 2, title: 'Subscription renewed', description: 'Adobe Creative Cloud', time: '5h ago', icon: RefreshCcw, color: 'text-accent-primary', bg: 'bg-accent-primary/10' },
  { id: 3, title: 'Investment increased', description: 'Nvidia Corp stock +12%', time: '8h ago', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 4, title: 'Transfer completed', description: 'To main savings account', time: '1d ago', icon: ArrowUpRight, color: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
];

export function ActivityFeed() {
  return (
    <div className="glass-card p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white font-outfit">Recent Activity</h3>
        <p className="text-white/40 text-sm">Real-time updates</p>
      </div>

      <div className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
        {activities.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-12"
          >
            <div className={cn(
              "absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-background z-10",
              item.bg
            )}>
              <item.icon className={cn("w-4 h-4", item.color)} />
            </div>
            <div>
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                <span className="text-[10px] font-medium text-white/20 whitespace-nowrap">{item.time}</span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-8 py-2 rounded-lg border border-white/5 text-xs font-medium text-white/40 hover:text-white hover:bg-white/5 transition-all">
        View All History
      </button>
    </div>
  );
}
