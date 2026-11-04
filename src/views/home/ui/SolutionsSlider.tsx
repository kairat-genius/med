"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Icon from "@/shared/icon";
import { solutionsData } from "../data/solutions.data";
import { Button, LinkButton } from "@/shared/ui/action";
import { cn } from "@/shared/utils/clsx";

const SolutionsSlider = () => {
  return (
    <section className="mb-20 container">
      <Swiper
        slidesPerView={"auto"}
        breakpoints={{
          1280: { slidesPerView: 3 },
        }}
        spaceBetween={16}
        className="w-full h-full"
      >
        {solutionsData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="h-auto! max-md:w-[85%]! max-xl:w-[45%]!"
          >
            <article className="p-6 bg-background rounded-3xl h-full flex flex-col">
              <h2 className="text-28 uppercase font-semibold mb-4 leading-[1.2]">
                {item.title}
              </h2>
              <p className="min-h-15.5 text-secondary text-16">{item.text}</p>
              <ul className="flex flex-col gap-4 mt-6 mb-auto">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <Icon
                        icon={feature.icon}
                        className="w-5 h-5 xl:w-6 xl:h-6"
                      />
                      <h3 className="text-20 leading-[1.2] font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-secondary text-16">{feature.text}</p>
                  </li>
                ))}
              </ul>
              {item.buttons && item.buttons.length > 0 && (
                <div className="mt-8 flex flex-col gap-2">
                  {item.buttons.map((button) =>
                    button.href ? (
                      <LinkButton
                        key={button.label}
                        href={button.href}
                        className={cn(
                          "justify-between text-white",
                          button.variant !== "accent" &&
                            "bg-secondary hover:bg-secondary-grad",
                        )}
                      >
                        <span className="text-16 font-semibold">
                          {button.label}
                        </span>
                        <Icon
                          icon="arrow-up-right"
                          className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                        />
                      </LinkButton>
                    ) : (
                      <Button
                        key={button.label}
                        className={cn(
                          "justify-between text-white",
                          button.variant !== "accent" &&
                            "bg-secondary hover:bg-secondary-grad",
                        )}
                      >
                        <span className="text-16 font-semibold">
                          {button.label}
                        </span>
                        <Icon
                          icon="arrow-up-right"
                          className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
                        />
                      </Button>
                    ),
                  )}
                </div>
              )}
              {item.marketplaces && (
                <div className="mt-8">
                  <p className="mb-2 text-16 text-secondary">
                    {item.marketplaces.caption}
                  </p>
                  <ul className="flex gap-2">
                    {item.marketplaces.items.map((marketplace) => (
                      <li key={marketplace.alt}>
                        <a
                          href={marketplace.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="w-10 h-10"
                        >
                          <img
                            src={`/static-media/marketplaces/${marketplace.image}`}
                            alt={marketplace.alt}
                            className="w-full h-full"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SolutionsSlider;
