"use client";

import CategoryCard from "@/entities/category-card";
import { Button, LinkButton } from "@/shared/ui/action";
import { catalogCategoriesData } from "../../data/catalog-categories.data";
import Icon from "@/shared/icon";
import CompanyStats from "@/widgets/company-stats";
import { companyStatsPersonalData } from "../../data/company-stats.data";
const PersonalContent = () => {
  return (
    <>
      <CompanyStats data={companyStatsPersonalData} />
      <section className="container mb-20 flex flex-col gap-8">
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
      <section className="container">
        <article className="gap-10 flex flex-col-reverse md:grid md:grid-cols-[1fr_1fr] bg-background rounded-3xl p-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-28 leading-[1.2] font-semibold uppercase">
              Товары Армед для дома: здоровье, реабилитация и комфорт каждый
              день
            </h2>
            <p className="text-18 text-secondary">
              Теперь забота о здоровье и удобстве доступна каждому! Выбирайте
              оборудование для личного использования: поддержка здоровья,
              восстановление после травм, комфорт и чистый воздух. Все товары
              сертифицированы и безопасны для дома.
            </p>
            <p className="text-18 text-secondary">
              Оформить покупку можно прямо на Wildberries или Ozon — быстро,
              удобно и с доставкой до двери. Проверенное качество Армед всегда
              рядом.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-auto w-full">
              <Button className="w-auto justify-between bg-pink-grad-reverse hover:bg-pink-grad">
                <span className="text-16 font-semibold">Заказать на WB</span>
                <Icon
                  icon="arrow-up-right"
                  className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                />
              </Button>
              <Button className="bg-[#025afd] hover:bg-blue-grad w-auto justify-between">
                <span className="text-16 font-semibold">Заказать на Ozon</span>
                <Icon
                  icon="arrow-up-right"
                  className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                />
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden grow aspect-830/470 h-full w-full">
            <img
              src="https://www.armed.ru/images/common/banners/banner-marketplace.webp"
              alt="Баннер"
              className="object-cover w-full h-full"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default PersonalContent;
