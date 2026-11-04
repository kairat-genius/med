"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Icon from "@/shared/icon";
import { productGalleryData } from "../data/product-gallery.data";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex gap-4 w-full max-xl:max-w-181">
      {/* ── Миниатюры (вертикальный скролл) ── */}
      <div className="w-[calc(18.6441%-2.98305px)] overflow-hidden rounded-2xl relative">
        <div className="absolute inset-0">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView="auto"
            direction="vertical"
            spaceBetween={8}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-full"
            watchSlidesProgress
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
          >
            {productGalleryData.map((image) => (
              <SwiperSlide
                key={image.id}
                className="cursor-pointer aspect-square h-auto! [.swiper-slide-thumb-active]:border-accent border border-secondary-20 transition-colors duration-300 rounded-2xl overflow-hidden"
              >
                <div className="w-full h-full">
                  <img
                    src={`https://new.armed.ru${image.src}`}
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
            <button
              aria-label="prev slide"
              className="z-1 absolute shrink-0 -top-px gallery-prev h-[32px] w-full flex items-center justify-center cursor-pointer rounded-t-2xl bg-background [&.swiper-button-disabled]:opacity-[8] [&.swiper-button-disabled]:text-secondary-20 [&.swiper-button-lock]:hidden"
            >
              <Icon
                icon="chevron-down"
                className="rotate-180 w-5 h-5 xl:w-[24px] xl:h-[24px]"
              />
            </button>
            <button
              aria-label="next slide"
              className="z-1 absolute shrink-0 -bottom-px gallery-next h-[32px] w-full flex items-center justify-center cursor-pointer rounded-b-2xl bg-background [&.swiper-button-disabled]:opacity-[8] [&.swiper-button-disabled]:text-secondary-20 [&.swiper-button-lock]:hidden"
            >
              <Icon
                icon="chevron-down"
                className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
              />
            </button>
          </Swiper>
        </div>
      </div>

      {/* ── Основное изображение ── */}
      <div className="w-[calc(81.3559%-13.017px)] aspect-square">
        <Swiper
          slidesPerView={1}
          modules={[FreeMode, Thumbs]}
          className="h-full"
          direction="vertical"
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {productGalleryData.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-secondary-20 transition-colors duration-300">
                <img
                  src={`https://new.armed.ru${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
