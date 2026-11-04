"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Icon from "@/shared/icon";
import { ComponentType, ReactNode, useId } from "react";
import { cn } from "@/shared/utils/clsx";
import type { SwiperOptions } from "swiper/types";

export interface CardsSliderCardProps<T> {
  item: T;
}

type SliderBreakpoints = SwiperOptions["breakpoints"];

interface CardsSliderProps<T> {
  Card: ComponentType<CardsSliderCardProps<T>>;
  data: T[];
  getItemKey?: (item: T, index: number) => string | number;
  className?: string;
  children?: ReactNode;

  slideClassName?: string;
  isPagination?: boolean;
  isLoop?: boolean;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: SliderBreakpoints;
}

const navButtonClassName =
  "cursor-pointer justify-center items-center hidden lg:flex z-10 absolute top-1/2 -translate-y-1/2 shrink-0 rounded-full bg-background hover:text-accent h-11 xl:h-13 w-11 xl:w-13 transition-colors disabled:opacity-40 disabled:cursor-default disabled:pointer-events-none [&.swiper-button-lock]:hidden disabled:text-secondary";

const CardsSlider = <T,>({
  Card,
  data,
  getItemKey,
  className,
  children,
  isPagination = true,
  isLoop = true,
  slideClassName,
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints,
}: CardsSliderProps<T>) => {
  const uid = useId().replaceAll(":", "");
  const prevClass = `cards-slider-prev-${uid}`;
  const nextClass = `cards-slider-next-${uid}`;
  const paginationClass = `cards-slider-pagination-${uid}`;
  return (
    <section className={cn(className)}>
      {children}
      <div
        className={cn(
          "relative",
          isPagination && "pb-[calc(var(--spacing-10)+8px)]",
        )}
      >
        <div className="container relative">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
            modules={[Navigation, Pagination]}
            className="w-full h-full"
            loop={isLoop}
            navigation={{
              nextEl: `.${nextClass}`,
              prevEl: `.${prevClass}`,
            }}
            pagination={
              isPagination
                ? { clickable: true, el: `.${paginationClass}` }
                : false
            }
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={getItemKey ? getItemKey(item, index) : index}
                className={cn("h-auto!", slideClassName)}
              >
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className={cn(
              navButtonClassName,
              prevClass,
              "left-1.5 xxl:left-[16px]",
            )}
            aria-label="Предыдущий слайд"
          >
            <Icon
              icon="arrow-left"
              className="h-5 xl:h-[24px] w-5 xl:w-[24px]"
            />
          </button>
          <button
            type="button"
            className={cn(
              navButtonClassName,
              nextClass,
              "right-1.5 xxl:right-[16px]",
            )}
            aria-label="Следующий слайд"
          >
            <Icon
              icon="arrow-left"
              className="rotate-180 h-5 xl:h-[24px] w-5 xl:w-[24px]"
            />
          </button>
        </div>
        {isPagination && (
          <div
            className={`${paginationClass} flex justify-center absolute z-10 bottom-[calc((var(--spacing-10)+8px)*-1)] slider__pagination`}
          />
        )}
      </div>
    </section>
  );
};

export default CardsSlider;
