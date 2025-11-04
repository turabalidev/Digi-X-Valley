import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage = 1, itemsPerPage = 10, totalItems = 0, onPageChange = () => {} }) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const clampedCurrent = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = totalItems === 0 ? 0 : (clampedCurrent - 1) * itemsPerPage + 1;
  const endIndex = Math.min(clampedCurrent * itemsPerPage, totalItems);

  const goToPage = (page) => {
    const next = Math.min(Math.max(1, page), totalPages);
    if (next !== clampedCurrent) onPageChange(next);
  };

  const buildPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    const siblings = 1;
    const left = Math.max(2, clampedCurrent - siblings);
    const right = Math.min(totalPages - 1, clampedCurrent + siblings);
    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const pages = buildPages();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 text-xs sm:text-sm text-gray-600">
      <p>
        {totalItems === 0 ? "No results" : `Showing ${startIndex} to ${endIndex} of ${totalItems} results`}
      </p>

      <div className="flex items-center gap-1">
        <button
          className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md disabled:opacity-40"
          onClick={() => goToPage(clampedCurrent - 1)}
          disabled={clampedCurrent === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((n, i) => (
          <button
            key={`${n}-${i}`}
            disabled={n === "..."}
            onClick={() => typeof n === "number" && goToPage(n)}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md ${
              n === clampedCurrent
                ? "bg-purple-100 text-purple-700 font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {n}
          </button>
        ))}

        <button
          className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md disabled:opacity-40"
          onClick={() => goToPage(clampedCurrent + 1)}
          disabled={clampedCurrent === totalPages}
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
