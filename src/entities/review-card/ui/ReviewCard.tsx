"use client";
import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";
import type { ReviewType } from "../types/review.type";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReviewModal = dynamic(() => import("./ReviewModal"), {
  ssr: false,
});

interface ReviewCardProps {
  item: ReviewType;
}

const ReviewCard = ({ item }: ReviewCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="p-6 bg-background rounded-3xl flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, starIndex) => (
          <Icon
            key={starIndex}
            icon="star"
            className={cn(
              "h-5 xl:h-[24px] w-5 xl:w-[24px]",
              starIndex > Math.floor(item.rating) ? "" : "text-warning",
            )}
          />
        ))}
      </div>
      <div className="mb-4 flex gap-4">
        <img
          src={`https://new.armed.ru/${item.avatar}`}
          alt={`Аватар: ${item.author}`}
          className="bg-secondary-20 h-13 w-13 rounded-full"
        />

        <div className="flex flex-col gap-2">
          <h4 className="text-20 leading-[1.2] font-semibold">{item.author}</h4>
          <time className="text-secondary text-16" dateTime={item.datetime}>
            {item.date}
          </time>
        </div>
      </div>
      <div className="flex flex-col xxl:flex-row gap-6 mb-auto">
        <p className="text-16">{item.text}</p>
        {item.attachment && (
          <img
            src={item.attachment}
            alt="Вложение отзыва"
            className="w-24.75 h-24.75 shrink-0 rounded-2xl bg-background border border-white object-cover"
            loading="lazy"
            onClick={() => setIsModalOpen(true)}
          />
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-16 cursor-pointer underline underline-offset-4 text-secondary font-semibold transition-colors duration-300 hover:text-accent mt-6"
        >
          Читать полный отзыв
        </button>
      </div>
      {isModalOpen && (
        <ReviewModal
          onClose={() => setIsModalOpen(false)}
          item={item}
        />
      )}
    </article>
  );
};

export default ReviewCard;
