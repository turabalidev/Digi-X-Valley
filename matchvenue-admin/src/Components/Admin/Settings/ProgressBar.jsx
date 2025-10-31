// src/components/admin/settings/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ value, max = 100, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-500">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden">
        <div
          className="h-full bg-[#F9E4D4] flex items-center justify-end pr-3 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        >
          <span className="text-sm font-medium text-gray-700">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;