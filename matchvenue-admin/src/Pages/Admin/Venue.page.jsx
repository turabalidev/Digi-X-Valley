// src/pages/AdminVenues.jsx
import React from 'react';
import StatsCards from '../../Components/Admin/Subscription/StatsCards';
import VenuesTable from '../../Components/Admin/Venue/VenuesTable';
import Pagination from '../../Components/Admin/Common/Pagination';


const Venue = () => {
  const venues = Array.from({ length: 6 }, (_, i) => ({
    name: 'Central Park Cafe',
    description: 'Cozy cafe with outdoor seating and live music',
    city: 'Premium',
    safetyRating: 4.5,
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

      {/* Filters + Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500">
          <option>All Cities</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>

        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add new venue
        </button>
      </div>

      {/* Venues Table */}
      <VenuesTable venues={venues} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination currentPage={1} totalPages={10} totalItems={60} itemsPerPage={6} />
      </div>
    </div>
  );
};

export default Venue;