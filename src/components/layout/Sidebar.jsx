import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  History, 
  Wallet, 
  TrendingUp, 
  PieChart, 
  Bell, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: History, label: 'Transactions', id: 'transactions' },
  { icon: Wallet, label: 'Wallets', id: 'wallets' },
  { icon: TrendingUp, label: 'Investments', id: 'investments' },
  { icon: PieChart, label: 'Budget', id: 'budget' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export function Sidebar({ activeTab, setActiveTab }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen sticky top-0 bg-background/50 backdrop-blur-xl border-r border-white/5 transition-all duration-300 flex flex-col",
      isCollapsed ? "w-20" : "w-64"
    )}>
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center shrink-0 shadow-lg shadow-accent-primary/20">
          <TrendingUp className="text-white w-5 h-5" />
        </div>
        {!isCollapsed && (
          <span className="font-bold text-xl tracking-tight text-white font-outfit">
            PricePilot <span className="text-accent-primary">Fin</span>
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "sidebar-item w-full",
              activeTab === item.id && "active",
              isCollapsed && "justify-center px-0"
            )}
          >
            <item.icon className={cn("w-5 h-5 shrink-0", activeTab === item.id ? "text-accent-primary" : "text-inherit")} />
            {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
            {activeTab === item.id && !isCollapsed && (
              <div className="ml-auto w-1 h-4 rounded-full bg-accent-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <button className={cn(
          "sidebar-item w-full text-rose-400 hover:text-rose-300 hover:bg-rose-500/5",
          isCollapsed && "justify-center px-0"
        )}>
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full h-8 flex items-center justify-center hover:bg-white/5 rounded-lg transition-colors text-white/40"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </div>
  );
}
