"use client";

import CategoryCard from "@/entities/category-card";
import { LinkButton } from "@/shared/ui/action";
import { catalogCategoriesData } from "../../data/catalog-categories.data";
import Icon from "@/shared/icon";
import CompanyStats from "@/widgets/company-stats";
import { companyStatsMedicalData } from "../../data/company-stats.data";
import CasesSection from "./CasesSection";
import Equipment from "@/widgets/equipment";
import QuoteRequestForm from "@/features/quote-request-form";

const MedicalContent = () => {
  return (
    <>
      <CompanyStats data={companyStatsMedicalData} />
      <Equipment />
      <section className="container mb-20 flex flex-col gap-8">
        <h2 className="text-primary uppercase font-semibold text-28 leading-[1.2]">
          Выберите интересующее оборудование
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
          {catalogCategoriesData.map((cat) => (
            <CategoryCard key={cat.slug} item={cat} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <LinkButton
            href="/catalog"
            className="bg-secondary hover:bg-secondary-grad w-auto"
          >
            <span className="text-16 font-semibold">Перейти в каталог</span>
            <Icon
              icon="arrow-up-right"
              className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
            />
          </LinkButton>
        </div>
      </section>
      <QuoteRequestForm/>

      <CasesSection />
    </>
  );
};

export default MedicalContent;
