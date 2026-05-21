import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
              invotrack
            </span>
          </div>
          <p className="text-sm font-medium text-brand-600 dark:text-brand-500 mb-1">
            dashboard.invotrack.de
          </p>
          <p className="text-sm leading-relaxed italic">
            {t("footer.tagline")}
          </p>
        </div> 

        {/* Product Links */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-widest">
            {t("footer.sections.product.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a 
                href="#features" 
                onClick={(e) => handleSmoothScroll(e, "#features")}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {t("footer.sections.product.features")}
              </a>
            </li>
            <li>
              <a 
                href="#roles" 
                onClick={(e) => handleSmoothScroll(e, "#roles")}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {t("footer.sections.product.roles")}
              </a>
            </li>
            <li>
              <button 
                onClick={() => window.open("https://dashboard.invotrack.de", "_blank")}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {t("footer.sections.product.dashboard")}
              </button>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-widest">
            {t("footer.sections.company.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t("footer.sections.company.about")}</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t("footer.sections.company.privacy")}</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t("footer.sections.company.terms")}</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>&copy; {new Date().getFullYear()} Invotrack. {t("footer.rights")}</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition flex items-center gap-1"
        >
          {t("footer.backToTop")} ↑
        </button>
      </div>
    </footer>
  );
}