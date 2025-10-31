import React from "react";
import {
  Users, Heart, Star, UserCheck, FileText, CreditCard, Bell, MapPin, FileEdit,
} from "lucide-react";
import StatCard from "../../Components/Admin/Common/StatCard.common";
import QuickActionCard from "../../Components/Admin/Dashboard/QuickAction_Card.component";
import LineChart from "../../Components/Admin/Dashboard/Line_Chart.component";
import PieChart from "../../Components/Admin/Dashboard/PieChart.component";

const Dashboard = () => {
  const stats = [
    { label: "Active Users", value: "12.4K", icon: Users, bg: "bg-[#FFF1EA]", color: "text-[#38B2AC]" },
    { label: "Matches Today", value: "3,280", icon: Heart, bg: "bg-[#FFF1EA]", color: "text-[#ED64A6]" },
    { label: "Premium Subs", value: "2,145", icon: Star, bg: "bg-[#FFF1EA]", color: "text-[#CA8A04]" },
  ];

  const quickActions = [
    { title: "Verify Users", icon: UserCheck },
    { title: "Review Reports", icon: FileText },
    { title: "Manage Subscriptions", icon: CreditCard },
    { title: "Send Notification", icon: Bell },
    { title: "Add Venue", icon: MapPin },
    { title: "Edit Content/FAQ", icon: FileEdit },
  ];

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
          <LineChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
