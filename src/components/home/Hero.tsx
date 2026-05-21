import { useTranslation } from "react-i18next";
import { Icons } from "./HomeIcons";

export default function Hero() {
  const { t } = useTranslation();

  const handleDashboardLogin = () => window.open("https://dashboard.invotrack.de/signin", "_blank");
  const handleDashboardSignup = () => window.open("https://dashboard.invotrack.de/signup", "_blank");

  return (
    <section className="relative pt-20 pb-20 lg:pt-26 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-brand-200 dark:bg-brand-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40"></div>
      </div> 

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          {t("hero.badge")}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          {t("hero.titleLine1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600 dark:from-brand-400 dark:to-violet-400">
            {t("hero.titleLine2")}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleDashboardSignup}
            className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 dark:hover:bg-brand-500 transition shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
          >
            {t("hero.ctaCreate")} <Icons.ArrowRight />
          </button>
          <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center">
            {t("hero.ctaDemo")}
          </button>
        </div>

       {/* --- DASHBOARD MOCKUP --- */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-6xl group perspective-1000">
          <div className="rounded-xl bg-slate-900 dark:bg-slate-800 p-2 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 transform transition-transform duration-500 hover:scale-[1.005]">
            <div className="rounded-lg bg-slate-50 dark:bg-slate-950 overflow-hidden relative aspect-[16/10] border border-slate-200 dark:border-slate-800">
              
              <div className="absolute inset-0 flex flex-col md:flex-row font-sans">
                {/* --- SIDEBAR --- */}
                <div className="w-16 md:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hidden md:flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center gap-3 mb-8 px-2">
                       <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                       <div className="h-4 w-24 bg-slate-800 dark:bg-slate-200 rounded-md"></div>
                    </div>

                    <div className="space-y-1">
                      {[t("mock.nav.dashboard"), t("mock.nav.clients"), t("mock.nav.items")].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-l-4 border-brand-600">
                          <div className="w-5 h-5 rounded bg-brand-200 dark:bg-brand-800"></div>
                          <span className="text-sm font-medium">{t("mock.nav.invoices")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- MAIN CONTENT --- */}
                <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 text-left">
                  {/* Top Bar */}
                  <div className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
                    <div className="hidden lg:flex items-center w-96 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">
                       <div className="w-4 h-4 bg-slate-300 rounded-full mr-3"></div>
                       <div className="h-2 w-24 bg-slate-300 rounded"></div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-brand-600"></div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 overflow-hidden flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t("mock.pageTitle")}</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-wrap gap-4 items-end">
                       <div className="h-10 px-4 bg-brand-600 rounded-lg flex items-center gap-2 text-white font-medium shadow-lg shadow-brand-500/20 ml-auto">
                          <span>+</span> {t("mock.newBtn")}
                       </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1 flex flex-col">
                       <div className="flex-1 overflow-hidden">
                          {[1, 2, 3, 4].map((i) => (
                             <div key={i} className="px-6 py-4 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4">
                                <div className="w-1/4 flex items-center gap-3">
                                   <div className="w-8 h-8 rounded bg-brand-50 dark:bg-brand-900/20 text-brand-600 flex items-center justify-center">I</div>
                                   <div className="h-3 w-16 bg-slate-800 dark:bg-slate-200 rounded"></div>
                                </div>
                                <div className="w-1/4">
                                   <div className="h-3 w-24 bg-slate-800 dark:bg-slate-200 rounded"></div>
                                </div>
                                <div className="w-1/6">
                                   <div className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide
                                      ${i === 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                                      {i === 3 ? t("mock.status.paid") : t("mock.status.open")}
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}