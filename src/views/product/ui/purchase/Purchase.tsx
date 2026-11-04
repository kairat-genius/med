import Icon from "@/shared/icon";
import { Button } from "@/shared/ui/action";

const Purchase = () => {
  return (
    <article className="bg-background rounded-2xl p-6 flex flex-col gap-4">
      <div className="px-4 py-2 bg-white rounded-2xl text-center flex items-center justify-center">
        <p className="text-28 font-semibold">
          16&nbsp;490 <span>₽</span>
        </p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-28 text-accent font-semibold">-3%</p>
        <p className="text-16">на первый заказ</p>
      </div>
      <div className="flex items-center flex-col">
        <p className="text-16 mb-1 text-center">Для оформления заказа</p>
        <div className="text-center">
          <button className=" inline font-semibold text-16 underline transition-colors duration-300 hover:text-accent">
            войдите
          </button>
          &nbsp; или&nbsp;
          <button className="inline font-semibold text-16 underline transition-colors duration-300 hover:text-accent">
            зарегистрируйтесь
          </button>
        </div>
      </div>

      <Button
        className="text-white text-16 rounded-full font-semibold gap-2 justify-between w-full px-6 h-11 xl:h-13"
        aria-label="Открыть каталог"
      >
        <span>В корзину</span>
        <Icon
          icon="arrow-up-right"
          className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
        />
      </Button>

      <div className="flex items-center gap-2">
        <img
          src="/static-media/detail/sfr.svg"
          alt="СФР"
          className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
        />
        <p className="text-[14px] text-primary">
          Возможность оплаты сертификатом СФР
        </p>
      </div>
    </article>
  );
};

export default Purchase;
