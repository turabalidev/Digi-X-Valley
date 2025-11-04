// src/pages/AdminUsers.jsx
import React, { useEffect, useMemo, useState } from 'react';
import StatsCards from '../../Components/Admin/User/StatsCards';
import UsersTable from '../../Components/Admin/User/UsersTable';
import Pagination from '../../Components/Admin/Common/Pagination';
import { Get_Admin_User_Data } from '../../Api/Common/User/AdminUser.api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [summary, setSummary] = useState({ totalUsers: 0, totalActiveUsers: 0, totalPremiumUsers: 0, totalInactiveUsers: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // fixed page size per requirement
  const [verificationFilter, setVerificationFilter] = useState('all'); // all | verified | unverified
  const [subscriptionFilter, setSubscriptionFilter] = useState('all'); // all | premium | free
  const [statusFilter, setStatusFilter] = useState('all'); // all | active | disabled

  useEffect(() => {
    const fetchAdminUserData = async () => {
      try {
        setLoading(true);
        setError('');
        // Fetch all users; we'll filter and paginate client-side
        const data = await Get_Admin_User_Data();
        console.log("Admin User Data::::", data);
        if (data && data.success) {
          const apiUsers = Array.isArray(data.data) ? data.data : [];
          setUsers(apiUsers);
          const s = data.summary || {};
          setSummary({
            totalUsers: s.totalUsers ?? apiUsers.length,
            totalActiveUsers: s.totalActiveUsers ?? 0,
            totalPremiumUsers: s.totalPremiumUsers ?? 0,
            totalInactiveUsers: s.totalInactiveUsers ?? 0,
          });
        } else {
          throw new Error(data?.error || 'Failed to fetch users');
        }
      } catch (e) {
        setError(e.message || 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };
    fetchAdminUserData();
  }, []);

  // Derived: apply filters
  const filteredUsers = useMemo(() => {
    const v = verificationFilter;
    const s = subscriptionFilter;
    const st = statusFilter;
    return users.filter((u) => {
      const isVerified = Boolean(u?.is_email_verified);
      const plan = (u?.plan_name || 'Free').toLowerCase();
      const isActive = Boolean(u?.is_active);

      const matchVerification = v === 'all' ? true : v === 'verified' ? isVerified : !isVerified;
      const matchSubscription = s === 'all' ? true : s === 'premium' ? plan === 'premium' : plan === 'free';
      const matchStatus = st === 'all' ? true : st === 'active' ? isActive : !isActive;

      return matchVerification && matchSubscription && matchStatus;
    });
  }, [users, verificationFilter, subscriptionFilter, statusFilter]);

  // If backend returns all users without pagination, slice client-side for display only
  const totalItems = filteredUsers.length;
  const displayedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(start, start + itemsPerPage);
  }, [filteredUsers, currentPage, itemsPerPage]);

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
      <StatsCards
        totalUsers={summary.totalUsers}
        totalActiveUsers={summary.totalActiveUsers}
        totalPremiumUsers={summary.totalPremiumUsers}
        totalInactiveUsers={summary.totalInactiveUsers}
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          value={verificationFilter}
          onChange={(e) => { setVerificationFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="all">Verification Status</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          value={subscriptionFilter}
          onChange={(e) => { setSubscriptionFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="all">Subscription</option>
          <option value="premium">Premium</option>
          <option value="free">Free</option>
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="all">Status</option>
          <option value="active">Active</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      {/* Users Table */}
      {error && (
        <div className="mb-4 p-3 rounded-md bg-red-50 text-red-700 text-sm">{error}</div>
      )}
      {loading ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-gray-500 text-sm">Loading users...</div>
      ) : (
        <UsersTable users={displayedUsers} />
      )}

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
};

export default Users;