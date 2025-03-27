import ProductCard from "../CommonComponent/ProductCard";
import { useContext } from "react";
import { ProductCountContext } from "../App";
import Header from "../CommonComponent/Header";

const ViewCart = () => {
  const { cartStack, removeItemToCard, increaseCount, decreaseCount } =
    useContext(ProductCountContext);

  const totalPrice = () => {
    return cartStack.reduce(
      (prev: number, current: any) => (current?.price + prev) * current?.qty,
      0
    );
  };

  const discountPrice = () => {
    const discountAmount = (totalPrice() * 10) / 100;
    const discountPrice = totalPrice() - discountAmount;

    return discountPrice;
  };

  return (
    <>
      <div className="sticky top-0 z-1 shadow-md bg-green-400">
        <Header isView={true} />
      </div>
      {cartStack?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-[15px] w-full ">
          {cartStack?.map((item: any, index: number) => (
            <div className="col-span-1" key={index}>
              <ProductCard
                product={item}
                removeItemToCard={removeItemToCard}
                isView={true}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center font-[Roboto-Bold] text-gray-400 text-3xl h-[80vh] w-[100vw]">
          <div>Your cart is empty</div>
        </div>
      )}

      {cartStack?.length > 0 && (
        <div className="flex justify-end mt-10 mr-8">
          <div>
            <div className="flex items-center">
              <div className="font-[Roboto-Medium]">{"Total Price : "}</div>
              <div className="font-[Roboto-Regular]">
                ₹ {Math.round(totalPrice() * 87.15)}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="font-[Roboto-Medium]">{"Discount Price : "}</div>
              <div className="font-[Roboto-Regular]">
                ₹ {Math.round(discountPrice() * 87.15)}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="font-[Roboto-Medium]">{"Discount Rate : "}</div>
              <div className="font-[Roboto-Regular]">10%</div>
            </div>
            <div className="mt-5">
              <button className="font-[Roboto-Medium] cursor-pointer bg-yellow-400 text-stone-950 pl-2 pr-2 h-[2.3rem]">
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCart;
