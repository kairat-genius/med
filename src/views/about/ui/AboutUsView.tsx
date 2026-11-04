import CompanyStats from "@/widgets/company-stats";
import { companyStatsAboutData } from "../data/company-stats.data";
import NewsArticles from "@/widgets/news-articles";
import Breadcrumbs from "@/shared/ui/breadcrumbs";

const AboutUsView = () => {
  return (
    <main className="pt-6 pb-30">
      <Breadcrumbs
        items={[
          { title: "Главная", href: "/" },
          { title: "О нас" },
        ]}
      />
      <CompanyStats data={companyStatsAboutData}>
        <h2 className="uppercase text-primary text-28 leading-[1.2] font-bold">
          «Армед» в цифрах
        </h2>
      </CompanyStats>
      <NewsArticles />
    </main>
  );
};

export default AboutUsView;
