import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

interface BreadcrumbsProps {
  title?: string;
  items: { title: string; href?: string }[];
}

const Breadcrumbs = ({ title, items }: BreadcrumbsProps) => {
  return (
    <section className="container mb-10">
      <div className="flex flex-col gap-6">
        <div className="text-16 flex flex-wrap items-center">
          {items.map((item, index) => (
            <Fragment key={item.title}>
              {item.href ? (
                <Link href={item.href} className="text-secondary-80 hover:text-accent">{item.title}</Link>
              ) : (
                <span>{item.title}</span>
              )}

              {index < items.length - 1 && <span className="text-secondary-80 text-16 mx-[16px]">&gt;</span>}
            </Fragment>
          ))}
        </div>
        {title && (
          <h1 className="text-40 font-semibold leading-[1.2] uppercase">{title}</h1>
        )}
      </div>
    </section>
  );
};

export default Breadcrumbs;
