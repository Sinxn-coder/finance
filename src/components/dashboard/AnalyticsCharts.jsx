import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', revenue: 45000, expenses: 32000 },
  { name: 'Feb', revenue: 52000, expenses: 34000 },
  { name: 'Mar', revenue: 48000, expenses: 31000 },
  { name: 'Apr', revenue: 61000, expenses: 38000 },
  { name: 'May', revenue: 55000, expenses: 35000 },
  { name: 'Jun', revenue: 67000, expenses: 42000 },
  { name: 'Jul', revenue: 72000, expenses: 45000 },
];

const activityData = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 85 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 95 },
  { day: 'Sat', value: 70 },
  { day: 'Sun', value: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl">
        <p className="text-white/60 text-xs mb-1 font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm font-bold" style={{ color: entry.color }}>
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass-card p-6 min-h-[400px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-white font-outfit">Financial Overview</h3>
            <p className="text-white/40 text-sm">Revenue vs Expenses</p>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff60', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff60', fontSize: 12 }} 
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                name="Revenue"
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fill="url(#colorRev)" 
                isAnimationActive={false}
              />
              <Area 
                name="Expenses"
                type="monotone" 
                dataKey="expenses" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fill="url(#colorExp)" 
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6 min-h-[400px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white font-outfit">Weekly Activity</h3>
        </div>

        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff60', fontSize: 12 }} 
              />
              <Tooltip 
                cursor={{ fill: '#ffffff05' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black/90 backdrop-blur-md border border-white/10 p-2 rounded-lg">
                        <p className="text-sm font-bold text-white">{payload[0].value}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 4, 4]} 
                isAnimationActive={false}
              >
                {activityData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === 4 ? '#3b82f6' : '#ffffff20'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
