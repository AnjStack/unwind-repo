import React, { useState } from "react";
import { FiHome, FiCalendar, FiSettings, FiMenu } from "react-icons/fi";
import { MdEvent } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { label: "Overview", icon: <FiHome className="text-blue-500" /> },
    { label: "Appointments", icon: <FiCalendar className="text-green-500" /> },
    { label: "Manage", icon: <FiSettings className="text-purple-500" /> },
    { label: "Events", icon: <MdEvent className="text-orange-500" /> },
    { label: "Leaves", icon: <FaRegBell className="text-red-500" /> },
    { label: "Quick set", icon: <FiHome className="text-teal-500" /> },
    { label: "My subscription", icon: <FiHome className="text-pink-500" /> },
    { label: "One view", icon: <FiHome className="text-yellow-500" /> },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center p-4 bg-white shadow-md">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-700"
        >
          <FiMenu />
        </button>
        <span className="ml-4 font-bold text-lg text-gray-800">Menu</span>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg py-6 z-50
          w-64 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        {menus.map((menu, i) => (
          <button
            key={i}
            className="group flex items-center gap-4 px-6 py-4 mb-2 rounded-lg 
                       text-lg font-bold text-gray-700 
                       transition-all duration-300 ease-in-out
                       hover:bg-purple-100 hover:text-purple-600 hover:scale-105"
          >
            <span className="text-2xl transition-transform duration-300 ease-in-out group-hover:scale-110">
              {menu.icon}
            </span>
            {menu.label}
          </button>
        ))}
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
