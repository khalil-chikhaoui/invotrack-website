import React, { useState } from 'react';

// --- ICONS (Inline SVGs to keep it dependency-free) ---
const Icons = {
  Menu: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>,
  Check: () => <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>,
  Zap: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
  Shield: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
  Chart: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>,
  Mail: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
  ArrowRight: () => <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
};

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-indigo-500 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">I</div>
              <span className="font-bold text-xl tracking-tight">invotrack</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition text-sm">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium transition text-sm">Pricing</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition text-sm">Contact</a>
              <button onClick={()=> window.open("https://dashboard.invotrack.de","_target")} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-slate-900/20">
                Dashboard Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                <Icons.Menu />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3">
             <a href="#features" className="block text-slate-600 py-2">Features</a>
             <a href="#contact" className="block text-slate-600 py-2">Contact</a>
             <button onClick={()=> window.open("https://dashboard.invotrack.de","_target")} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">Login</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse"></div>
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                v2.0 is Live: See what's new
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Inventory management <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                    reimagined for speed.
                </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                Invotrack helps modern teams track assets, predict shortages, and automate reordering. Stop using spreadsheets; start using intelligence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 flex items-center justify-center">
                    Start Free Trial <Icons.ArrowRight />
                </button>
                <button className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition flex items-center justify-center">
                    Book a Demo
                </button>
            </div>

            {/* Dashboard Mockup (Visual) */}
            <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl">
                <div className="rounded-xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
                    <div className="rounded-lg bg-slate-800 overflow-hidden relative aspect-[16/9]">
                        {/* Abstract Representation of App UI */}
                        <div className="absolute inset-0 bg-slate-900 flex">
                            {/* Sidebar */}
                            <div className="w-16 md:w-64 border-r border-slate-700/50 p-4 hidden md:block">
                                <div className="h-8 w-24 bg-slate-700 rounded mb-8"></div>
                                <div className="space-y-3">
                                    <div className="h-4 w-full bg-slate-800 rounded"></div>
                                    <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                                    <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
                                </div>
                            </div>
                            {/* Main */}
                            <div className="flex-1 p-4 md:p-8 bg-slate-900">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-8 w-48 bg-slate-800 rounded"></div>
                                    <div className="h-8 w-24 bg-indigo-600 rounded"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="h-32 bg-slate-800 rounded-lg border border-slate-700"></div>
                                    <div className="h-32 bg-slate-800 rounded-lg border border-slate-700"></div>
                                    <div className="h-32 bg-slate-800 rounded-lg border border-slate-700"></div>
                                </div>
                                <div className="h-64 bg-slate-800 rounded-lg border border-slate-700 w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Capabilities</h2>
                <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need to scale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icons.Zap />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Sync</h3>
                    <p className="text-slate-500 leading-relaxed">Updates across all devices instantly. Never sell an item that is out of stock again.</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icons.Shield />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Audit Logs</h3>
                    <p className="text-slate-500 leading-relaxed">Track every movement. See who moved what, when, and where. Full accountability.</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icons.Chart />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Forecasting</h3>
                    <p className="text-slate-500 leading-relaxed">Our AI analyzes sales trends to suggest reorder points automatically.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Requested) --- */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Content */}
                <div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Let's talk about your inventory.</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        Have questions about the Enterprise plan? Need a custom integration? Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                <Icons.Mail />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Email us directly</h4>
                                <p className="text-slate-500">support@invotrack.de</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                <Icons.Shield />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Security First</h4>
                                <p className="text-slate-500">We sign NDAs for all enterprise consultations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                    {formStatus === 'success' ? (
                        <div className="h-80 flex flex-col items-center justify-center text-center animate-pulse">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <Icons.Check />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                            <p className="text-slate-500 mt-2">We'll be in touch shortly.</p>
                            <button onClick={() => setFormStatus('idle')} className="mt-6 text-indigo-600 font-medium hover:underline">Send another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="jane@company.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none" placeholder="Tell us about your needs..."></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                            >
                                {formStatus === 'submitting' ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
                <span className="text-white font-bold text-xl tracking-tight">invotrack</span>
                <p className="mt-4 text-sm">Simplifying logistics for modern commerce.</p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">Features</a></li>
                    <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                    <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">About</a></li>
                    <li><a href="#" className="hover:text-white transition">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                    <li><a href="#" className="hover:text-white transition">Terms</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; 2024 Invotrack Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;