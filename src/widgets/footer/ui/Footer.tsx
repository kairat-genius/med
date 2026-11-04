"use client";

import Link from "next/link";
import Icon from "@/shared/icon";

const Footer = () => {
  return (
    <footer className="pb-27.5 xs:pb-32.5 pt-10 xl:py-10 xxl:py-20 bg-background rounded-t-3xl text-18">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="gap-10 xl:gap-20 flex flex-wrap lg:flex-nowrap flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full items-center lg:items-start text-center lg:text-start">
              <Link href="/" className="mb-4" aria-label="Главная страница">
                <img src="/static-media/logo.svg" alt="Армед" />
              </Link>
              <p className="text-16 mb-6">
                © 1994–2026 Армед. Все права защищены
              </p>
              <p className="max-w-[457px] text-secondary text-16 mb-10">
                Данный интернет-сайт и&nbsp;материалы, размещённые на&nbsp;нем,
                носят исключительно информационный характер
                и&nbsp;ни&nbsp;при&nbsp;каких условиях не&nbsp;являются
                публичной офертой, определяемой положениями статьи
                437&nbsp;Гражданского кодекса&nbsp;РФ.
              </p>
              <article className="flex flex-col items-center lg:items-start">
                <h4 className="text-20 font-bold mb-4 leading-[1.2]">
                  Всегда на связи
                </h4>

                <ul className="flex flex-wrap gap-2">
                  <li>
                    <a
                      href="https://t.me/+CrZBJm_sbp85OThi"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="rounded-full w-11 h-11 xl:w-13 xl:h-13 block border-2 border-transparent hover:border-accent transition-colors duration-300"
                      aria-label="Официальный канал «Армед» в Telegram"
                    >
                      <Icon
                        icon="telegram"
                        aria-hidden="true"
                        className="w-full h-full"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://max.ru/join/4wdarfBo8TnGrbYzJHj6EJg8fN7zcnVL3M_RAPPUTfk"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="rounded-full w-11 h-11 xl:w-13 xl:h-13 block border-2 border-transparent hover:border-accent transition-colors duration-300"
                      aria-label="Официальный канал «Армед» в MAX"
                    >
                      <Icon
                        icon="max"
                        aria-hidden="true"
                        className="w-full h-full"
                      />
                    </a>
                  </li>
                </ul>
              </article>
            </div>
            <div className="flex flex-col min-w-[215px] items-center md:items-start">
              <h4 className="text-20 font-bold leading-[1.2] mb-6">
                Покупателям
              </h4>
              <ul className="flex flex-col gap-4 items-center md:items-start">
                <li>
                  <Link href="/service">Сервисные центры</Link>
                </li>
                <li>
                  <Link href="/dealers">Где купить</Link>
                </li>
                <li>
                  <Link href="/info/oplata">Заказ и оплата</Link>
                </li>
                <li>
                  <Link href="/info/dostavka">Доставка для физ. лиц</Link>
                </li>
                <li>
                  <Link href="/info/vozvrat-i-obmen">Возврат и обмен</Link>
                </li>
                <li>
                  <Link href="/partner">Партнёрам и дилерам</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col min-w-[215px] items-center md:items-start">
              <h4 className="text-20 font-bold leading-[1.2] mb-6">Компания</h4>
              <ul className="flex flex-col gap-4 items-center md:items-start">
                <li>
                  <Link href="/about">О компании</Link>
                </li>
                <li>
                  <Link href="/edo">ЭДО</Link>
                </li>
                <li>
                  <Link href="/cases">Кейсы</Link>
                </li>
                <li>
                  <Link href="/reviews">Отзывы</Link>
                </li>
                <li>
                  <Link href="/vacancies">Вакансии</Link>
                </li>
                <li>
                  <Link href="/news">Новости</Link>
                </li>
                <li>
                  <Link href="/articles">Статьи</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-center md:items-end">
              <h4 className="text-20 font-bold leading-[1.2]">Контакты</h4>
              <ul className="flex flex-col gap-4 whitespace-nowrap">
                <li className="flex flex-col gap-1 items-center md:items-end">
                  <a
                    href="tel:84956362825"
                    rel="noopener noreferrer"
                    className="text-primary text-16 font-bold"
                  >
                    8 (495) 636-28-25
                  </a>
                  <span className="text-[12px] 3xl:text-[14px]">
                    для юридических лиц
                  </span>
                </li>
                <li className="flex flex-col gap-1 items-center md:items-end">
                  <a
                    href="mailto:sales@armed.ru"
                    rel="noopener noreferrer"
                    className="text-primary text-16 font-bold"
                  >
                    sales@armed.ru
                  </a>
                  <span className="text-[12px] 3xl:text-[14px]">
                    для юридических лиц
                  </span>
                </li>
              </ul>
              <Link
                href="/contacts"
                className="text-secondary hover:text-accent underline underline-offset-4 text-[14px]"
              >
                Все контакты
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="max-w-300 mb-8 text-center text-secondary font-bold text-24 leading-[1.2]">
              ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, ПЕРЕД&nbsp;ИСПОЛЬЗОВАНИЕМ
              <br /> НЕОБХОДИМО ОЗНАКОМИТЬСЯ С&nbsp;ИНСТРУКЦИЕЙ
              И&nbsp;ПРОКОНСУЛЬТИРОВАТЬСЯ С&nbsp;ВРАЧОМ
            </h3>
            <div className="flex-col lg:flex-row text-[14px] flex items-center gap-4 text-secondary font-semibold underline underline-offset-4 text-center">
              <Link href="/privacy-policy" className="hover:text-accent">
                Политика в отношении защиты и обработки персональных данных
              </Link>
              <Link href="/privacy-personal" className="hover:text-accent">
                Политика конфиденциальности персональной информации
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
