import { useContext } from "react";
import ProductCard from "../CommonComponent/ProductCard";
import Toast from "../CommonComponent/Toast";
import Header from "../CommonComponent/Header";
import { ProductCountContext } from "../App";

const HomePage = () => {
  const { products, addItemToCard, showToast, toastMessage } =
    useContext<any>(ProductCountContext);

  return (
    <>
      <div className="sticky top-0 z-1 shadow-md bg-green-400">
        <Header isView={false} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-[15px] ">
        {products?.map((item: any) => (
          <div className="col-span-1" key={item?.id}>
            <ProductCard product={item} addItemToCard={addItemToCard} />
          </div>
        ))}
      </div>
      <Toast enable={showToast} toast={toastMessage} />
    </>
  );
};

export default HomePage;
