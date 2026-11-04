import { CaseType } from "../types/case.type";

interface CaseCardProps {
  item: CaseType;
}

const CaseCard = ({ item }: CaseCardProps) => {
  return (
    <article className="p-6 bg-background cursor-pointer flex flex-col rounded-3xl border-2 border-transparent hover:border-accent transition-colors duration-300 h-full">
      <div className="aspect-square mb-8 rounded-2xl bg-secondary-20">
        <img
          src={`https://www.armed.ru/${item.image}`}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-6 grow">
        <h4 className="text-18 leading-[1.2] font-semibold">{item.title}</h4>
      </div>
    </article>
  );
};

export default CaseCard;
