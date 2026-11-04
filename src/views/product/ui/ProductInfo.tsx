"use client";

import Icon from "@/shared/icon";
import { CopyButton } from "@/shared/ui/copy-button";
const productCodes = [
  { label: "Артикул", value: "1955801" },
  { label: "Код СФР", value: "07-01-01.0167" },
  { label: "Код ТРУ", value: "309220000.070010101.0142.0167.156" },
];

interface ProductInfoProps {
  onTabChange?: (value: string) => void;
}

const ProductInfo = ({ onTabChange }: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-20 font-semibold leading-[1.2]">
        Тонометр Армед YE660B Память на 74 измерения (Поверка: Нет)
      </h1>
      <ul className="flex flex-wrap gap-2 text-[12px] font-semibold leading-none">
        <li className="text-confirm bg-confirm10 py-2 px-4 rounded-full backdrop-blur-[5px]">
          Самая популярная коляска в России
        </li>
      </ul>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Icon
            icon="star"
            className="w-5 h-5 xl:w-[24px] xl:h-[24px] text-warning"
          />
          <p className="text-16 font-semibold leading-none">0</p>
        </div>
        <button
          type="button"
          onClick={() => onTabChange?.("reviews")}
          className="text-secondary cursor-pointer underline-offset-4 underline transition-colors duration-300 hover:text-accent"
        >
          0 отзывов
        </button>
        <button
          type="button"
          onClick={() => onTabChange?.("questions")}
          className="text-secondary cursor-pointer underline-offset-4 underline transition-colors duration-300 hover:text-accent"
        >
          0 вопросов
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-2xl bg-confirm10 px-4 py-2 w-fit">
        <Icon icon="shield" width={24} height={24} />
        <p className="font-semibold text-18 text-confirm">Гарантия 1 год</p>
      </div>
      <div className="flex flex-wrap xl:flex-col gap-x-6 gap-1">
        {productCodes.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2 leading-none">
            <p className="text-16 text-secondary">{label}:</p>
            <p className="text-16">{value}</p>
            <CopyButton value={value} ariaLabel={`Скопировать: ${label}`} />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onTabChange?.("characteristics")}
        className="mb-2 w-fit text-secondary cursor-pointer font-semibold hover:text-accent underline underline-offset-4 transition-colors duration-300"
      >
        Все характеристики
      </button>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-16 mb-2 text-secondary">Ширина сиденья:</p>
          <div className="flex items-center flex-wrap gap-2">
            <button className="h-9 px-4 font-semibold bg-background text-primary text-16 rounded-2xl cursor-pointer hover:text-accent transition-colors duration-300">
              430 мм
            </button>

            <button className="h-9 px-4 font-semibold bg-secondary text-white text-16 rounded-2xl">
              460 мм
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
