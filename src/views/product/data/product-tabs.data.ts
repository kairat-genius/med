export type ProductTab = {
  value: string;
  label: string;
};

export const productTabsData: ProductTab[] = [
  { value: "about", label: "О товаре" },
  { value: "characteristics", label: "Характеристики" },
  { value: "transport", label: "Транспортные характеристики" },
  { value: "documents", label: "Документы" },
  { value: "reviews", label: "Отзывы" },
  { value: "questions", label: "Ответы на вопросы" },
  { value: "videos", label: "Видео и статьи" },
  { value: "analogs", label: "Аналоги" },
  { value: "service", label: "Сервис" },
];