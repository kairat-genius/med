import { productAdvantagesData } from "../../data/product-advantages.data";

const ProductAbout = () => {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
        Описание
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {productAdvantagesData.map((item) => (
          <article
            key={item.id}
            className="flex items-center flex-col sm:flex-row gap-10 bg-background p-6 rounded-3xl"
          >
            <img
              src={`https://new.armed.ru/${item.image}`}
              alt={item.title}
              loading="lazy"
              className="aspect-square w-full sm:w-[25%] lg:w-[44%] rounded-2xl shrink-0"
            />

            <div className="flex flex-col gap-4 lg:max-w-86.25">
              <h3 className="text-24 font-semibold leading-[1.2]">{item.title}</h3>
              <p className="text text-[14px] text-secondary">
                <span>{item.text}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductAbout;
