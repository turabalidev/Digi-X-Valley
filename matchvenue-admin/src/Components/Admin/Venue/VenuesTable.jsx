// src/components/admin/venues/VenuesTable.jsx
import React from 'react';
import StarRating from './StarRating';
import { Edit2, Trash2 } from 'lucide-react';

const VenuesTable = ({ venues }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Venue', 'City', 'Safety Rating', 'Status', 'Actions'].map((h) => (
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
            {venues.map((venue, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {/* Venue */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 border-2 border-dashed rounded-xl" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{venue.name}</p>
                      <p className="text-xs text-gray-500 truncate max-w-xs">
                        {venue.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* City */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {venue.city}
                </td>

                {/* Safety Rating */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <StarRating rating={venue.safetyRating} />
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VenuesTable;