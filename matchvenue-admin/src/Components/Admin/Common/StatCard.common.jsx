import React from "react";

const StatCard = ({ icon: Icon, label, value, bg, color }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl px-4 py-4 sm:px-5 sm:py-6 flex items-center gap-3 sm:gap-4 border border-gray-100 hover:shadow-md transition">
      <div className={`p-2 sm:p-3 rounded-lg ${bg}`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
      </div>
      <div>
        <p className="text-xs sm:text-sm text-gray-500">{label}</p>
        <h3 className="text-base sm:text-xl font-semibold text-gray-800">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
