// src/components/admin/analytics/SubscriptionBreakdown.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Active', value: 69, color: '#10b981' },
  { name: 'Cancelled', value: 32, color: '#ef4444' },
  { name: 'Paused', value: 24, color: '#e5e7eb' },
];

const stats = [
  { label: 'New Subscriptions', value: '1,345', change: '+12.7%', positive: true },
  { label: 'Renewals', value: '1,142', change: '+6.2%', positive: true },
  { label: 'Total Revenue', value: '$4,873', change: '+18.3%', positive: true },
];

const SubscriptionBreakdown = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                formatter={(value, entry) => (
                  <span className="text-sm">
                    {entry.payload.name} — <strong>{entry.payload.value}%</strong>
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {stats.map((stat, i) => (
            <div key={i} className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              </div>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBreakdown;