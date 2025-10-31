import { useLocation } from "react-router-dom";
import { Search, Bell, Settings, Info } from "lucide-react";

const labels = {
  "": "Dashboard",
  dashboard: "Dashboard",
  users: "Users",
  matches: "Matches & Chats",
  reports: "Reports",
  subscriptions: "Subscriptions",
  analytics: "Analytics",
  venues: "Venues",
  legal: "Content & Legal"
};

const formatSegment = (segment) => {
  const normalized = segment.toLowerCase();
  if (labels[normalized]) return labels[normalized];
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Navbar = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = [labels[""]];

  segments.forEach((segment) => {
    breadcrumbs.push(formatSegment(segment));
  });

  const pageTitle = breadcrumbs[breadcrumbs.length - 1] || labels[""];

  return (
    <header className="border-b border-gray-100 bg-white px-4 py-4 sm:px-6 z-10">
      <div className="flex flex-row gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="hidden md:flex flex-col gap-1">
          <span className="text-sm text-gray-400">{breadcrumbs.join(" / ")}</span>
          <h1 className="text-2xl font-semibold text-[#6A5AE0] sm:text-3xl">{pageTitle}</h1>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:w-auto ">
          <div className="w-48 flex md:flex-wrap items-center justify-end ml-20 md:ml-0 gap-4 rounded-full bg-[#FBD5B5] px-4 py-2 shadow-sm sm:max-w-xl sm:flex-nowrap lg:w-[418px]">
            <div className="flex justify-center items-center gap-2 w-4 md:w-[52%] bg-white p-2 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search by name or id"
              className=" bg-blue-300 hidden md:flex md:min-w-0 flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none"
            />
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <button
                type="button"
                aria-label="Notifications"
                className="rounded-full p-1.5 transition hover:bg-white/40"
              >
                <Bell className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Settings"
                className="rounded-full p-1.5 transition hover:bg-white/40"
              >
                <Settings className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Support"
                className="rounded-full p-1.5 transition hover:bg-white/40"
              >
                <Info className="h-5 w-5" />
              </button>
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="https://i.pravatar.cc/80?img=47"
                  alt="Profile avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
