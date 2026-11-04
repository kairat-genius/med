import Icon from "@/shared/icon";

import type { CardsSliderType } from "@/widgets/cards-slider/types/cards-slider.type";

interface TabBannerCardProps {
  item: CardsSliderType;
}

export const TabBannerCard = ({ item }: TabBannerCardProps) => {
  return (
    <article className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 bg-background p-6 rounded-3xl h-full">
      <div className="flex flex-col gap-6 h-full">
        <h2 className="text-primary text-28 uppercase leading-[1.2] font-semibold">
          {item.title}
        </h2>
        <p className="text-secondary text-18">{item.text}</p>

        {item.button && (
          <div className="mt-auto flex">
            <a
              href={item.button.href}
              className="justify-between text-white w-full md:w-auto flex items-center whitespace-nowrap cursor-pointer rounded-full bg-accent hover:bg-accent-grad shrink-0 px-6 h-11 xl:h-13 gap-2"
              rel={item.button.external ? "noopener noreferrer" : undefined}
            >
              <span className="text-16 font-semibold">{item.button.text}</span>
              <Icon
                icon="arrow-up-right"
                className="h-5 xl:h-[24px] w-5 xl:w-[24px]"
              />
            </a>
          </div>
        )}
      </div>

      <div className="w-full h-full aspect-830/250 rounded-2xl overflow-hidden">
        <img
          src={`https://new.armed.ru/${item.image.src}`}
          alt={item.image.alt}
          width={830}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>
    </article>
  );
};
