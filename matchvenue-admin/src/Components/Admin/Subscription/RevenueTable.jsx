import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const RevenueTable = ({ data = [], loading }) => {  // Provide default empty array
  // Ensure data is always an array
  const subscriptions = Array.isArray(data) ? data : [];

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">Loading subscriptions...</p>
      </div>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No subscriptions found</p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                'User ID',
                'Plan',
                'Start Date',
                'End Date',
                'Matches/Week',
                'Status'
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptions.map((subscription) => (
              <tr key={subscription.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center gap-2">
                    <span>{subscription.user_id}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                      {subscription.plan_type}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {subscription.plan_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(subscription.start_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(subscription.end_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {subscription.matches_per_week}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusDisplay subscription={subscription} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusDisplay = ({ subscription }) => {
  const status = subscription.is_active ? 'active' : subscription.status; // e.g., 'active', 'cancelled', 'expired'

  const config = {
    active: { text: 'Active', icon: CheckCircle, classes: 'bg-green-100 text-green-800' },
    cancelled: { text: 'Cancelled', icon: XCircle, classes: 'bg-red-100 text-red-800' },
    expired: { text: 'Expired', icon: Clock, classes: 'bg-yellow-100 text-yellow-800' },
  };

  const currentConfig = config[status] || config.expired; // Fallback to expired
  const Icon = currentConfig.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${currentConfig.classes}`}>
      <Icon className="w-3 h-3" />
      {currentConfig.text}
    </span>
  );
};

export default RevenueTable;