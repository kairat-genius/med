import Advantages from "./Advantages";
import Marketplaces from "./Marketplaces";
import Purchase from "./Purchase";

const ProductPurchasePanel = () => {
  return (
    <div className="flex flex-col sm:flex-row xl:flex-col gap-4">
      <Purchase />
      <div className="flex flex-col gap-4">
        <Marketplaces />
        <Advantages/>
      </div>
    </div>
  );
};

export default ProductPurchasePanel;
