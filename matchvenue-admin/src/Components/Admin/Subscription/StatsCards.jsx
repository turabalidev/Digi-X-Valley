// src/components/admin/StatsCards.jsx
import React from 'react';
import { Users, CheckCircle, DollarSign, XCircle } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { label: 'Expired Plans', value: '2,145', icon: Users, color: 'bg-gray-100' },
    { label: 'Active Plans', value: '2,145', icon: CheckCircle, color: 'bg-green-100' },
    { label: 'Total Revenue', value: '$18,920', icon: DollarSign, color: 'bg-blue-100' },
    { label: 'Cancelled Plans', value: '345', icon: XCircle, color: 'bg-red-100' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm`}
        >
          <div className="p-3 rounded-full bg-white">
            <stat.icon className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;