// src/components/admin/users/UsersTable.jsx
import React from 'react';
import { MoreHorizontal, CheckCircle } from 'lucide-react';

const Badge = ({ type, children }) => {
  const styles = {
    verified: 'bg-green-100 text-green-800',
    premium: 'bg-yellow-100 text-yellow-800',
    free: 'bg-gray-100 text-gray-800',
    active: 'bg-green-100 text-green-800',
    disabled: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}>
      {type === 'verified' && <CheckCircle className="w-3 h-3" />}
      {children}
    </span>
  );
};

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Email', 'Verification', 'Subscription', 'Status', 'Actions'].map((h) => (
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
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border border-gray-200"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge type="verified">Verified</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge type={user.subscription.toLowerCase()}>
                    {user.subscription}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge type={user.status.toLowerCase()}>
                    {user.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;