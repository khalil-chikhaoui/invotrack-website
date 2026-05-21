import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "./HomeIcons";

export default function Contact() {
  const { t } = useTranslation();
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
              {t("contact.title")}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Icons.Mail />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t("contact.support.title")}</h4>
                  <p className="text-slate-500 dark:text-slate-400">support@invotrack.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            {formStatus === "success" ? (
              <div className="h-80 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                  <Icons.Check />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("contact.success.title")}</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  {t("contact.success.subtitle")}
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-brand-600 dark:text-brand-400 font-medium hover:underline"
                >
                  {t("contact.success.reset")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {t("contact.form.firstName")}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition"
                      placeholder={t("contact.form.placeholders.firstName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {t("contact.form.lastName")}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition"
                      placeholder={t("contact.form.placeholders.lastName")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t("contact.form.email")}
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
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition resize-none"
                    placeholder={t("contact.form.placeholders.message")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-600 dark:bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 dark:hover:bg-brand-500 transition shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                >
                  {formStatus === "submitting" ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    t("contact.form.submit")
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