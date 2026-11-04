import type { IconName } from "@/shared/icon/type";

export type SolutionFeature = {
  icon: IconName;
  title: string;
  text: string;
};

export type SolutionButton = {
  label: string;
  href?: string;
  variant: "accent" | "secondary";
  external?: boolean;
};

export type SolutionMarketplace = {
  href: string;
  image: string;
  alt: string;
};

export type SolutionCard = {
  id: string;
  title: string;
  text: string;
  features: SolutionFeature[];
  buttons?: SolutionButton[];
  marketplaces?: {
    caption: string;
    items: SolutionMarketplace[];
  };
};

export const solutionsData: SolutionCard[] = [
  {
    id: "dealers",
    title: "Станьте дилером",
    text: "Быстрая отгрузка с собственных складов. Полный комплект документации и специальные оптовые цены",
    features: [
      {
        icon: "delivery-truck",
        title: "98% заказов",
        text: "Отгружаем за 24 часа с момента обращения",
      },
      {
        icon: "warning-triangle",
        title: "Минпромторг РФ",
        text: "Выигрывайте госзакупки и тендеры с проверенной медтехникой",
      },
      {
        icon: "flash",
        title: "43+ новинки",
        text: "Выпустили за 2025 год",
      },
      {
        icon: "clock",
        title: "15 минут",
        text: "Время составления индивидуального КП по вашему заказу",
      },
      {
        icon: "book",
        title: "Поддержка и обучение персонала",
        text: "Инструкции, вебинары и консультации помогают быстро освоить медико-технику и эффективно использовать в работе",
      },
      {
        icon: "check",
        title: "Максимум внимания",
        text: "Оптовые цены и спец.предложения, возможность возврата НДС. Отсрочка платежа. ЗДО. Личный кабинет и Персональный менеджер",
      },
    ],
    buttons: [
      { label: "Перейти в каталог", href: "/catalog", variant: "accent" },
      { label: "Стать партнером", variant: "secondary" },
    ],
  },
  {
    id: "clinics",
    title: "Оборудуйте клинику",
    text: "Надёжное оборудование для клиники и медицинских центров. Индивидуальный подбор оборудования под ваши цели и сферу деятельности",
    features: [
      {
        icon: "package",
        title: "99% товаров",
        text: "В наличии на собственных складах в Москве и МО",
      },
      {
        icon: "badge-check",
        title: "100% соответствие законодательству РФ",
        text: "Оборудование сертифицировано и может безопасно использоваться в клиниках и медучреждениях",
      },
      {
        icon: "map-pin",
        title: "99% запчастей в наличии на складах",
        text: "Официальная гарантия и сеть сервисных центров обеспечивают быстрый ремонт и поддержку оборудования",
      },
      {
        icon: "shield-check",
        title: "Сертификация и юридическая чистота",
        text: "Вся продукция имеет полный комплект документации и соответствует требованиям законодательства РФ",
      },
    ],
    buttons: [
      {
        label: "Подобрать оборудование",
        href: "/catalog?tab=medical",
        variant: "secondary",
      },
    ],
  },
  {
    id: "marketplaces",
    title: "Закажите на маркетплейсах",
    text: "Медицинское оборудование и средства реабилитации, проверенные временем и нашими клиентами",
    features: [
      {
        icon: "user-check",
        title: "3 500 000+",
        text: "Проданных товаров для личного использования",
      },
      {
        icon: "star",
        title: "4,9",
        text: "Рейтинг компании на маркетплейсах",
      },
      {
        icon: "chat-bubble",
        title: "387 000",
        text: "Отзывов клиентов",
      },
      {
        icon: "page",
        title: "Оплата сертификатом СФР",
        text: "Товары можно оплатить сертификатом СФР",
      },
      {
        icon: "hand",
        title: "Современные и удобные устройства",
        text: "Каждый товар разработан и произведен с учётом всех потребностей пользователей и соответствует нормам и требованиям законодательства РФ",
      },
      {
        icon: "wrench",
        title: "50+ сервисных центров по РФ",
        text: "Менее 1% рекламаций: большинство покупателей не сталкиваются с необходимостью обращения в сервис",
      },
    ],
    marketplaces: {
      caption: "Товары «Армед» доступны на маркетплейсах",
      items: [
        {
          href: "https://www.wildberries.ru/seller/armed",
          image: "wb.svg",
          alt: "Wildberries",
        },
        {
          href: "https://www.ozon.ru/seller/ofitsialnyy-magazin-armed/",
          image: "ozon.svg",
          alt: "Ozon",
        },
      ],
    },
  },
];
