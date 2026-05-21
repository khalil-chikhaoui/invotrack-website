import { useTranslation } from "react-i18next";
import { Icons } from "./HomeIcons";

export default function Features() {
  const { t } = useTranslation();

  const FEATURES = [
    {
      key: "role",
      icon: <Icons.Users />,
      colorClass: "bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400",
    },
    {
      key: "products",
      icon: <Icons.Box />,
      colorClass: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    }, 
    {
      key: "invoicing",
      icon: <Icons.Document />,
      colorClass: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">
            {t("features.badge")}
          </h2>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {t("features.mainTitle")}
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            {t("features.subTitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.colorClass}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {t(`features.items.${feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}