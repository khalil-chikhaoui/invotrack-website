import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { Icons } from "../components/home/HomeIcons";

export default function AboutUs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 transition-colors duration-300 selection:bg-brand-500 selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-8 hover:gap-3 transition-all"
        >
          <Icons.ArrowRight className="w-4 h-4 rotate-180" />
          {t("about.backHome")}
        </button>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          {t("about.title")}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          {t("about.subtitle")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            {t("about.mission.title")}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {t("about.mission.description1")}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {t("about.mission.description2")}
          </p>
        </div>
      </section>

      {/* Why Invotrack Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">
            {t("about.why.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["reliability", "innovation", "support", "security"].map((key) => (
              <div key={key} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                  <Icons.Check />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                    {t(`about.why.items.${key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t(`about.why.items.${key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">
            {t("about.values.title")}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            {t("about.values.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["simplicity", "transparency", "growth"].map((value) => (
              <div
                key={value}
                className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  {t(`about.values.items.${value}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t(`about.values.items.${value}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
