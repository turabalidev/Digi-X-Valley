import React, { useEffect, useState } from 'react';
import { Users, CheckCircle, DollarSign, XCircle, Loader2 } from 'lucide-react';
import { Get_Subscription_Analytics } from '../../../Api/Admin/subscription/Subscription.api';

const StatsCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([
    { label: 'Active Plans', value: '0', icon: CheckCircle, color: 'bg-green-100' },
    { label: 'Expired Plans', value: '0', icon: Users, color: 'bg-gray-100' },
    { label: 'Total Revenue', value: '$0', icon: DollarSign, color: 'bg-blue-100' },
    { label: 'Cancelled Plans', value: '0', icon: XCircle, color: 'bg-red-100' },
  ]);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await Get_Subscription_Analytics();
      if (response.success) {
        const data = response.data;
        setStats([
          { label: 'Active Plans', value: data.activePlans.toLocaleString(), icon: CheckCircle, color: 'bg-green-100' },
          { label: 'Expired Plans', value: data.expiredPlans.toLocaleString(), icon: Users, color: 'bg-gray-100' },
          { label: 'Total Revenue', value: `$${data.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'bg-blue-100' },
          { label: 'Cancelled Plans', value: data.cancelledPlans.toLocaleString(), icon: XCircle, color: 'bg-red-100' },
        ]);
      }
    } catch (error) {
      console.error('Failed to load subscription analytics:', error);
      setError('Failed to load stats');
      setStats([
        { label: 'Active Plans', value: '-', icon: CheckCircle, color: 'bg-gray-50' },
        { label: 'Expired Plans', value: '-', icon: Users, color: 'bg-gray-50' },
        { label: 'Total Revenue', value: '-', icon: DollarSign, color: 'bg-gray-50' },
        { label: 'Cancelled Plans', value: '-', icon: XCircle, color: 'bg-gray-50' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm ${loading ? 'opacity-75' : ''}`}
        >
          <div className={`p-3 rounded-full ${loading ? 'bg-gray-100' : 'bg-white'}`}>
            {loading ? (
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
            ) : (
              <stat.icon className={`w-6 h-6 ${error ? 'text-gray-400' : 'text-gray-700'}`} />
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className={`text-2xl font-bold ${error ? 'text-gray-400' : 'text-gray-900'}`}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
      {error && (
        <div className="col-span-full text-center text-sm text-red-600 mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default StatsCards;