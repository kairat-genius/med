import { cn } from "@/shared/utils/clsx";
import { productCharacteristicsData } from "../../data/product-characteristics.data";

const Characteristics = () => {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
        Характеристики
      </h2>
      <div className="bg-background rounded-2xl p-6 flex flex-col gap-4">
        {productCharacteristicsData.map((groups) => (
          <article
            key={groups.id}
            className="bg-white flex flex-col p-6 rounded-3xl"
          >
            <h3 className="font-semibold text-24 leading-[1.2] mb-6">
              {groups.title}
            </h3>
            <div>
              {groups.items.map((group) => (
                <div
                  key={group.key}
                  className="py-2 border-b border-secondary-20 grid grid-cols-2 items-center text-16"
                >
                  <div>{group.key}</div>
                  {typeof group.value === "string" ? (
                    <div>{group.value}</div>
                  ) : (
                    <div>
                      {group.value.map((nested, index) => {
                        const isFirst = index === 0;
                        const isLast = index === group.value.length - 1;

                        return (
                          <div
                            className={cn(
                              "text-16",
                              nested.label && "grid grid-cols-2 gap-6",
                              !isFirst && "pt-2",
                              !isLast && "pb-2 border-b border-secondary-20",
                            )}
                            key={index}
                          >
                            <p className={nested.label && "text-secondary"}>
                              {nested.label}
                            </p>
                            <p>{nested.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Characteristics;
