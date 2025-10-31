// src/components/admin/analytics/MatchesMessagesChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', matches: 1200, messages: 4500 },
  { day: 'Tue', matches: 1500, messages: 5200 },
  { day: 'Wed', matches: 1800, messages: 6000 },
  { day: 'Thu', matches: 1400, messages: 4800 },
  { day: 'Fri', matches: 2200, messages: 7500 },
  { day: 'Sat', matches: 2800, messages: 8200 },
  { day: 'Sun', matches: 2500, messages: 7000 },
];

const MatchesMessagesChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Matches & Messages Overview</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="matches" fill="#8b5cf6" />
            <Bar dataKey="messages" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MatchesMessagesChart;