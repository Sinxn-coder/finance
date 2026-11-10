import React from 'react';
import { Search, Bell, Sun, Moon, User } from 'lucide-react';

export function Navbar() {
  return (
    <header className="h-20 sticky top-0 z-30 bg-background/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-accent-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search transactions, assets, or reports..." 
            className="w-full bg-white/5 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-primary/30 focus:ring-4 focus:ring-accent-primary/5 transition-all placeholder:text-white/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-primary rounded-full border-2 border-background" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-all">
            <Sun size={20} />
          </button>
        </div>

        <div className="h-8 w-[1px] bg-white/5" />

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">Alex Rivera</p>
            <p className="text-xs text-white/40">Welcome back 👋</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 border border-white/10 p-0.5">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Avatar" 
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
