"use client";
import Icon from "@/shared/icon";
import { Button } from "@/shared/ui/action";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";

const Header = () => {
  return (
    <header className="sticky z-50 -top-px xl:-top-10">
      <div className="container">
        <div className="px-6 pt-6 pb-6 xl:pb-0 xl:pt-4 flex flex-col rounded-3xl bg-background">
          <HeaderNav />
          <div className="flex items-center xl:h-27.5">
            <Link
              href="/"
              className="shrink-0 mr-auto xl:mr-6 3xl:mr-10 w-32.5 xs:w-auto"
              aria-label="Главная страница"
            >
              <img
                src="/static-media/logo.svg"
                alt="Армед"
                className="header__logo-image"
              />
            </Link>
            <div className="mr-6 hidden xl:block">
              <Button
                className="text-white bg-accent hover:bg-accent-grad min-h-13 text-16 rounded-full font-semibold gap-2 justify-between w-auto px-6"
                aria-label="Открыть каталог"
              >
                <span className="text-white">Каталог</span>
                <Icon
                  icon="menu"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </Button>
            </div>
            <div className="w-full max-w-117.5 mr-auto hidden xl:block">
              <form className="min-w-63.75">
                <input
                  type="text"
                  aria-label="Поиск"
                  placeholder="Поиск"
                  className="border-2 border-accent px-6 h-13 w-full rounded-full focus:outline-none bg-white"
                />
              </form>
            </div>
            <div className="mx-0 xl:mx-6 3xl:mx-10">
              <ul className="hidden xl:flex items-center">
                <li>
                  <button
                    type="button"
                    className="flex items-center w-17 xxl:w-23 flex-col gap-2 text-primary hover:text-accent"
                    aria-label="Войти"
                  >
                    <div
                      className="rounded-full w-13 h-13 flex items-center justify-center bg-white"
                      aria-hidden="true"
                    >
                      <Icon icon="user" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[14px] hidden xxl:block">Войти</p>
                  </button>
                </li>
                <li>
                  <Link
                    href="/favorites"
                    className="flex items-center w-17 xxl:w-23 flex-col gap-2 text-primary hover:text-accent"
                    aria-label="Избранное"
                  >
                    <div
                      className="rounded-full w-13 h-13 flex items-center justify-center bg-white"
                      aria-hidden="true"
                    >
                      <Icon icon="favorites" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[14px] hidden xxl:block">Избранное</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compare"
                    className="flex items-center w-17 xxl:w-23 flex-col gap-2 text-primary hover:text-accent"
                    aria-label="Сравнение"
                  >
                    <div
                      className="rounded-full w-13 h-13 flex items-center justify-center bg-white"
                      aria-hidden="true"
                    >
                      <Icon icon="compare" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[14px] hidden xxl:block">Сравнение</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="flex items-center w-17 xxl:w-23 flex-col gap-2 text-primary hover:text-accent"
                    aria-label="Корзина"
                  >
                    <div
                      className="rounded-full w-13 h-13 flex items-center justify-center bg-white"
                      aria-hidden="true"
                    >
                      <Icon icon="cart" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[14px] hidden xxl:block">Корзина</p>
                  </Link>
                </li>
              </ul>
              <ul className="flex xl:hidden items-center gap-4">
                <li>
                  <button
                    type="button"
                    className="cursor-pointer flex items-center justify-center w-11 h-11 text-primary bg-white rounded-full hover:text-accent"
                  >
                    <Icon icon="search" className="w-5 h-5" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-pointer  flex items-center justify-center w-11 h-11 text-primary bg-white rounded-full hover:text-accent"
                  >
                    <Icon icon="arrow-up-right" className="w-5 h-5" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-pointer flex items-center justify-center w-11 h-11 text-primary bg-white rounded-full hover:text-accent"
                  >
                    <Icon icon="phone" className="w-5 h-5" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex items-end flex-col gap-1 text-right">
              <a
                href="tel:84956362825"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-accent font-bold text-16"
              >
                8 (495) 636-28-25
              </a>
              <span className="whitespace-nowrap text-secondary text-[14px]">
                для юридических лиц
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
