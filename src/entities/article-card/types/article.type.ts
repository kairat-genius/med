export type ArticleType = {
  id: string;
  tags: string[];
  category: "news" | "articles";
  title: string;
  text?: string;
  slug: string;
  image: string;
  datetime: string;
  isAudio?: boolean;
};
