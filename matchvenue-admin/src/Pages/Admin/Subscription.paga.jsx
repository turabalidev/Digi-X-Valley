import React, { useState, useEffect } from 'react';
import StatsCards from '../../Components/Admin/Subscription/StatsCards';
import RevenueTable from '../../Components/Admin/Subscription/RevenueTable';
import RevenueChart from '../../Components/Admin/Subscription/RevenueChart';
import SubscriptionChart from '../../Components/Admin/Subscription/SubscriptionChart';
import Pagination from '../../Components/Admin/Common/Pagination';
import { Get_All_Plans, Get_Active_Subscriptions } from '../../Api/Admin/subscription/Subscription.api';


const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [meta, setMeta] = useState({
    page: 1,
    limit: 10,
    total: 0
  });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    plan: 'all',
    status: 'all',
    month: new Date().getMonth() + 1
  });
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlans();
  }, []);

  useEffect(() => {
    loadSubscriptions();
  }, [filters, meta.page]);

  const loadPlans = async () => {
    try {
      const response = await Get_All_Plans();
      console.log("Plans Response:", response);
      if (response.success) {
        setPlans(response.data || []);
      }
    } catch (error) {
      console.error('Failed to load plans:', error);
    }
  };

  const loadSubscriptions = async () => {
    try {
      setLoading(true);
      const response = await Get_Active_Subscriptions({
        page: meta.page,
        limit: meta.limit,
        ...filters,
      });
      console.log("Response:", response);
      // Ensure we handle both direct array response and nested data response
      const subscriptionsData = Array.isArray(response) ? response : 
                               Array.isArray(response.data) ? response.data :
                               response.data?.items || [];
      
      setSubscriptions(subscriptionsData);
      setMeta(prev => ({
        ...prev,
        total: response.total || subscriptionsData.length || 0
      }));
    } catch (error) {
      console.error('Failed to load subscriptions:', error);
      setSubscriptions([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setMeta(prev => ({ ...prev, page: 1 }));
  };

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Subscription Management
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Monitor and manage user subscriptions
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          name="plan"
          value={filters.plan}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Plans</option>
          {plans.map(plan => (
            <option key={plan.id} value={plan.plan_name.toLowerCase()}>
              {plan.plan_name}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
          <option value="expired">Expired</option>
        </select>

        <select
          name="month"
          value={filters.month}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Months</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>      {/* Revenue Table */}
      <RevenueTable
        data={subscriptions}
        loading={loading}
      />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          currentPage={meta.page}
          totalPages={Math.ceil(meta.total / meta.limit)}
          totalItems={meta.total}
          itemsPerPage={meta.limit}
          onPageChange={(page) => setMeta(prev => ({ ...prev, page }))}
        />
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