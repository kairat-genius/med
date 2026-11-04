import Link from "next/link";
import CardsSlider from "@/widgets/cards-slider";
import { casesData } from "../../data/cases.data";
import CaseCard from "@/entities/case-card";

const CasesSection = () => {
  return (
    <CardsSlider
      className="mb-20"
      data={casesData}
      Card={CaseCard}
      getItemKey={(item) => item.id}
      isPagination={false}
      isLoop={false}
      spaceBetween={16}
      slidesPerView="auto"
      breakpoints={{
        1450: { slidesPerView: 4 },
        1280: { slidesPerView: 3 },
      }}
      slideClassName="max-md:w-[85%]! max-xl:w-[45%]!"
    >
      <div className="flex flex-col gap-2 container mb-8">
        <h2 className="uppercase text-primary text-28 leading-[1.2] font-semibold">
          Наши кейсы
        </h2>
        <Link
          href="/cases"
          className="transition-colors duration-300 text-secondary underline underline-offset-4 font-semibold hover:text-accent text-16"
        >
          Читать все
        </Link>
      </div>
    </CardsSlider>
  );
};

export default CasesSection;
