"use client";
import Tabs from "@/shared/ui/tabs";
import CardsSlider from "@/widgets/cards-slider";
import { useState } from "react";
import { TabBannerCard } from "./TabBannerCard";
import { tabBanners, TabId, TABS } from "../../data/tabs.data";

import DealersContent from "./DealersContent";
import PersonalContent from "./PersonalContent";
import MedicalContent from "./MedicalContent";

const TabsContent = () => {
  const [tab, setTab] = useState<TabId>("dealers");
  return (
    <div className="mb-20">
      <Tabs
        items={[...TABS]}
        value={tab}
        onChange={(value) => setTab(value as TabId)}
        className="flex items-center justify-center container mb-8"
      />
      <CardsSlider
        key={tab}
        data={tabBanners[tab]}
        Card={TabBannerCard}
        className="mb-20"
      />
      {tab === "dealers" && <DealersContent />}
      {tab === "medical" && <MedicalContent />}
      {tab === "personal" && <PersonalContent />}
    </div>
  );
};

export default TabsContent;
