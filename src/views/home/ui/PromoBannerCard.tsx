"use client";
import Icon from "@/shared/icon";
import { CardsSliderType } from "@/widgets/cards-slider";

interface PromoBannerCardProps {
  item: CardsSliderType;
}

const PromoBannerCard = ({ item }: PromoBannerCardProps) => {
  return (
    <article className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 bg-background p-6 rounded-3xl h-full">
      <div className="flex flex-col gap-6 h-full">
        <h2 className="text-40 uppercase leading-[1.2] font-semibold font-rubik">
          {item.title}
        </h2>
        <p className="text-secondary text-24">{item.text}</p>

        {item.list?.length ? (
          <ul className="text-secondary text-24 pl-4 list-disc list-outside flex flex-col gap-2">
            {item.list.map((listItem, listItemIndex) => (
              <li key={listItemIndex}>{listItem}</li>
            ))}
          </ul>
        ) : null}

        {item.button && (
          <div className="mt-auto flex">
            <a
              href={item.button.href}
              className="bg-accent text-white shrink-0 px-6 flex justify-between rounded-full text-16 gap-2 font-semibold items-center h-11 xl:h-13 w-full md:w-auto"
              rel={item.button.external ? "noopener noreferrer" : undefined}
            >
              <span>{item.button.text}</span>
              <Icon
                icon="arrow-up-right"
                className="h-5 xl:h-[24px] w-5 xl:w-[24px]"
              />
            </a>
          </div>
        )}
      </div>

      <div className="w-full h-full aspect-830/470 rounded-2xl overflow-hidden">
        <img
          src={`https://new.armed.ru/${item.image.src}`}
          alt={item.image.alt}
          className="object-cover w-full h-full"
        />
      </div>
    </article>
  );
};

export default PromoBannerCard;
