// src/pages/AdminDashboard.jsx
import React from 'react';
import StatsCards from '../../Components/Admin/Subscription/StatsCards';
import RevenueTable from '../../Components/Admin/Subscription/RevenueTable';
import Pagination from '../../Components/Admin/Subscription/Pagination';
import RevenueChart from '../../Components/Admin/Subscription/RevenueChart';
import SubscriptionChart from '../../Components/Admin/Subscription/SubscriptionChart';

const Subscription = () => {
  const revenueData = Array.from({ length: 6 }, (_, i) => ({
    user: {
      name: 'Jessica Smith',
      avatar: `https://i.pravatar.cc/40?img=${i % 2 === 0 ? 1 : 3}`,
    },
    plan: 'Premium',
    startDate: '23-12-2000',
    endDate: '23-12-2000',
    amount: '$45',
    status: 'Active',
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
          <option>All users</option>
          <option>Premium</option>
          <option>Free</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>Status</option>
          <option>Active</option>
          <option>Cancelled</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>Month</option>
          <option>October</option>
          <option>September</option>
        </select>
      </div>

      {/* Revenue Table */}
      <RevenueTable data={revenueData} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination currentPage={1} totalPages={10} totalItems={60} itemsPerPage={6} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RevenueChart />
        <SubscriptionChart />
      </div>
    </div>
  );
};

export default Subscription;