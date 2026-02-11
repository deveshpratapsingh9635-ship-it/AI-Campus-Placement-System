
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, CheckCircle2, Clock } from 'lucide-react';

const PLACEMENT_DATA = [
  { name: 'CS', placed: 85, total: 100 },
  { name: 'IT', placed: 78, total: 95 },
  { name: 'ECE', placed: 62, total: 110 },
  { name: 'MECH', placed: 45, total: 90 },
  { name: 'CIVIL', placed: 38, total: 85 },
];

const MONTHLY_TRENDS = [
  { month: 'Aug', applications: 120, hires: 12 },
  { month: 'Sep', applications: 450, hires: 45 },
  { month: 'Oct', applications: 890, hires: 112 },
  { month: 'Nov', applications: 600, hires: 85 },
];

const STATUS_DATA = [
  { name: 'Hired', value: 254, color: '#10b981' },
  { name: 'Shortlisted', value: 120, color: '#3b82f6' },
  { name: 'Processing', value: 450, color: '#f59e0b' },
  { name: 'Rejected', value: 180, color: '#ef4444' },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', val: '1,240', icon: <Users className="text-blue-600" />, trend: '+12%' },
          { label: 'Active Jobs', val: '48', icon: <Clock className="text-orange-600" />, trend: '+5%' },
          { label: 'Placed Students', val: '312', icon: <CheckCircle2 className="text-emerald-600" />, trend: '+18%' },
          { label: 'Avg. Package', val: '$12 LPA', icon: <TrendingUp className="text-purple-600" />, trend: '+2%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-800">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Placement Rate by Department</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PLACEMENT_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="placed" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Hiring Funnel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_TRENDS}>
                <defs>
                  <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="hires" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorHires)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
