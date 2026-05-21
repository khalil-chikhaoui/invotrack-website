import { useTranslation } from "react-i18next";
import { Icons } from "./HomeIcons";

export default function StatsTeaser() {
  const { t } = useTranslation();

  return (
    <section id="roles" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
            {t("stats.badge")}
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            {t("stats.titleLine1")} <br />
            <span className="text-brand-600 dark:text-brand-500">{t("stats.titleLine2")}</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            {t("stats.description")}
          </p>

          <ul className="space-y-4">
            {[0, 1, 2].map((idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Icons.Check />
                </div>
                {t(`stats.list.${idx}`)}
              </li>
            ))}
          </ul> 
        </div>

        {/* Right Visual: Modern Insights Stack */}
        <div className="relative order-1 lg:order-2 py-10">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Main Card */}
          <div className="relative bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl z-20">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t("stats.visual.revenue")}</p>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">$42,850.00</h4>
              </div>
              <div className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                +12.5%
              </div>
            </div>

            {/* Sparkline Visual */}
            <div className="h-32 w-full flex items-end gap-1.5">
              {[30, 45, 35, 60, 50, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-brand-600/10 dark:bg-brand-500/10 rounded-t-sm relative group overflow-hidden h-full">
                  <div 
                    style={{ height: `${h}%` }} 
                    className="absolute bottom-0 w-full bg-brand-600 dark:bg-brand-500 rounded-t-sm transition-all duration-1000 group-hover:bg-violet-500"
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Small Card 1 (Top Left) */}
          <div className="absolute -top-4 -left-4 md:-left-12 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl z-30 animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                <Icons.Box />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{t("stats.visual.items")}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">1,240</p>
              </div>
            </div>
          </div>

          {/* Floating Small Card 2 (Bottom Right) */}
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-slate-900 dark:bg-brand-600 p-4 rounded-2xl shadow-xl z-30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Icons.Users />
              </div>
              <div className="pr-4">
                <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">{t("stats.visual.active")}</p>
                <p className="text-sm font-bold text-white">48 {t("stats.visual.clients")}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}