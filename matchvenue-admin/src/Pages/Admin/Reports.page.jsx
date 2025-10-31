// src/pages/Reports.jsx
import React from 'react';
import ReportsTable from '../../Components/Admin/Reports/ReportsTable';
import Pagination from '../../Components/Admin/Common/Pagination';

const Reports = () => {
  // ---------- Sample data (6 rows) ----------
  const reports = Array.from({ length: 6 }, (_, i) => ({
    id: '3435345',
    reporter: {
      name: 'Jessica Smith',
      avatar: `https://i.pravatar.cc/40?img=${i % 2 === 0 ? 1 : 3}`,
      type: 'Premium',
    },
    reportedUser: {
      name: 'Jessica Smith',
      avatar: 'https://i.pravatar.cc/40?img=2',
      type: 'Free',
    },
    date: '23-12-2000',
    status: i % 3 === 0 ? 'Disabled' : 'Active', // mix of statuses
  }));

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
      {/* ---------- Header ---------- */}
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

      {/* ---------- Status filter ---------- */}
      <div className="mb-4">
        <select className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Disabled</option>
        </select>
      </div>

      {/* ---------- Table ---------- */}
      <ReportsTable reports={reports} />

      {/* ---------- Pagination ---------- */}
      <div className="mt-6">
        <Pagination
          currentPage={1}
          totalPages={10}
          totalItems={60}
          itemsPerPage={6}
        />
      </div>
    </div>
  );
};

export default Reports;