import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { Icons } from "../components/home/HomeIcons";

export default function TermsOfUse() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    "agreement",
    "usage",
    "intellectual",
    "liability",
    "termination",
    "modifications",
    "governing",
    "contact",
  ];

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
          {t("terms.backHome")}
        </button>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          {t("terms.title")}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {t("terms.lastUpdated")}
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          {t("terms.introduction")}
        </p>
      </section>

      {/* Sections */}
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-12">
        {sections.map((section) => (
          <div key={section}>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {t(`terms.sections.${section}.title`)}
            </h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                {t(`terms.sections.${section}.description1`)}
              </p>
              {t(`terms.sections.${section}.description2`) && (
                <p className="leading-relaxed">
                  {t(`terms.sections.${section}.description2`)}
                </p>
              )}
              {(() => {
                const listItems = t(`terms.sections.${section}.list`, {
                  returnObjects: true,
                });
                return Array.isArray(listItems) && listItems.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    {/* FIXED HERE: Casting listItems as string[] */}
                    {(listItems as string[]).map((item, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null;
              })()}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950 max-w-4xl mx-auto w-full">
        <p className="text-slate-600 dark:text-slate-400 text-center">
          {t("terms.contactInfo")}
        </p>
      </section>

      <Footer />
    </div>
  );
}