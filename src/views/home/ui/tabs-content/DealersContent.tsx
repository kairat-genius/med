"use client";

import CategoryCard from "@/entities/category-card/ui/CategoryCard";
import { Button, LinkButton } from "@/shared/ui/action";
import { catalogCategoriesData } from "../../data/catalog-categories.data";
import Icon from "@/shared/icon";
import CardsSlider from "@/widgets/cards-slider";

import { productData } from "../../data/product.data";
import ProductCard from "@/entities/product-card";
import Link from "next/link";

const DealersContent = () => {
  return (
    <>
      <CardsSlider
        className="mb-20"
        data={productData}
        Card={ProductCard}
        isPagination={false}
        isLoop={false}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          1750: { slidesPerView: 5 },
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
        }}
        slideClassName="max-sm:w-[85%]! max-lg:w-[45%]!"
      >
        <div className="flex flex-col gap-2 container mb-8">
          <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
            Специальные цены
          </h2>
          <Link
            href="/catalog"
            className="transition-colors duration-300 text-secondary underline underline-offset-4 font-semibold hover:text-accent text-16"
          >
            Смотреть все
          </Link>
        </div>
      </CardsSlider>

      <div className="mb-20">
        <CardsSlider
          data={productData}
          Card={ProductCard}
          isPagination={false}
          isLoop={false}
          spaceBetween={16}
          slidesPerView="auto"
          breakpoints={{
            1750: { slidesPerView: 5 },
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
          }}
          slideClassName="max-sm:w-[85%]! max-lg:w-[45%]!"
        >
          <div className="flex flex-col gap-2 container mb-8">
            <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
              Хиты оптовых продаж
            </h2>
          </div>
        </CardsSlider>
        <div className="flex items-center justify-center mt-8">
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
      </div>
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
      <section className="container">
        <article className="gap-6 md:gap-10 flex-col-reverse md:flex-row bg-background rounded-3xl p-6 flex">
          <div className="flex flex-col gap-6 md:gap-10 md:max-w-108.5 w-full">
            <h2 className="text-28 leading-[1.2] font-semibold uppercase">
              Станьте партнёром Армед и откройте доступ к{" "}
              <span className="text-accent">оптовым</span> условиям
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-2 mt-auto w-full">
              <Button className="w-full justify-between">
                <span className="text-16 font-semibold">
                  Зарегистрироваться
                </span>
                <Icon
                  icon="arrow-up-right"
                  className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                />
              </Button>
              <Button className="bg-secondary hover:bg-secondary-grad w-full justify-between">
                <span className="text-16 font-semibold">Войти</span>
                <Icon
                  icon="arrow-up-right"
                  className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                />
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden grow max-md:h-37.5">
            <img
              src="https://www.armed.ru/images/main/partners/banner2.png"
              alt="Баннер"
              className="object-cover w-full h-full"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default DealersContent;
