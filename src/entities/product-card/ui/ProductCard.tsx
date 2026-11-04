"use client";
import { cn } from "@/shared/utils/clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProductType } from "../types/product.type";
import Icon from "@/shared/icon";
import { CopyButton } from "@/shared/ui/copy-button";

interface ProductCardProps {
  children?: ReactNode;
  className?: string;
  item: ProductType;
}

const ProductCard = ({ className, children, item }: ProductCardProps) => {
  return (
    <article
      className={cn(
        "relative p-6 bg-background rounded-3xl flex flex-col",
        className,
      )}
    >
      <div className="relative flex flex-col mb-4 p-2 bg-white items-center rounded-2xl border-2 border-transparent hover:border-accent transition-colors duration-300">
        <div className="w-full">
          <button
            className="w-11 h-11 xl:w-13 xl:h-13 bg-background rounded-full flex items-center justify-center cursor-pointer text-primary hover:text-accent transition-colors duration-300"
            type="button"
            aria-label="Добавить в избранное"
          >
            <Icon
              icon="favorites"
              className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
            />
          </button>
        </div>
        <Link href={`/product/${item.slug}`}>
          <img
            className="aspect-square object-cover max-w-50 sm:max-w-87 w-full"
            src={`https://www.armed.ru/${item.image}`}
            alt=""
          />
        </Link>
        {item.label && (
          <ul className="right-2 top-2 flex gap-2 absolute items-end flex-col">
            <li>
              <div className="truncate text-confirm bg-confirm10 text-[12px] px-4 py-2 font-semibold leading-none backdrop-blur-[5px] rounded-full">
                {item.label}
              </div>
            </li>
          </ul>
        )}
        {item.rating && (
          <div className="right-4 bottom-4 flex items-center gap-2 absolute">
            <Icon icon="star" className="w-[16px] h-[16px] text-warning" />
            <p className="font-semibold text-16 leading-none">{item.rating}</p>
          </div>
        )}
      </div>
      <div className="flex items-center mb-2 gap-2">
        <p className="text-16 text-secondary">Артикул:</p>
        <p className="text-16 truncate">{item.article}</p>
        <CopyButton value={item.article} ariaLabel="Скопировать" />
      </div>
      <h4 className="text-18 font-semibold leading-[1.2] mb-4 hover:text-accent transition-colors duration-300">
        <Link href={`/product/${item.slug}`} className="line-clamp-3">
          {item.title}
        </Link>
      </h4>
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-col gap-2">
          <div className="flex gap-6 justify-between items-center">
            <p className="text-16 text-secondary text-nowrap">Розничная цена</p>
            <p className="text-18 font-semibold text-nowrap">
              {item.retailPrice}
            </p>
          </div>
          <div className="flex gap-6 justify-between items-center">
            <p className="text-16 text-secondary text-nowrap">Оптовая цена</p>
            <p className="text-18 font-semibold text-nowrap">
              {item.wholesalePrice}
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col gap-1">
          <p className="text-16 text-center">Чтобы узнать цену,</p>
          <div className="text-center flex gap-1 items-center flex-wrap justify-center">
            <button className="inline font-semibold text-[14px] underline transition-colors duration-300 hover:text-accent cursor-pointer">
              войдите
            </button>
            или
            <button className="inline font-semibold text-[14px] underline transition-colors duration-300 hover:text-accent cursor-pointer">
              зарегистрируйтесь
            </button>
          </div>
        </div>
        {children}
      </div>
    </article>
  );
};

export default ProductCard;
