interface productProps {
  product: any;
  addItemToCard?: any;
  removeItemToCard?: any;
  isView?: boolean;
  increaseCount?: any;
  decreaseCount?: any;
}

export default function ProductCard(props: productProps) {
  const {
    product,
    addItemToCard,
    removeItemToCard,
    isView,
    increaseCount,
    decreaseCount,
  } = props;

  const removeFromCart = (id: any) => {
    removeItemToCard(id);
  };

  return (
    <div className=" relative border border-gray-300 p-3">
      <div className="flex justify-center">
        <img className="h-[9rem]" src={product?.image} alt="Product" />
      </div>
      <div
        title={product?.title}
        className="flex items-center justify-center mt-2"
      >
        <div className="font-[Roboto-Medium] overflow-hidden text-ellipsis whitespace-nowrap">
          {product?.title}
        </div>
      </div>
      <div className="flex items-center justify-center mt-1">
        <div className="font-[Roboto-Bold] text-[#212121] ">
          ₹ {Math.round(product?.price * 87.15)}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          {isView !== true ? (
            <button
              onClick={() => addItemToCard(product)}
              className="font-[Roboto-Medium] cursor-pointer bg-green-400 text-white w-[5rem] h-[2.3rem]"
            >
              Add Cart
            </button>
          ) : (
            <div className="flex items-center">
              <div className="font-[Roboto-Bold] text-[#212121]">Qty</div>
              <div className="flex items-center ml-1">
                <div
                  onClick={() => decreaseCount(product?.id)}
                  className="cursor-pointer font-[Roboto-Bold] h-7 bg-green-500 w-6 flex items-center justify-center text-white"
                >
                  -
                </div>
                <div className="font-[Roboto-Bold] border-b border-t border-green-500 h-7 pl-2 pr-2 flex items-center justify-center">
                  {product?.qty}
                </div>
                <div
                  onClick={() => increaseCount(product?.id)}
                  className="cursor-pointer font-[Roboto-Bold] h-7 bg-green-500 w-6 flex items-center justify-center text-white"
                >
                  +
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {isView === true ? (
            <button
              onClick={() => removeFromCart(product?.id)}
              className="font-[Roboto-Medium] cursor-pointer border border-gray-500 text-gray-500 w-[5rem] h-[2.3rem]"
            >
              Remove
            </button>
          ) : (
            <button className="font-[Roboto-Medium] cursor-pointer bg-slate-700 text-white w-[5rem] h-[2.3rem]">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
