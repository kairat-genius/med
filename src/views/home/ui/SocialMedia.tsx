"use client";
import { socialsData } from "../data/socials.data";

const SocialMedia = () => {
  return (
    <section className="mb-20 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-6 gap-4">
        {socialsData.map((item) => (
          <a
            key={item.id}
            href={item.href}
            rel="noopener noreferrer"
            className="bg-background flex xxl:flex-col items-center xxl:items-start gap-4 p-6 rounded-3xl border-2 border-transparent hover:border-accent transition-[border-color] duration-300"
          >
            <svg className="shrink-0 w-13 h-13">
              <use xlinkHref={`/static-media/sprites-socials.svg#${item.id}`} />
            </svg>
            <p className="font-semibold text-18">{item.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
