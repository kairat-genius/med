
const Marketplaces = () => {
  return (
    <article className="bg-background rounded-2xl p-6 flex flex-col gap-4">
      <p className="text-[14px] mb-2 text-secondary">
        Товар доступен на маркетплейсах
      </p>
      <ul className="flex items-center gap-2">
        <li>
          <a
            href="https://market.yandex.ru/store--armed/product/666298246?businessId=6218518&amp;sku=100942191979"
            rel="noopener noreferrer"
            target="_blank"
            className="w-10 h-10"
          >
            <img src="/static-media/marketplaces/ya.svg" alt="Яндекс Маркет" />
          </a>
        </li>
        <li>
          <a
            href="https://www.ozon.ru/product/kreslo-kolyaska-invalidnaya-armed-h-035-17-dyuymov-43sm-litye-kolesa-dlya-vzroslyh-pozhilyh-lyudey-i-246560636/?sh=Zb1pEEqSbw"
            rel="noopener noreferrer"
            target="_blank"
            className="w-10 h-10"
          >
            <img src="/static-media/marketplaces/ozon.svg" alt="Ozon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.wildberries.ru/catalog/31319905/detail.aspx?targetUrl=GP"
            rel="noopener noreferrer"
            target="_blank"
            className="w-10 h-10"
          >
            <img
              src="/static-media/marketplaces/wb.svg"
              alt="Wildberries"
            />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Marketplaces;
