import { ArticleType } from "@/entities/article-card/types/article.type";

export type NewsCategory = "news" | "articles";

export type NewsTag = {
  value: string;
  label: string;
};

export const NEWS_CATEGORIES = [
  { value: "news", label: "Новости" },
  { value: "articles", label: "Статьи" },
] as const;

export const newsTags: NewsTag[] = [
  { value: "achievements", label: "Достижения" },
  { value: "events", label: "Мероприятия" },
  { value: "promo", label: "Акции" },
  { value: "news", label: "Новости" },
  { value: "wholesale", label: "Оптовым партнерам" },
  { value: "novelty", label: "Новинки" },
];

export const articleTags: NewsTag[] = [
  { value: "useful", label: "Полезно знать" },
  { value: "how-to", label: "Как выбрать" },
  { value: "expert", label: "Экспертное мнение" },
  { value: "guides", label: "Инструкции" },
];
export const newsData: ArticleType[] = [
  // ── Новости ──
  {
    id: "dream-job-2026",
    category: "news",
    title:
      "АРМЕД в числе самых открытых работодателей 2026 года по версии Dream Job",
    text: "Компания АРМЕД получила официальный статус «Открытый работодатель 2026» на платформе Dream Job.",
    slug: "/news/armed-v-chisle-samykh-otkrytykh-rabotodateley-2026-goda-po-versii-dream-job/",
    image:
      "/upload/webp/other/upload/news_content/26e/o57lfv5lijpx8da3a6hfo8cyub0g1o5y/novost-novyi_-sai_t.webp",
    datetime: "2026-10-23T13:29:36",
    tags: ["achievements", "news"],
  },
  {
    id: "webinar-concentrators",
    category: "news",
    title:
      "Вебинар АРМЕД: чем отличаются 8F-10, JAY-10 и JAY-20 и как выбрать нужный концентратор для клиники или госпиталя",
    text: "Приглашаем на вебинар АРМЕД в четверг, 22 октября, в 11:00 мск.",
    slug: "/news/vebinar-armed-chem-otlichayutsya-8f-10-jay-10-i-jay-20-i-kak-vybrat-nuzhnyy-kontsentrator-dlya-klini/",
    image:
      "/upload/webp/other/upload/news_content/c5f/gnf1hx1u99x5pei480i1cxhd19qz1ht3/novost-novyi_-sai_t.webp",
    datetime: "2026-10-21T11:16:35",
    tags: ["events", "news"],
  },
  {
    id: "price-list-6",
    category: "news",
    title: "Октябрьское обновление цен: доступен прайс-лист №6 АРМЕД",
    text: "Вышел новый прайс! Стоимость на ряд товаров снижена. Самое время пересмотреть складские запасы.",
    slug: "/news/oktyabrskoe-obnovlenie-tsen-dostupen-prays-list-6-armed/",
    image:
      "/upload/webp/other/upload/news_content/c1b/5ilzfrwrf8nudd4vz3w27avquqcsttwz/novost-novyi_-sai_t.webp",
    datetime: "2026-10-20T09:54:13",
    tags: ["promo", "wholesale"],
  },
  {
    id: "price-increase-october",
    category: "news",
    title:
      "Повышение цен с 19 октября: успейте оформить заказ по действующей стоимости",
    text: "Успейте заказать по текущему прайсу и получить выгоду до 24 000 ₽ с каждой позиции!",
    slug: "/news/povyshenie-tsen-s-19-oktyabrya-uspeyte-oformit-zakaz-po-deystvuyushchey-stoimosti/",
    image:
      "/upload/webp/other/upload/news_content/790/likkf14ohb0l4f95c7rld1b87c430j2e/novost-novyi_-sai_t.webp",
    datetime: "2026-10-16T10:03:57",
    tags: ["promo", "wholesale"],
  },
  {
    id: "hh-rating",
    category: "news",
    title:
      "Компания АРМЕД принимает участие в Рейтинге работодателей HeadHunter",
    text: "Мы будем очень рады, если вы проголосуете за нас в Рейтинге работодателей HeadHunter!",
    slug: "/news/kompaniya-armed-prinimaet-uchastie-v-reytinge-rabotodateley-headhunter/",
    image:
      "/upload/webp/resize_cache/iblock/d95/rqjy8xbeo6vy52xssspltekh2i6reuxp/1584_900_1/1080_e1080.webp",
    datetime: "2026-10-13T16:14:35",
    tags: ["achievements"],
  },
  {
    id: "tonometry-ye660f-50",
    category: "news",
    title:
      "Тонометры Армед YE660F с выгодой 50%: специальная акция для партнёров",
    text: "При покупке 10 тонометров по стандартной оптовой стоимости следующие 10 доступны по 1 ₽ за прибор!",
    slug: "/news/tonometry-armed-ye660f-s-vygodoy-50-spetsialnaya-aktsiya-dlya-partnyerov/",
    image:
      "/upload/webp/resize_cache/news_content/58d/uhwo2p370ztu97l6ruj9u064xkuzo5fz/1584_900_1/novost-254.webp",
    datetime: "2026-10-12T11:38:51",
    tags: ["promo", "wholesale"],
  },
  {
    id: "jay-20-4",
    category: "news",
    title:
      "Кислородный концентратор АРМЕД JAY-20 4.0: профессиональное решение для оснащения клиник",
    text: "Кислородный концентратор Армед JAY-20 4.0 — профессиональное оборудование для реанимации, хирургических и послеоперационных отделений.",
    slug: "/news/kislorodnyy_kontsentrator_armed_jay_20_4_0_professionalnoe_reshenie_dlya_osnashcheniya_klinik_/",
    image:
      "/upload/webp/resize_cache/iblock/7ba/010myh6vck2p2a9luelfcww0ho602ay0/1584_900_1/novost-253.webp",
    datetime: "2026-10-08",
    tags: ["novelty", "news"],
  },
  {
    id: "apteka-2026",
    category: "news",
    title:
      "Вектор развития фарминдустрии: АРМЕД представил ходовые решения на выставке «АПТЕКА» 2026",
    text: "Прошедшее мероприятие продемонстрировало высокий спрос рынка фарминдустрии на наши проверенные решения.",
    slug: "/news/vektor-razvitiya-farmindustrii-armed-predstavil-khodovye-resheniya-na-vystavke-apteka-2026/",
    image:
      "/upload/webp/resize_cache/news_content/bf2/h5wyy4193450kkplwlfc456fyok80u8u/1584_900_1/novost-252.webp",
    datetime: "2026-10-06T15:34:44",
    tags: ["events", "news"],
  },
  {
    id: "recirculators-season-discount",
    category: "news",
    title:
      "Высокий спрос на рециркуляторы в сезон простудных заболеваний: скидка 1000₽ на модель 5-115 МТ",
    text: "Чтобы не упустить спрос, важно иметь ходовые модели рециркуляторов в наличии.",
    slug: "/news/vysokiy-spros-na-retsirkulyatory-v-sezon-prostudnykh-zabolevaniy-skidka-1-000-na-model-5-115-mt/",
    image:
      "/upload/webp/resize_cache/iblock/087/mjba7n50yv13atmpgj4hbcqli9aoe02m/1584_900_1/novost-251.webp",
    datetime: "2026-10-01T16:18:15",
    tags: ["promo", "novelty"],
  },

  // ── Статьи ──
  {
    id: "jay-20-4-hospitals",
    category: "articles",
    title:
      "Медицинский концентратор АРМЕД JAY-20 4.0: для больниц, ИВЛ и медицинских учреждений",
    slug: "/articles/meditsinskiy-kontsentrator-armed-jay-20-4-0-dlya-bolnits-ivl-i-meditsinskikh-uchrezhdeniy",
    image:
      "/upload/webp/resize_cache/iblock/bce/y6txgh1gr9udsuyzn1gmxmnptxrmqoug/1584_900_1/1_2-_1_-_1_.webp",
    datetime: "2026-10-08T12:01:31",
    isAudio: true,
    tags: [ "how-to"],
  },
  {
    id: "wildberries-sfr",
    category: "articles",
    title:
      "На Wildberries появилась оплата сертификатом СФР: инструкция для покупателей",
    slug: "/articles/na-wildberries-poyavilas-oplata-sertifikatom-SFR-instrukciya-dlya-pokupatelej",
    image:
      "/upload/webp/resize_cache/article_content/7df/kqiksqscuuro97uyli2stkrwp530uiw8/1584_900_1/vc-8.webp",
    datetime: "2026-10-01T12:37:26",
    tags: ["guides", "useful"],
  },
  {
    id: "mesh-nebulizers-faq",
    category: "articles",
    title: "Меш-небулайзеры: ответы на часто задаваемые вопросы",
    slug: "/articles/mesh-nebulajzery-otvety-na-chasto-zadavaemye-voprosy",
    image:
      "/upload/webp/resize_cache/iblock/c8c/5ajlo22r33j0p6svc40ngtttnkx9o847/1584_900_1/9.webp",
    datetime: "2026-09-24T12:00:00",
    isAudio: true,
    tags: ["useful",],
  },
];
