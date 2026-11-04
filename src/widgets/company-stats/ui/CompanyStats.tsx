import { ReactNode } from "react";

type CompanyStatItemType = {
  value: string;
  text: string;
  href?: string;
};

interface CompanyStatsProps {
  children?: ReactNode;
  data: CompanyStatItemType[];
}

const CompanyStats = ({ children, data }: CompanyStatsProps) => {
  return (
    <section className="mb-20 flex flex-col gap-8 container">
      {children}

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => {
          const content = (
            <>
              <p className="text-24 text-accent font-bold mb-6">{item.value}</p>
              <p className="text-secondary text-16">{item.text}</p>
            </>
          );

          return item.href ? (
            <a
              key={item.value}
              href={item.href}
              className="h-[120px] xs:h-35 xl:h-45 rounded-3xl p-6 flex flex-col bg-background border-2 border-transparent hover:border-accent transition-colors duration-300"
            >
              {content}
            </a>
          ) : (
            <article
              key={item.value}
              className="h-[120px] xs:h-35 xl:h-45 rounded-3xl p-6 flex flex-col bg-background border-2 border-transparent transition-colors duration-300"
            >
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyStats;
