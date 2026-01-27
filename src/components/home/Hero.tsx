import { Icons } from "./HomeIcons";

export default function Hero() {
  const handleDashboardLogin = () => window.open("https://dashboard.invotrack.de/signin", "_blank");

   const handleDashboardSignup= () => window.open("https://dashboard.invotrack.de/signup", "_blank");
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
          Stop losing track of inventory
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Business Management <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600 dark:from-brand-400 dark:to-violet-400">
            Built for Growth.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
          Invotrack is the all-in-one dashboard to manage your team, track client items, and generate invoices instantly. Data-driven decisions start here.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleDashboardSignup}
            className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 dark:hover:bg-brand-500 transition shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
          >
            Create Business <Icons.ArrowRight />
          </button>
          <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center">
            Live Demo
          </button>
        </div>

       {/* --- DASHBOARD MOCKUP --- */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-6xl group perspective-1000">
          <div className="rounded-xl bg-slate-900 dark:bg-slate-800 p-2 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 transform transition-transform duration-500 hover:scale-[1.005]">
            <div className="rounded-lg bg-slate-50 dark:bg-slate-950 overflow-hidden relative aspect-[16/10] border border-slate-200 dark:border-slate-800">
              
              {/* Abstract Interface */}
              <div className="absolute inset-0 flex flex-col md:flex-row font-sans">
                
                {/* --- SIDEBAR --- */}
                <div className="w-16 md:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hidden md:flex flex-col justify-between">
                  <div>
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 mb-8 px-2">
                       <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                       <div className="h-4 w-24 bg-slate-800 dark:bg-slate-200 rounded-md"></div>
                    </div>

                    {/* Workspace User Profile */}
                    <div className="flex items-center gap-3 mb-8 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                      <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                      <div className="flex-1 space-y-1.5">
                         <div className="h-2 w-12 bg-slate-400 rounded"></div>
                         <div className="h-2.5 w-24 bg-slate-800 dark:bg-slate-200 rounded"></div>
                      </div>
                      <div className="w-4 h-4 text-slate-400">▼</div>
                    </div>
                    
                    {/* Navigation Items */}
                    <div className="space-y-1">
                      {['Dashboard', 'Clients', 'Items'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                      {/* Active Item: Invoices */}
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-l-4 border-brand-600">
                          <div className="w-5 h-5 rounded bg-brand-200 dark:bg-brand-800"></div>
                          <span className="text-sm font-medium">Invoices</span>
                      </div>
                      {['Calendar', 'Settings'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Footer */}
                  <div className="flex items-center gap-3 px-3">
                     <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs">KC</div>
                     <div className="space-y-1">
                        <div className="h-2 w-20 bg-slate-800 dark:bg-white rounded"></div>
                        <div className="h-2 w-28 bg-slate-400 rounded"></div>
                     </div>
                  </div>
                </div>

                {/* --- MAIN CONTENT --- */}
                <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
                  
                  {/* Top Bar */}
                  <div className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center w-96 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">
                       <div className="w-4 h-4 bg-slate-300 rounded-full mr-3"></div>
                       <div className="h-2 w-24 bg-slate-300 rounded"></div>
                       <div className="ml-auto w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded text-[10px] flex items-center justify-center text-slate-500">⌘K</div>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"></div>
                       <div className="w-8 h-8 rounded-full bg-brand-600"></div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="p-6 md:p-8 flex-1 overflow-hidden flex flex-col">
                    
                    {/* Page Title */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Billing & Invoices</h2>
                    </div>

                    {/* Filters Bar */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-wrap gap-4 items-end">
                       <div className="flex-1 min-w-[140px]">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Search</div>
                          <div className="h-10 w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"></div>
                       </div>
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-32 hidden xl:block">
                           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Filter {i}</div>
                           <div className="h-10 w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"></div>
                         </div>
                       ))}
                       <div className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg">
                          <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                       </div>
                       <div className="h-10 px-4 bg-brand-600 rounded-lg flex items-center gap-2 text-white font-medium shadow-lg shadow-brand-500/20">
                          <span>+</span> New Invoice
                       </div>
                    </div>

                    {/* Data Table */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1 flex flex-col">
                       
                       {/* Table Header */}
                       <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex gap-4">
                          <div className="w-1/4 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-1/4 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-1/6 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-1/6 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-1/6 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                       </div>

                       {/* Table Rows */}
                       <div className="flex-1 overflow-hidden">
                          {[1, 2, 3, 4].map((i) => (
                             <div key={i} className="px-6 py-4 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                {/* Invoice Col */}
                                <div className="w-1/4 flex items-center gap-3">
                                   <div className="w-8 h-8 rounded bg-brand-50 dark:bg-brand-900/20 text-brand-600 flex items-center justify-center">
                                      <div className="w-3 h-4 border-2 border-brand-500 rounded-sm"></div>
                                   </div>
                                   <div>
                                      <div className="h-3 w-16 bg-slate-800 dark:bg-slate-200 rounded mb-1"></div>
                                      <div className="h-2 w-20 bg-slate-400 rounded"></div>
                                   </div>
                                </div>
                                {/* Client Col */}
                                <div className="w-1/4">
                                   <div className="h-3 w-24 bg-slate-800 dark:bg-slate-200 rounded mb-1"></div>
                                   <div className="h-2 w-32 bg-slate-400 rounded"></div>
                                </div>
                                {/* Amount Col */}
                                <div className="w-1/6">
                                   <div className="h-3 w-12 bg-slate-800 dark:bg-slate-200 rounded"></div>
                                </div>
                                {/* Status Col */}
                                <div className="w-1/6">
                                   <div className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide
                                      ${i === 3 ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                                      {i === 3 ? 'PAID' : 'OPEN'}
                                   </div>
                                </div>
                                {/* Logistics Col */}
                                <div className="w-1/6 flex justify-between items-center">
                                   <div className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide
                                      ${i === 1 ? 'bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                                      {i === 1 ? 'DELIVERED' : 'PENDING'}
                                   </div>
                                   <div className="flex gap-2">
                                      <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                      <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
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