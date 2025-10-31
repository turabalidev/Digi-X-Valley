// src/components/admin/ReportsTable.jsx
import React from 'react';
import UserCell from './UserCell';
import StatusBadge from './StatusBadge';
import { MoreHorizontal } from 'lucide-react';

const ReportsTable = ({ reports }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                'Report ID',
                'Reporter',
                'Reported User',
                'Date',
                'Status',
                'Actions',
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
            {reports.map((r, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ID: {r.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <UserCell user={r.reporter} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <UserCell user={r.reportedUser} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {r.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={r.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    aria-label="More actions"
                    className="text-gray-400 hover:text-gray-600"
                  >
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

export default ReportsTable;