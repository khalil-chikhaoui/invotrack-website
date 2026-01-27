import { Icons } from "./HomeIcons";

export default function StatsTeaser() {
  return (
    <section id="roles" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
            Data Driven
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Always Charts. <br />
            Always Stats.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            Invotrack doesn't just store data; it visualizes it. Get instant insights into best-selling items, client activity, and team performance.
          </p>

          <ul className="space-y-4">
            {["Revenue Growth tracking", "Client Acquisition metrics", "Inventory Turnover rates"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Icons.Check />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Chart Visual */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
          {/* Decorative Blur */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Monthly Revenue</h3>
            <div className="flex items-end gap-2 h-40">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-brand-200 dark:bg-brand-900/50 rounded-t-lg relative group overflow-hidden">
                  <div
                    style={{ height: `${h}%` }}
                    className="absolute bottom-0 w-full bg-brand-600 dark:bg-brand-500 rounded-t-lg transition-all duration-1000 group-hover:bg-brand-500 dark:group-hover:bg-brand-400"
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-slate-400 font-mono">
              <span>MON</span>
              <span>SUN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}