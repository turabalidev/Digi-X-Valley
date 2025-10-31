import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ label }) => {
  return (
    <button className="flex items-center gap-1 bg-[#FED7AA] hover:bg-[#FDBA74] text-gray-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition whitespace-nowrap">
      {label}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};

export default FilterDropdown;
