"use client";
import Icon from "@/shared/icon";
import { LinkButton } from "@/shared/ui/action";
import Tabs from "@/shared/ui/tabs";
import { useMemo, useState } from "react";
import {
  articleTags,
  NEWS_CATEGORIES,
  NewsCategory,
  newsData,
  newsTags,
} from "../data/news.data";
import ArticleCard from "@/entities/article-card";
import CardsSlider from "@/widgets/cards-slider";

const NewsArticles = () => {
  const [category, setCategory] = useState<NewsCategory>("news");
  const [tag, setTag] = useState<string | null>(null);

  const handleCategoryChange = (value: string | null) => {
    if (!value) return;
    setCategory(value as NewsCategory);
    setTag(null);
  };

  const tags = category === "news" ? newsTags : articleTags;

  const filteredData = useMemo(() => {
    return newsData.filter((item) => {
      if (item.category !== category) return false;
      if (tag && !item.tags?.includes(tag)) return false;
      return true;
    });
  }, [category, tag]);

  const allHref = category === "news" ? "/news" : "/articles";
  const isEmpty = filteredData.length === 0;
  const emptyText =
    category === "news"
      ? "Новостей по выбранному тегу пока нет."
      : "Статей по выбранному тегу пока нет.";
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-8 container">
        <h2 className="text-28 leading-[1.2] font-semibold text-primary uppercase">
          Все новости и статьи
        </h2>
        <Tabs
          items={[...NEWS_CATEGORIES]}
          value={category}
          onChange={handleCategoryChange}
          className="flex items-center"
        />
        <Tabs
          items={tags}
          value={tag}
          onChange={setTag}
          className="flex items-center mb-6"
          isDeselectable
          isIcon
        />
      </div>
      {isEmpty ? (
        <p className="text-secondary text-16 container">{emptyText}</p>
      ) : (
        <div className="flex flex-col gap-6 items-center">
          <CardsSlider
            data={filteredData}
            Card={ArticleCard}
            getItemKey={(item) => item.id}
            isLoop={false}
            isPagination={false}
            spaceBetween={16}
            slidesPerView="auto"
            breakpoints={{
              1280: { slidesPerView: 3 },
            }}
            className="w-full"
            slideClassName="max-md:w-[85%]! max-xl:w-[45%]!"
          />
          <div className="container flex items-center justify-center">
            <LinkButton
              href={allHref}
              className="justify-between text-white bg-secondary hover:bg-secondary-grad"
            >
              <span className="text-16 font-semibold">Читать все</span>
              <Icon
                icon="arrow-up-right"
                className="h-5 xl:h-[24px] w-5 xl:w-[24px]"
              />
            </LinkButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsArticles;
