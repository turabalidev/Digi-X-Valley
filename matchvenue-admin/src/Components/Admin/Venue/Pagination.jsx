// src/components/admin/Pagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage = 1, totalPages = 10, totalItems = 60, itemsPerPage = 6 }) => {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">{start}</span> to{' '}
        <span className="font-medium">{end}</span> of{' '}
        <span className="font-medium">{totalItems}</span> results
      </p>

      <nav className="flex items-center gap-1">
        <button className="p-2 rounded hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4" />
        </button>
        {Array.from({ length: Math.min(10, totalPages) }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`px-3 py-1 text-sm rounded ${
              p === currentPage ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        ))}
        {totalPages > 10 && <span className="px-2 text-gray-500">...</span>}
        <button className="p-2 rounded hover:bg-gray-100">
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;