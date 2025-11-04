import React, { useEffect, useState } from "react";
import {
  Users, Heart, Star, UserCheck, FileText, CreditCard, Bell, MapPin, FileEdit,
} from "lucide-react";


// api
// import { Get_Count_Dashboard_Data } from "../../Api/Admin/Dashboard/Dashboard.api";
// import { Get_Count_Dashboard_Data } from '../../Api/Admin/Dashboard/'
import { Get_Count_Dashboard_Data } from "../../Api/Admin/Dashboard/Dashboard.api";
// import { Get_Count_Dashboard_Data } from "../../Api/Admin/Dashboard/Dashboard.api";

// Components
import StatCard from "../../Components/Admin/Common/StatCard.common";
import QuickActionCard from "../../Components/Admin/Dashboard/QuickAction_Card.component";
import LineChart from "../../Components/Admin/Dashboard/Line_Chart.component";
import PieChart from "../../Components/Admin/Dashboard/PieChart.component";


// Auth Context
// import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  // const { user } = useAuth();
  // console.log("Dashboard User::::", user);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await Get_Count_Dashboard_Data();
        if (data?.success) {
          setDashboardData(data);
        } else {
          setError(data?.message || 'Failed to fetch dashboard data');
        }
        console.log("Dashboard Data::::", data);
      } catch (err) {
        setError('An error occurred while fetching dashboard data');
        console.error("Dashboard Error::::", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);



  // Helper function to safely get numeric values from API response
  const getSafeValue = (value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  const stats = [
    {
      label: "Active Users",
      value: getSafeValue(dashboardData?.data?.totalActiveUsers).toLocaleString(),
      icon: Users,
      bg: "bg-[#FFF1EA]",
      color: "text-[#38B2AC]"
    },
    {
      label: "Matches Today",
      value: getSafeValue(dashboardData?.data?.matchedUsersCount).toLocaleString(),
      icon: Heart,
      bg: "bg-[#FFF1EA]",
      color: "text-[#ED64A6]"
    },
    {
      label: "Premium Subs",
      value: getSafeValue(dashboardData?.data?.subscriptions?.premium?.count).toLocaleString(),
      icon: Star,
      bg: "bg-[#FFF1EA]",
      color: "text-[#CA8A04]"
    },
  ];

  const quickActions = [
    { title: "Verify Users", icon: UserCheck },
    { title: "Review Reports", icon: FileText },
    { title: "Manage Subscriptions", icon: CreditCard },
    { title: "Send Notification", icon: Bell },
    { title: "Add Venue", icon: MapPin },
    { title: "Edit Content/FAQ", icon: FileEdit },
  ];

  if (loading) {
    return (
      <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-[#FFF1EA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#38B2AC] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-[#FFF1EA] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Dashboard</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#38B2AC] text-white px-4 py-2 rounded-lg hover:bg-[#2C7A7B] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    // <div className="bg-red-300 h-screen">
    //   This is Dashboard page
    // </div>
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-[#FFF1EA]">
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

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h3 className="text-base sm:text-lg font-bold text-black mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickActions.map((item, i) => (
            <QuickActionCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-semibold text-black mb-4 text-sm sm:text-base">
          Analytics Snapshot
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LineChart dailyActiveUsers={dashboardData?.data.dailyActiveUsers} />
          <PieChart subscriptions={dashboardData?.data.subscriptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
