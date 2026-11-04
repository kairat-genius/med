import Icon from "@/shared/icon";

const Advantages = () => {
  return (
    <article className="bg-background rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Icon
          icon="delivery-truck"
          className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
        />
        <p className="font-semibold text-16">Отгрузка - сегодня</p>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="map-pin" className="w-5 h-5 xl:w-[24px] xl:h-[24px]" />
        <p className="font-semibold text-16">Доставка по всей РФ</p>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="shield-check" className="w-5 h-5 xl:w-[24px] xl:h-[24px]" />
        <p className="font-semibold text-16">Полный комплект документов</p>
      </div>
    </article>
  );
};

export default Advantages;
