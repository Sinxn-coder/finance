import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn, formatCurrency } from '../../lib/utils';

export function StatsCard({ title, amount, trend, trendValue, icon: Icon, colorClass, delay = 0 }) {
  const isPositive = trend === 'up';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
          <Icon className={cn("w-6 h-6", colorClass)} />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
          isPositive ? "text-accent-quaternary bg-accent-quaternary/10" : "text-rose-500 bg-rose-500/10"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trendValue}%
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-white/50 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-white font-outfit">{formatCurrency(amount)}</p>
      </div>

      {/* Mini Sparkline Placeholder */}
      <div className="mt-4 h-12 w-full opacity-40 group-hover:opacity-60 transition-opacity">
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
          <path 
            d={isPositive 
              ? "M0,35 Q10,32 20,34 T40,25 T60,28 T80,15 T100,10" 
              : "M0,10 Q10,12 20,15 T40,30 T60,25 T80,35 T100,38"
            } 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            className={colorClass}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative Glow */}
      <div className={cn(
        "absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full",
        colorClass.replace('text-', 'bg-')
      )} />
    </motion.div>
  );
}
