import Link from "next/link";
import type { CategoryType } from "../types/category.type";

interface CategoryCardProps {
  item: CategoryType;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  return (
    <Link
      href={`/category/${item.slug}`}
      className="h-full p-6 rounded-3xl flex items-center justify-between gap-4 sm:gap-0 sm:flex-col bg-background border-2 border-transparent hover:border-accent transition-colors duration-300"
    >
      <div className="sm:mb-4 flex flex-col gap-1">
        <h4 className="text-20 font-semibold leading-[1.2]">{item.title}</h4>
        <p className="text-14 text-secondary">{item.count}</p>
      </div>
      <div className="w-[25%] sm:w-[50%] xl:w-[60%] mt-auto aspect-square self-center">
        <img src={`https://new.armed.ru/${item.image}`} alt={item.title} className="w-full h-full object-cover" />
      </div>
    </Link>
  );
};

export default CategoryCard;
