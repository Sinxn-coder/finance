import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { StatsCard } from './components/dashboard/StatsCard';
import { AnalyticsCharts } from './components/dashboard/AnalyticsCharts';
import { TransactionTable } from './components/dashboard/TransactionTable';
import { BudgetTracker } from './components/dashboard/BudgetTracker';
import { InvestmentPortfolio } from './components/dashboard/InvestmentPortfolio';
import { ActivityFeed } from './components/dashboard/ActivityFeed';
import { Wallet, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-white selection:bg-accent-primary/30">
      {/* Background decoration */}
      <div className="blur-bg w-[500px] h-[500px] bg-accent-primary/20 top-[-200px] right-[-100px]" />
      <div className="blur-bg w-[400px] h-[400px] bg-accent-secondary/20 bottom-[-100px] left-[-100px]" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <div className="flex-1 p-6 lg:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-40 rounded-2xl bg-white/5 animate-pulse" />
                ))}
                <div className="lg:col-span-3 h-[400px] rounded-2xl bg-white/5 animate-pulse" />
                <div className="h-[400px] rounded-2xl bg-white/5 animate-pulse" />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold font-outfit tracking-tight">Financial Dashboard</h1>
                    <p className="text-white/40 mt-1">Track your performance, investments and budgets in one place.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
                      Generate Report
                    </button>
                    <button className="btn-primary flex items-center gap-2">
                      <Wallet size={18} />
                      Add Transaction
                    </button>
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatsCard 
                    title="Total Balance" 
                    amount={84250.00} 
                    trend="up" 
                    trendValue={12.5} 
                    icon={Wallet} 
                    colorClass="text-accent-primary"
                    delay={0.1}
                  />
                  <StatsCard 
                    title="Monthly Revenue" 
                    amount={12400.00} 
                    trend="up" 
                    trendValue={8.2} 
                    icon={TrendingUp} 
                    colorClass="text-accent-quaternary"
                    delay={0.2}
                  />
                  <StatsCard 
                    title="Total Expenses" 
                    amount={4250.00} 
                    trend="down" 
                    trendValue={3.1} 
                    icon={CreditCard} 
                    colorClass="text-rose-500"
                    delay={0.3}
                  />
                  <StatsCard 
                    title="Savings" 
                    amount={28400.00} 
                    trend="up" 
                    trendValue={5.4} 
                    icon={PieChart} 
                    colorClass="text-accent-secondary"
                    delay={0.4}
                  />
                </div>

                {/* Main Analytics & Activity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8 space-y-8">
                    <AnalyticsCharts />
                    <TransactionTable />
                  </div>
                  
                  <div className="lg:col-span-4 space-y-8">
                    <InvestmentPortfolio />
                    <BudgetTracker />
                    <ActivityFeed />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
