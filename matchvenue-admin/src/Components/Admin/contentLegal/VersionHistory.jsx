// src/components/admin/terms/VersionHistory.jsx
import React from 'react';

const VersionHistory = () => {
  const versions = [
    { name: 'Privacy Policy', date: 'Oct 10, 2025, 09:00 AM' },
    { name: 'Terms & Conditions', date: 'May 15, 2023, 02:30 PM' },
    { name: 'Privacy Policy', date: 'Jan 01, 2023, 10:00 AM' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap- g4 mb-8">
      {versions.map((v, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-sm transition"
        >
          <p className="text-sm font-medium text-gray-900">{v.name}</p>
          <p className="text-xs text-gray-500 mt-1">{v.date}</p>
        </div>
      ))}
    </div>
  );
};

export default VersionHistory;