export type NavLink = {
  label: string;
  href: string;
};

export type NavLinkItem = {
  type: "link";
  label: string;
  href: string;
};

export type NavDropdownItem = {
  type: "dropdown";
  label: string;
  items: NavLink[];
};

export type NavItem = NavLinkItem | NavDropdownItem;

export const navItems: NavItem[] = [
  {
    type: "dropdown",
    label: "О нас",
    items: [
      { label: "О компании", href: "/about" },
      { label: "Вакансии", href: "/vacancies" },
      { label: "Реквизиты", href: "/rekvizity" },
      { label: "ЭДО", href: "/edo" },
    ],
  },
  { type: "link", label: "Сервис", href: "/service" },
  { type: "link", label: "Новости", href: "/news" },
  { type: "link", label: "Статьи", href: "/articles" },
  {
    type: "dropdown",
    label: "Покупателям",
    items: [
      { label: "Заказ и оплата для физ. лиц", href: "/info/oplata" },
      { label: "Доставка для физ. лиц", href: "/info/dostavka" },
      { label: "Возврат и обмен товара для физ. лиц", href: "/info/vozvrat-i-obmen" },
      { label: "Оплата сертификатом СФР", href: "/info/sertifikat-sfr" },
      { label: "Дилеры", href: "/dealers" },
    ],
  },
  { type: "link", label: "Отзывы", href: "/reviews" },
  { type: "link", label: "Контакты", href: "/contacts" },
];