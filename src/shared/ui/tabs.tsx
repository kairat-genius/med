"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/shared/utils/clsx";
import Icon from "../icon";

interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  className?: string;
  items: TabItem[];
  value: string | null;
  onChange: (value: string | null) => void;
  isDeselectable?: boolean;
  isIcon?: boolean;
  spaceBetween?: number;
}

const Tabs = ({
  className,
  items,
  value,
  onChange,
  isDeselectable = false,
  isIcon = false,
  spaceBetween = 8,
}: TabsProps) => {
  const handleClick = (itemValue: string, isActive: boolean) => {
    if (isActive) {
      if (isDeselectable) onChange(null);
      return;
    }
    onChange(itemValue);
  };

  return (
    <div role="tablist" className={className}>
      <div className="p-1 max-w-full w-auto">
        <Swiper
          slidesPerView="auto"
          spaceBetween={spaceBetween}
          className="w-full h-full"
        >
          {items.map((item) => {
            const isActive = item.value === value;
            return (
              <SwiperSlide key={item.value} className="w-auto!">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleClick(item.value, isActive)}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 h-9 xl:h-11 font-semibold rounded-full text-16 whitespace-nowrap",
                    isActive
                      ? "bg-secondary text-white"
                      : "text-primary bg-background",
                    (!isActive || isDeselectable) && "cursor-pointer",
                    isActive
                      ? isDeselectable && "hover:bg-secondary-grad"
                      : "hover:text-accent",
                  )}
                >
                  {isIcon && (
                    <Icon
                      icon="hash"
                      className="h-5 w-5 xl:h-[24px] xl:w-[24px]"
                    />
                  )}
                  {item.label}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Tabs;
