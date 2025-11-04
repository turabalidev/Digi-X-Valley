import React, { useEffect, useState } from 'react';
import ReportsTable from '../../Components/Admin/Reports/ReportsTable';
import Pagination from '../../Components/Admin/Common/Pagination';
import { Get_Reports_Data, Update_Report_Status } from '../../Api/Admin/reports/Reports.api';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [meta, setMeta] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0
  });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ status: 'pending' });

  useEffect(() => {
    loadReports();
  }, [filters.status, meta.currentPage]);

  const loadReports = async () => {
    try {
      setLoading(true);
      const res = await Get_Reports_Data({
        page: meta.currentPage,
        limit: meta.itemsPerPage,
        ...filters
      });
      const { data } = res;
      setReports(data || []);
      setMeta(prev => ({
        ...prev,
        totalItems: data?.length || 0,
        totalPages: Math.ceil((data?.length || 0) / meta.itemsPerPage)
      }));
    } catch (err) {
      console.error('Failed to load reports', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (reportId, newStatus) => {
    try {
      await Update_Report_Status(reportId, newStatus);
      loadReports(); // Refresh the reports list
    } catch (err) {
      console.error('Failed to update report status', err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setMeta(prev => ({ ...prev, currentPage: 1 })); // Reset to first page
  };

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
      {/* ---------- Header ---------- */}
      {/* ---------- Header ---------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Reports Management
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Review and manage user reports
          </p>
        </div>
      </div>

      {/* ---------- Status filter ---------- */}
      <div className="mb-4">
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="dismissed">Dismissed</option>
        </select>
      </div>

      {/* ---------- Table ---------- */}
      <ReportsTable
        reports={reports}
        loading={loading}
        onStatusChange={handleStatusChange}
      />

      {/* ---------- Pagination ---------- */}
      <div className="mt-6">
        <Pagination
          currentPage={meta.currentPage}
          totalPages={meta.totalPages}
          totalItems={meta.totalItems}
          itemsPerPage={meta.itemsPerPage}
          onPageChange={(page) => setMeta(prev => ({ ...prev, currentPage: page }))}
        />
      </div>
    </div>
  );
};

export default Reports;