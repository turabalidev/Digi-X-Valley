import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.common";
import { Menu, X } from "lucide-react";

import Navbar from "./Navbar.common";


const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar Toggle Button for Mobile */}
      {/* <button
        // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-white shadow-md"
      > */}
      {/* Side-Bar */}
      {/* {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button> */}

      {/* Sidebar Component */}
      {/* <Sidebar /> */}
      {/* <div className=" "> */}
      <Sidebar />
      {/* </div> */}


      {/* Main Content Wrapper */}
      {/* <div className="w-full"> */}


      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto lg:w-full">
        <Navbar />
        <Outlet />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Admin;
