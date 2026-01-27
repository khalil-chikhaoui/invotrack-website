import React, { useState } from "react";
import { Icons } from "./HomeIcons";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Get your business on Invotrack.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Ready to organize your team? Create a business, invite admins and managers, and start delivering value to your clients today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Icons.Mail />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Support</h4>
                  <p className="text-slate-500 dark:text-slate-400">support@invotrack.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            {formStatus === "success" ? (
              <div className="h-80 flex flex-col items-center justify-center text-center animate-pulse">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                  <Icons.Check />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  We'll help you setup your business shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-brand-600 dark:text-brand-400 font-medium hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition resize-none"
                    placeholder="I want to create a business..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-600 dark:bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 dark:hover:bg-brand-500 transition shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                >
                  {formStatus === "submitting" ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
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
  );
}