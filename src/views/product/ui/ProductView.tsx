"use client";

import Breadcrumbs from "@/shared/ui/breadcrumbs";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import ProductPurchasePanel from "./purchase/ProductPurchasePanel";
import Tabs from "@/shared/ui/tabs";
import { ReactNode, useCallback, useRef, useState } from "react";
import { productTabsData } from "../data/product-tabs.data";
import ProductAbout from "./tab-product/ProductAbout";
import Characteristics from "./tab-product/Characteristics";
import Transport from "./tab-product/Transport";

const tabContent: Record<string, ReactNode> = {
  about: <ProductAbout />,
  characteristics: <Characteristics />,
  transport: <Transport />,
};

const ProductView = () => {
  const [tab, setTab] = useState<string | null>("about");

  const tabsRef = useRef<HTMLElement>(null);

  const handleTabFromInfo = useCallback((value: string) => {
    setTab(value);
    tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="pt-6 pb-30">
      <Breadcrumbs
        items={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
          {
            title: "Медицинское оборудование",
            href: "/category/medicinskoe-oborudovanie",
          },
          {
            title: "Кислородные концентраторы",
            href: "/category/koncentratory-kisloroda",
          },
          { title: "Концентратор кислорода Армед 7F-5BW " },
        ]}
      />
      <section className="container mb-20 grid gap-x-10 gap-y-6 items-start grid-cols-1 xl:grid-cols-[minmax(450px,4fr)_minmax(0,3fr)_minmax(0,2fr)] 3xl:grid-cols-[724px_minmax(0,3fr)_minmax(0,2fr)]">
        <Gallery />
        <ProductInfo onTabChange={handleTabFromInfo} />
        <ProductPurchasePanel />
      </section>
      <section ref={tabsRef} className="container">
        <Tabs
          items={productTabsData}
          value={tab}
          onChange={setTab}
          className="flex items-center mb-8"
        />
        {tab && tabContent[tab]}
      </section>
    </main>
  );
};

export default ProductView;
