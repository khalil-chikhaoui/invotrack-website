import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Dark Mode"
      className="flex-shrink-0 relative flex items-center justify-center h-10 w-10 transition-all duration-300 bg-white 
      border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 
      dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:border-slate-700 
      group outline-none focus:ring-0 focus:ring-brand-500/20"
    >
      {/* Sun Icon (Visible in Dark Mode) */}
      <div className="hidden dark:block group-hover:rotate-12 transition-transform duration-300">
        <HiOutlineSun className="w-5 h-5 text-gray-400 dark:text-white" />
      </div>

      {/* Moon Icon (Visible in Light Mode) */}
      <div className="block dark:hidden group-hover:-rotate-12 transition-transform duration-300">
        <HiOutlineMoon className="w-5 h-5 text-gray-400  dark:text-white" />
      </div>
    </button>
  );
};