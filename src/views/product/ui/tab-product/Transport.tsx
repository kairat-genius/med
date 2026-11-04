
import { transportCharacteristicsData } from "../../data/transport-characteristics.data";

const Transport = () => {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
        Транспортные характеристики
      </h2>
      <div className="bg-background rounded-2xl p-6 mb-10 grid grid-cols-2">
        <div>
          {transportCharacteristicsData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-b border-secondary-20 grid items-center gap-x-6 gap-y-2 text-16 grid-cols-[3fr_5fr]"
            >
              <div className="text-secondary">{item.key}</div>
              {item.value && (
                <div className="flex flex-col gap-1">
                  {item.value.title && (
                    <p className="text-[12px]">{item.value.title}</p>
                  )}
                  {item.value.info && (
                    <p className="text-[12px]">{item.value.info}</p>
                  )}

                  <p className="font-semibold">{item.value.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
