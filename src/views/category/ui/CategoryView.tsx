"use client";
import CategoryCard from "@/entities/category-card";
import ProductCard from "@/entities/product-card";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Checkbox from "@/shared/ui/checkbox";
import Select from "@/shared/ui/select";
import { catalogCategoriesData } from "@/views/home/data/catalog-categories.data";
import { productData } from "@/views/home/data/product.data";
import CardsSlider from "@/widgets/cards-slider";
import NewsArticles from "@/widgets/news-articles";
import { useState } from "react";
import { ProductListData } from "../data/product-list.data";

export const sortFilters = [
  { slug: "popular", title: "По популярности" },
  { slug: "rating", title: "По рейтингу" },
  { slug: "priceAsc", title: "Цена: по возрастанию" },
  { slug: "priceDesc", title: "Цена: по убыванию" },
  { slug: "new", title: "По новизне" },
];
export const volumeFilters = [
  { slug: "1l", title: "1 литр" },
  { slug: "3l", title: "3 литра" },
  { slug: "5l", title: "5 литров" },
  { slug: "10l", title: "10 литров" },
  { slug: "portable", title: "Портативные концентраторы с аккумулятором" },
];

const CategoryView = () => {
  const [sort, setSort] = useState<string | number>("popular");
  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([]);

  const toggleVolume = (slug: string) => {
    setSelectedVolumes((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  // Группируем товары по объёмам и применяем фильтр
  const groups = volumeFilters
    .map((filter) => ({
      ...filter,
      products: ProductListData.filter((p) => p.volume === filter.slug),
    }))
    .filter((g) => g.products.length > 0)
    .filter(
      (g) => selectedVolumes.length === 0 || selectedVolumes.includes(g.slug),
    );

  return (
    <main className="pt-6 pb-30">
      <Breadcrumbs
        items={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
          { title: "Кислородные концентраторы" },
        ]}
        title="Кислородные концентраторы"
      />
      <div className="container mb-20 grid grid-cols-1 xl:grid-cols-[1fr_minmax(0,3fr)] gap-6">
        <aside className="hidden xl:block">
          <div className="top-33.75 sticky flex flex-col gap-6 scrollbar max-h-[calc(100dvh-135px-var(--spacing-6))]">
            <div className="p-4 bg-background rounded-3xl">
              <ul className="flex flex-col gap-4">
                {volumeFilters.map((filter) => (
                  <li key={filter.slug}>
                    <Checkbox
                      checked={selectedVolumes.includes(filter.slug)}
                      onClick={() => toggleVolume(filter.slug)}
                    >
                      {filter.title}
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-background rounded-3xl flex flex-col gap-2">
              <div className="text-18 font-semibold">Поиск по параметрам</div>
              <Checkbox>
                <p className="text-[14px] font-normal text-secondary">
                  Честный знак
                </p>
              </Checkbox>
            </div>
          </div>
        </aside>
        <div>
          <article className="gap-10 bg-background grid grid-cols-[1fr_1fr] mb-10 p-6 rounded-3xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-28 leading-[1.2] uppercase font-semibold text-accent">
                БРЕНД №1 НА РЫНКЕ КИСЛОРОДНЫХ КОНЦЕНТРАТОРОВ
              </h2>
              <p className="text-18 text-secondary">
                Кислородное оборудование для домашнего использования,
                медицинских учреждений и профессионального применения.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-830/350 w-full h-full">
              <img
                src="https://www.armed.ru/upload/uf/9cb/yrjw0y6cj7hyiev0x9uv1329dwomx97e/01_02-KK-do-10-litrov.webp"
                alt="БРЕНД №1 НА РЫНКЕ КИСЛОРОДНЫХ КОНЦЕНТРАТОРОВ"
                className="w-full h-full object-cover"
              />
            </div>
          </article>
          <Select
            items={sortFilters}
            value={sort}
            onChange={setSort}
            className="mb-6 max-w-50"
          />
          <div className="flex flex-col gap-10">
            {groups.map((group) => (
              <div key={group.slug} className="flex flex-col gap-6">
                <h3 className="text-24 font-semibold leading-[1.2]">
                  {group.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {group.products.map((item) => (
                    <ProductCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CardsSlider
        data={catalogCategoriesData}
        Card={CategoryCard}
        isPagination={false}
        isLoop={false}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          1750: { slidesPerView: 5 },
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-20"
        slideClassName="max-sm:w-[85%]! max-lg:w-[45%]!"
      >
        <div className="flex flex-col gap-2 container mb-8">
          <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
            Покупают вместе
          </h2>
        </div>
      </CardsSlider>
      <NewsArticles />
    </main>
  );
};

export default CategoryView;
