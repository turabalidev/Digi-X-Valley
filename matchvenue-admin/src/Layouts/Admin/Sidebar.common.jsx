import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Heart,
  FileText,
  CreditCard,
  BarChart2,
  MapPin,
  FileLock,
  Menu,
  X,
} from "lucide-react";
import Logo from "/Common/image.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Matches & Chats", icon: Heart, path: "/matches" },
    { name: "Reports", icon: FileText, path: "/reports" },
    { name: "Subscriptions", icon: CreditCard, path: "/subscriptions" },
    { name: "Analytics", icon: BarChart2, path: "/analytics" },
    { name: "Venues", icon: MapPin, path: "/venues" },
    { name: "Content & Legal", icon: FileLock, path: "/contentLegal" },
    { name: "Admin Settings", icon: FileLock, path: "/adminSettings" },
  ];

  return (
    <>
      {/* Mobile Navbar Header */}
      <div className="flex justify-center items-start px-4 py-3 md:hidden absolute mt-4 gap-2 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-md bg-[#FFF1EA] hover:bg-[#FFD7C2] transition "
        >
          {isOpen ? (
              <X className="w-4 h-4 text-gray-700 z-50" />
            ) : (
                <Menu className="w-4 h-4 text-gray-700" />
            )}
        </button>
            <img src={Logo} alt="Logo" className="w-6 h-6" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 top-0 left-0 h-full md:h-screen bg-white  flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-4 ">
          <img src={Logo} alt="Logo" className="  w-12" />
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 flex flex-col gap-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4EAFF] text-[#7622BF] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
              onClick={() => setIsOpen(false)} // Close menu on mobile when clicking link
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer (optional logout area) */}
        {/* <div className="mt-auto border-t p-4 bg-[#FFF1EA] text-[#7622BF] font-semibold text-sm flex items-center gap-2 cursor-pointer hover:bg-[#FFE6D6] transition">
          <FileText className="w-4 h-4" />
          Logout
        </div> */}
      </div>

      {/* Overlay (for mobile when sidebar open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden "
          onClick={() => setIsOpen(false)}
          ></div>
        )}
        {console.log("Overlay clicked", isOpen)}
    </>
  );
};

export default Sidebar;
