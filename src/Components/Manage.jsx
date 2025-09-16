import React from "react";
import { FiLock, FiTag, FiClock, FiImage } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";

const Manage = () => {
  const cards = [
    { label: "Services", icon: <FiLock /> },
    { label: "Rates", icon: <FiLock /> },
    { label: "Discounts", icon: <FiTag /> },
    { label: "Timings", icon: <FiClock /> },
    { label: "Language", icon: <MdLanguage /> },
    { label: "Specialization", icon: <FaUserMd /> },
    { label: "Edit clinic details", icon: <FiLock /> },
    { label: "Add Clinic photos", icon: <FiImage /> },
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        Manage
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative border border-gray-200 rounded-2xl h-48 flex items-center justify-center text-center text-gray-700 cursor-pointer 
                       transition-all duration-500 ease-in-out
                       hover:shadow-2xl hover:border-purple-400 hover:bg-purple-50 hover:scale-105"
          >
            {/* Text in center */}
            <span className="text-xl md:text-2xl font-bold">{card.label}</span>

            {/* Icon bottom-right */}
            <span className="absolute bottom-4 right-4 text-4xl text-purple-500 
                             transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-purple-600">
              {card.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
