import Link from "next/link";
import { equipmentData } from "../data/equipment.data";

const Equipment = () => {
  return (
    <section className="container mb-20 flex flex-col gap-8">
      <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
        Выберите направление
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {equipmentData.map((item) => (
          <Link
            key={item.slug}
            href={`/equipment/${item.slug}`}
            className="bg-background p-6 border-2 border-transparent hover:border-accent transition-colors duration-300 rounded-3xl"
          >
            <div className="mb-8 rounded-2xl bg-secondary-20 aspect-square overflow-hidden">
              <img
                src={`https://new.armed.ru/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 grow">
              <h4 className="text-18 leading-[1.2] font-semibold">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
