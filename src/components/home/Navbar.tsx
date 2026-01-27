import React, { useState } from "react";
import { Icons } from "./HomeIcons";
import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ New Handler: Smooth Scroll with Offset
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    // 1. Handle "Back to Top" (Logo)
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Handle Section Links
    const element = document.querySelector(targetId);
    if (element) {
      // Offset calculation: Navbar height (~64px) + extra padding (16px)
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDashboardLogin = () => {
    window.open("https://dashboard.invotrack.de", "_blank");
  };

  // ✅ Updated NavLink Component
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href}
      onClick={(e) => handleSmoothScroll(e, href)}
      className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition text-sm cursor-pointer"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Smooth Scroll to Top */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={(e) => handleSmoothScroll(e, "top")}
          >
            <div className="w-8 h-8 bg-brand-600 dark:bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">
              I
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              invotrack
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#roles">Roles</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggleButton />
            <button
              onClick={handleDashboardLogin}
              className="bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white px-5 py-2.5 rounded-md text-sm font-medium transition shadow-lg shadow-slate-900/20 dark:shadow-brand-500/20"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggleButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              <Icons.Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          {/* Mobile Links need the click handler too */}
          <a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, "#features")}
            className="block text-slate-600 dark:text-slate-300 py-2"
          >
            Features
          </a>
          <a 
            href="#roles" 
            onClick={(e) => handleSmoothScroll(e, "#roles")}
            className="block text-slate-600 dark:text-slate-300 py-2"
          >
            Roles
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="block text-slate-600 dark:text-slate-300 py-2"
          >
            Contact
          </a>
          <button
            onClick={handleDashboardLogin}
            className="w-full bg-brand-600 text-white py-3 rounded-lg font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}