// src/components/admin/users/StatsCards.jsx
import React from 'react';
import { Users, CheckCircle, Diamond, Ban } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { label: 'Total Users', value: '2,145', icon: Users, color: 'bg-white', iconBg: 'bg-[#EFF9F8]', iconColor:'text-[#38B2AC]' },
    { label: 'Verified Users', value: '2,145', icon: CheckCircle, color: 'bg-white', iconBg: 'bg-[#F0FDF4]', iconColor:'text-[#22C55E]' },
    { label: 'Premium Users', value: '2,145', icon: Diamond, color: 'bg-white', iconBg: 'bg-[#FEFCE8]', iconColor:'text-[#EAB308]' },
    { label: 'Suspended Users', value: '2,145', icon: Ban, color: 'bg-white', iconBg: 'bg-[#FEF2F2]', iconColor:'text-[#EF4444]' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-8 ">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`${stat.color} rounded-xl p-5 flex items-center gap-4 shadow-sm`}
        >
          <div className={`p-3 rounded-lg ${stat.iconBg}`}>
            <stat.icon className={`${stat.iconColor} w-6 h-6`} />
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