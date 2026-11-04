"use client";
import Link from "next/link";
import { reviewsData } from "../data/reviews.data";
import ReviewCard from "@/entities/review-card";
import CardsSlider from "@/widgets/cards-slider";

const Reviews = () => {
  return (
    <CardsSlider
      className="mb-20"
      data={reviewsData}
      Card={ReviewCard}
      getItemKey={(item) => item.id}
      isPagination={false}
      isLoop={false}
      spaceBetween={16}
      slidesPerView="auto"
      breakpoints={{
        1280: { slidesPerView: 3 },
      }}
      slideClassName="max-md:w-[85%]! max-xl:w-[45%]!"
    >
      <div className="flex flex-col gap-2 container mb-8">
        <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
          Отзывы
        </h2>
        <Link
          href="/reviews"
          className="transition-colors duration-300 text-secondary underline underline-offset-4 font-semibold hover:text-accent text-16"
        >
          Смотреть все
        </Link>
      </div>
    </CardsSlider>
  );
};

export default Reviews;
