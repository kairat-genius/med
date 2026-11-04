import Icon from "@/shared/icon";
import Link from "next/link";
import type { ArticleType } from "../types/article.type";

interface ArticleCardProps {
  item: ArticleType;
}

const ArticleCard = ({ item }: ArticleCardProps) => {
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="border-2 border-transparent hover:border-accent transition-colors duration-300 flex flex-col rounded-3xl bg-background p-6 h-full"
    >
      <div className="aspect-528/300 rounded-2xl mb-6 bg-background overflow-hidden">
        <img
          src={`https://new.armed.ru${item.image}`}
          alt="Медицинский концентратор АРМЕД JAY-20 4.0: для больниц, ИВЛ и медицинских учреждений"
          className="object-cover w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        <h4 className="text-20 font-semibold leading-[1.2]">{item.title}</h4>
        {item.text && (
          <p className="mb-6 text-16 text-secondary">{item.text}</p>
        )}
        <div className="mt-auto flex items-center gap-4 text-secondary text-[14px] justify-between">
          <time dateTime={item.datetime} className="card-news__date">
            08.10.2026
          </time>
          {item.isAudio && (
            <span className="flex items-center gap-2">
              <Icon icon="volume-2" className="w-[16px] h-[16px]" />
              Можно прослушать
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
