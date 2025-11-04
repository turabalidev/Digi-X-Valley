import React from 'react';
import StatusBadge from './StatusBadge';

const ReportsTable = ({ reports, loading, onStatusChange }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">Loading reports...</p>
      </div>
    );
  }

  if (!reports || reports.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No reports found</p>
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
                'Report ID',
                'Reporter',
                'Reported User',
                'Reason',
                'Description',
                'Severity',
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
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {report.id.substring(0, 8)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div>
                      <div className="text-gray-900">{report.reporter_id}</div>
                      <div className="text-gray-500">{report.reporter_plan}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div>
                      <div className="text-gray-900">{report.reported_user_id}</div>
                      <div className="text-gray-500">{report.reported_plan || 'N/A'}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 capitalize">
                  {report.report_reason}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {report.description || 'No description provided'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                  {report.severity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={report.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {report.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onStatusChange(report.id, 'resolved')}
                        className="text-green-600 hover:text-green-900 text-sm font-medium"
                      >
                        Resolve
                      </button>
                      <button
                        onClick={() => onStatusChange(report.id, 'dismissed')}
                        className="text-red-600 hover:text-red-900 text-sm font-medium"
                      >
                        Dismiss
                      </button>
                    </div>
                  )}
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