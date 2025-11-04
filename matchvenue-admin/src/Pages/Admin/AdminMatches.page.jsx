// src/pages/AdminMatches.jsx
import React, { useEffect, useMemo, useState } from 'react';
import StatsCards from '../../Components/Admin/Matches/StatsCards';
import MatchesTable from '../../Components/Admin/Matches/MatchesTable';
import Pagination from '../../Components/Admin/Common/Pagination';
import { Get_Match_Maker_Data } from '../../Api/Admin/match-maker/Match_Maker.api';

const AdminMatches = () => {
  const [matches, setMatches] = useState([]);
  const [summary, setSummary] = useState({ totalMatches: 0, activeChats: 0, disabledChats: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [planFilter, setPlanFilter] = useState('all'); // all | premium | free
  const [stageFilter, setStageFilter] = useState('all'); // all | number
  const [search, setSearch] = useState('');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await Get_Match_Maker_Data();
        // res: { success, message, summary, data: [] }
        if (!mounted) return;
        if (res?.success) {
          setMatches(Array.isArray(res.data) ? res.data : []);
          const s = res?.summary || {};
          setSummary({
            totalMatches: s.totalMatches ?? (Array.isArray(res.data) ? res.data.length : 0),
            activeChats: s.activeChats ?? 0,
            disabledChats: s.disabledChats ?? 0,
          });
          console.log("Summary::::", summary);
          console.log("Matches::::", matches);
          console.log("Total Matches::::", summary.totalMatches);
          console.log("Active Chats::::", summary.activeChats);
          console.log("Disabled Chats::::", summary.disabledChats);
        } else {
          throw new Error(res?.error || 'Failed to fetch match data');
        }
      } catch (err) {
        setError(err.message || 'Unexpected error');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => { mounted = false; };
  }, []);

  // Build dynamic stage options from dataset
  const stageOptions = useMemo(() => {
    const set = new Set();
    matches.forEach((m) => {
      if (typeof m?.sender?.current_stage_number === 'number') set.add(m.sender.current_stage_number);
      if (typeof m?.receiver?.current_stage_number === 'number') set.add(m.receiver.current_stage_number);
    });
    return Array.from(set).sort((a,b) => a - b);
  }, [matches]);

  // Apply filters
  const filteredMatches = useMemo(() => {
    const p = planFilter;
    const st = stageFilter;
    const q = search.trim().toLowerCase();
    return matches.filter((m) => {
      const senderPlan = (m?.sender?.plan_name || 'Free').toLowerCase();
      const receiverPlan = (m?.receiver?.plan_name || 'Free').toLowerCase();
      const senderName = (m?.sender?.name || '').toLowerCase();
      const receiverName = (m?.receiver?.name || '').toLowerCase();
      const senderStage = m?.sender?.current_stage_number;
      const receiverStage = m?.receiver?.current_stage_number;

      const matchPlan = p === 'all' ? true : p === 'premium' ? (senderPlan === 'premium' || receiverPlan === 'premium') : (senderPlan === 'free' || receiverPlan === 'free');
      const matchStage = st === 'all' ? true : (senderStage === Number(st) || receiverStage === Number(st));
      const matchSearch = q === '' ? true : (senderName.includes(q) || receiverName.includes(q));
      return matchPlan && matchStage && matchSearch;
    });
  }, [matches, planFilter, stageFilter, search]);

  const totalItems = filteredMatches.length;
  const displayedMatches = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredMatches.slice(start, start + itemsPerPage);
  }, [filteredMatches, currentPage, itemsPerPage]);

  // Fallback placeholder data while API is not available
  const placeholder = Array.from({ length: 8 }, (_, i) => ({
    id: `match-${i + 1}`,
    sender: { name: `Sender ${i + 1}`, avatar: `https://i.pravatar.cc/40?img=${i % 6}`, type: i % 2 === 0 ? 'Premium' : 'Free' },
    receiver: { name: `Receiver ${i + 1}`, avatar: `https://i.pravatar.cc/40?img=${(i + 1) % 6}`, type: i % 2 !== 0 ? 'Premium' : 'Free' },
    stage: `Stage #${(i % 3) + 1}`,
  }));

  // Note: we paginate and filter using `matches`; placeholder is only used if API returns empty
  const matchesToShow = matches.length ? matches : placeholder;

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">👋 Hello, Admin!</h2>
          <p className="text-xs sm:text-sm text-gray-500">Manage matches and review match-maker activity.</p>
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm text-black">
          <p>{new Date().toLocaleDateString()}</p>
          <p className="text-purple-600 font-bold">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards totalMatches={summary.totalMatches} activeChats={summary.activeChats} disabledChats={summary.disabledChats} />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          placeholder="Search sender/receiver"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          value={planFilter}
          onChange={(e) => { setPlanFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="all">Plan (All)</option>
          <option value="premium">Premium</option>
          <option value="free">Free</option>
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
          value={stageFilter}
          onChange={(e) => { setStageFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="all">Stage (All)</option>
          {stageOptions.map((n) => (
            <option key={n} value={String(n)}>{`Stage #${n}`}</option>
          ))}
        </select>
      </div>

      {/* Matches Table */}
      {error && (
        <div className="mb-4 p-3 rounded-md bg-red-50 text-red-700 text-sm">{error}</div>
      )}
      <MatchesTable matches={displayedMatches} loading={loading} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
};

export default AdminMatches;