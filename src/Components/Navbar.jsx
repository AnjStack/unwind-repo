
import { FiSearch, FiBell } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-[88px] w-full flex items-center justify-between px-8 bg-white border-b border-gray-200 shadow-sm">
      {/* Left - Logo + Text */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          U
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-gray-800 font-bold text-3xl">Unwind</span>
          <span className="text-lg text-gray-400">Connecting emotions</span>
        </div>
      </div>

      {/* Right - Icons + Profile */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <button className="relative group text-gray-500 hover:text-purple-600 transition-colors duration-300">
          <FiSearch size={24} />
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>

        {/* Notification Icon */}
        <button className="relative group text-gray-500 hover:text-purple-600 transition-colors duration-300">
          <FiBell size={24} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>

        {/* Profile */}
        <div className="relative group flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-purple-600 transition-all duration-300"
          />
          <span className="text-base md:text-lg font-bold text-gray-700 flex items-center gap-1">
            Aashif Af <MdKeyboardArrowDown size={22} />
          </span>
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
