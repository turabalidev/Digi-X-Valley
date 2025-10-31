// src/components/admin/matches/StatsCards.jsx
import React from 'react';
import { Heart, CheckCircle, MessageSquare,Ban } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {iconColor:'text-[#38B2AC]',iconBg: 'bg-[#EFF9F8]', label: 'Total Matches', value: '2,145', icon: Heart, color: 'bg-pink-100' },
    {iconColor:'text-[#22C55E]',iconBg: 'bg-[#F0FDF4]', label: 'Active Chats', value: '2,145', icon: CheckCircle, color: 'bg-green-100' },
    {iconColor:'text-[#EF4444]',iconBg: 'bg-[#FEF2F2]', label: 'Suspended Users', value: '2,145', icon: Ban, color: 'bg-red-100' },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm`}
        >
          <div className={`p-3 rounded-lg ${stat.iconBg}`}>
            <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
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