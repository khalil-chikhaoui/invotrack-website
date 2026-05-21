import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "./HomeIcons";
import { ThemeToggleButton } from "./ThemeToggleButton";
import LanguageSelector from "../LanguageSelector";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleDashboardLogin = () => {
    window.open("https://dashboard.invotrack.de", "_blank");
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href}
      onClick={(e) => handleSmoothScroll(e, href)}
      className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-semibold transition text-sm cursor-pointer whitespace-nowrap"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={(e) => handleSmoothScroll(e, "top")}
          >
            <div className="w-9 h-9 bg-brand-600 dark:bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              I
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              invotrack
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            <div className="flex items-center space-x-6">
               <NavLink href="#features">{t("navbar.features")}</NavLink>
               <NavLink href="#roles">{t("navbar.roles")}</NavLink>
               <NavLink href="#contact">{t("navbar.contact")}</NavLink>
            </div>
            
            {/* Divider */}
            <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800" />

            {/* Language & Theme Controls */}
            <div className="flex items-center gap-3">
               <LanguageSelector 
                 value={i18n.language} 
                 onChange={(lng) => i18n.changeLanguage(lng)}
                 className="w-[140px]" 
                 label="" 
               />
               <ThemeToggleButton />
            </div>
            
            <button
              onClick={handleDashboardLogin}
              className="h-10 bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 text-white px-5 rounded-xl text-sm font-bold transition-all shadow-md shadow-brand-500/20 active:scale-95 whitespace-nowrap"
            >
              {t("navbar.dashboard")}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              <Icons.Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-6 shadow-xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-1">
            <a onClick={(e) => handleSmoothScroll(e, "#features")} className="block text-slate-600 dark:text-slate-300 py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 font-semibold transition">
              {t("navbar.features")}
            </a>
            <a onClick={(e) => handleSmoothScroll(e, "#roles")} className="block text-slate-600 dark:text-slate-300 py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 font-semibold transition">
              {t("navbar.roles")}
            </a>
            <a onClick={(e) => handleSmoothScroll(e, "#contact")} className="block text-slate-600 dark:text-slate-300 py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 font-semibold transition">
              {t("navbar.contact")}
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-4">
              {i18n.language === 'fr' ? 'LANGUE' : i18n.language === 'de' ? 'SPRACHE' : 'LANGUAGE'}
            </p>
            <LanguageSelector
              value={i18n.language} 
              onChange={(lng) => {
                i18n.changeLanguage(lng);
                setIsMenuOpen(false);
              }}
              className="px-2"
              label=""
            />
          </div>

          <button
            onClick={handleDashboardLogin}
            className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-500/25 transition active:scale-[0.98]"
          >
            {t("navbar.dashboard")}
          </button>
        </div>
      )}
    </nav>
  );
}