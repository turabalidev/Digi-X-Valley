import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 text-xs sm:text-sm text-gray-600">
      <p>Showing 1 to 6 of 6 results</p>

      <div className="flex items-center gap-1">
        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md">
          <ChevronLeft className="w-4 h-4" />
        </button>

        {[1, 2, 3, "...", 8, 9, 10].map((n, i) => (
          <button
            key={i}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md ${
              n === 3
                ? "bg-purple-100 text-purple-700 font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {n}
          </button>
        ))}

        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
