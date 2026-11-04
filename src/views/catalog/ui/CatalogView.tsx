"use client";
import CategoryCard from "@/entities/category-card";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Select from "@/shared/ui/select";
import { catalogCategoriesData } from "@/views/home/data/catalog-categories.data";
import Reviews from "@/widgets/reviews";
import { useState } from "react";

export const catalogFilters = [
  { slug: "all", title: "Все категории" },
  { slug: "oxygen", title: "Кислородное оборудование" },
  { slug: "air", title: "Обеззараживание воздуха" },
  {
    slug: "sterilization",
    title: "Оборудование для стерилизации инструментов",
  },
  { slug: "medical", title: "Медицинское оборудование" },
  { slug: "lab", title: "Лабораторное оборудование" },
  { slug: "furniture", title: "Медицинская мебель" },
  { slug: "ophthalmic", title: "Офтальмологическое оборудование и линзы" },
  { slug: "home", title: "Домашняя медтехника" },
  { slug: "rehab", title: "Технические средства реабилитации" },
];

const CatalogView = () => {
  const [category, setCategory] = useState<string | number>("all");

  return (
    <main className="pt-6 pb-30">
      <Breadcrumbs
        title="Каталог"
        items={[{ title: "Главная", href: "/" }, { title: "Каталог" }]}
      />
      <section className="container mb-20">
        <Select
          items={catalogFilters}
          value={category}
          onChange={setCategory}
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
          {catalogCategoriesData.map((cat) => (
            <CategoryCard key={cat.slug} item={cat} />
          ))}
        </div>
      </section>
      <Reviews />
    </main>
  );
};

export default CatalogView;
