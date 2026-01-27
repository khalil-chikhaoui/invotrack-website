
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-1">
          <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
            invotrack
          </span>
          <p className="mt-4 text-sm">Dashboard.invotrack.de</p>
          <p className="mt-1 text-sm">Track, Invoice, Deliver.</p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">Business</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">Roles</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">Invoices</a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-600 dark:hover:text-white transition">Terms</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Invotrack. All rights reserved.
      </div>
    </footer>
  );
}