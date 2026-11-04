"use client";
import CompanyStats from "@/widgets/company-stats";
import { companyStatsHomeData } from "../data/company-stats.data";
import SolutionsSlider from "./SolutionsSlider";
import SocialMedia from "./SocialMedia";
import TabsContent from "./tabs-content";
import CardsSlider from "@/widgets/cards-slider";
import { promoBannersData } from "../data/promo-banners.data";
import PromoBannerCard from "./PromoBannerCard";


import Reviews from "@/widgets/reviews";
import NewsArticles from "@/widgets/news-articles";

const HomeView = () => {
  return (
    <main className="pt-6 pb-30">
      <CardsSlider
        className="pb-20"
        data={promoBannersData}
        Card={PromoBannerCard}
      />
      <CompanyStats data={companyStatsHomeData} />
      <SolutionsSlider />
      <SocialMedia />
      <TabsContent />
      <Reviews/>
      <NewsArticles/>
    </main>
  );
};

export default HomeView;
