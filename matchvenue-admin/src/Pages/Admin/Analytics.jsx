// src/pages/AdminAnalytics.jsx
import React from 'react';
import StatsCards from '../../Components/Admin/Subscription/StatsCards';
import ActiveUsersChart from '../../Components/Admin/Analytics/ActiveUsersChart';
import MatchesMessagesChart from '../../Components/Admin/Analytics/MatchesMessagesChart';
import RevenueGrowthChart from '../../Components/Admin/Analytics/RevenueGrowthChart';
import SubscriptionBreakdown from '../../Components/Admin/Analytics/SubscriptionBreakdown';

const Analytics = () => {
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
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>Airplane</option>
          <option>Ground</option>
        </select>
        <div className="flex-1"></div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveUsersChart />
        <MatchesMessagesChart />
        <RevenueGrowthChart />
        <SubscriptionBreakdown />
      </div>
    </div>
  );
};

export default Analytics;