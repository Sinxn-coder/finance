import React from 'react';
import { motion } from 'framer-motion';
import { cn, formatCurrency } from '../../lib/utils';
import { Bitcoin, Apple, Cpu, Smartphone, LayoutGrid } from 'lucide-react';

const investments = [
  { name: 'Bitcoin', symbol: 'BTC', price: 64200.50, change: 2.4, icon: Bitcoin, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'Ethereum', symbol: 'ETH', price: 3450.20, change: -1.2, icon: LayoutGrid, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { name: 'Tesla Inc.', symbol: 'TSLA', price: 175.40, change: 5.8, icon: Cpu, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { name: 'Apple Inc.', symbol: 'AAPL', price: 182.10, change: 0.5, icon: Apple, color: 'text-white', bg: 'bg-white/10' },
  { name: 'Nvidia', symbol: 'NVDA', price: 890.30, change: 12.4, icon: Smartphone, color: 'text-accent-quaternary', bg: 'bg-accent-quaternary/10' },
];

export function InvestmentPortfolio() {
  return (
    <div className="glass-card p-6 h-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white font-outfit">Investments</h3>
          <p className="text-white/40 text-sm">Portfolio performance</p>
        </div>
        <button className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
          <LayoutGrid size={18} className="text-white/60" />
        </button>
      </div>

      <div className="space-y-4">
        {investments.map((item, index) => (
          <motion.div 
            key={item.symbol}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm", item.bg)}>
                <item.icon className={cn("w-5 h-5", item.color)} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">{item.name}</p>
                <p className="text-[10px] font-medium text-white/30 uppercase mt-1">{item.symbol}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-right">
              {/* Mini sparkline */}
              <div className="hidden sm:block w-16 h-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 40 15" className="w-full h-full">
                  <path 
                    d={item.change > 0 
                      ? "M0,12 Q5,10 10,11 T20,6 T30,8 T40,2" 
                      : "M0,2 Q5,4 10,3 T20,8 T30,6 T40,12"
                    } 
                    fill="none" 
                    stroke={item.change > 0 ? "#10b981" : "#f43f5e"} 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <div>
                <p className="text-sm font-bold text-white font-outfit">{formatCurrency(item.price)}</p>
                <p className={cn(
                  "text-[10px] font-bold",
                  item.change > 0 ? "text-accent-quaternary" : "text-rose-500"
                )}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        <button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-white hover:bg-white/10 transition-colors">Sell All</button>
        <button className="flex-1 py-2 rounded-lg bg-accent-primary text-xs font-bold text-white hover:bg-accent-primary/90 transition-colors shadow-lg shadow-accent-primary/20">Invest More</button>
      </div>
    </div>
  );
}
