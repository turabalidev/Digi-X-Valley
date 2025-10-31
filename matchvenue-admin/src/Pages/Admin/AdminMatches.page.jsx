// src/pages/AdminMatches.jsx
import React from 'react';
import StatsCards from '../../Components/Admin/Matches/StatsCards';
import MatchesTable from '../../Components/Admin/Matches/MatchesTable';
import Pagination from '../../Components/Admin/Common/Pagination';

const AdminMatches = () => {
  const matches = Array.from({ length: 8 }, (_, i) => ({
    id: `3435345`,
    sender: {
      name: 'Jessica Smith',
      avatar: `https://i.pravatar.cc/40?img=${i % 2 === 0 ? 1 : 3}`,
      type: 'Premium',
    },
    receiver: {
      name: 'Jessica Smith',
      avatar: 'https://i.pravatar.cc/40?img=2',
      type: 'Free',
    },
    stage: 'Stage #1 (Meet & Greet)',
  }));

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
     {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            👋 Hello, Admin!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Here's what's happening on YoureUp today.
          </p>
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm text-black">
          <p>Thursday, October 16, 2025</p>
          <p className="text-purple-600 font-bold">03:02 PM</p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>Match status</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>Time range</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>User type</option>
          <option>Premium</option>
          <option>Free</option>
        </select>
      </div>

      {/* Matches Table */}
      <MatchesTable matches={matches} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination currentPage={1} totalPages={10} totalItems={80} itemsPerPage={8} />
      </div>
    </div>
  );
};

export default AdminMatches;