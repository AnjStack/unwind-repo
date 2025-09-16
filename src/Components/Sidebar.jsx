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
      <div className="md:hidden flex items-center h-12 px-4 bg-white shadow-sm sticky top-0 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-gray-700 focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white shadow-lg z-50 w-64 h-full transform
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:flex md:flex-col md:top-0`}
      >
        <div className="py-4 flex flex-col mt-4 md:mt-2">
          {menus.map((menu, i) => (
            <button
              key={i}
              className="group flex items-center gap-4 px-6 py-3 mb-2 rounded-lg 
                         text-lg font-semibold text-gray-700 transition-all duration-200
                         hover:bg-purple-100 hover:text-purple-600 hover:scale-105"
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                {menu.icon}
              </span>
              <span className="whitespace-nowrap">{menu.label}</span>
            </button>
          ))}
        </div>
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
