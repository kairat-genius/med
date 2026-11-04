import type { CardsSliderType } from "@/widgets/cards-slider/types/cards-slider.type";
import {
  dealersBannersData,
  medicalBannersData,
  personalBannersData,
} from "./tabs-banners.data";
import {
    CompanyStatItem,
  companyStatsMedicalData,
  companyStatsPersonalData,
} from "./company-stats.data";

export const TABS = [
  { value: "dealers", label: "Для партнеров и дилеров" },
  { value: "medical", label: "Для медицинских организаций" },
  { value: "personal", label: "Для личного использования" },
] as const;

export type TabId = (typeof TABS)[number]["value"];

export const tabBanners: Record<TabId, CardsSliderType[]> = {
  dealers: dealersBannersData,
  medical: medicalBannersData,
  personal: personalBannersData,
};

export const tabStats: Partial<Record<TabId, CompanyStatItem[]>> = {
  medical: companyStatsMedicalData,
  personal: companyStatsPersonalData,
};
