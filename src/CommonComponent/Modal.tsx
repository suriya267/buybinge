import ProductCard from "./ProductCard";

interface modalProps {
  product: any;
  setIsOpen: any;
  removeItemToCard?: any;
}
export default function Modal(props: modalProps) {
  const { product, setIsOpen, removeItemToCard } = props;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg max-h-[85%]  w-[90%] overflow-y-scroll mt-[5rem]">
        <h2 className="font-[Roboto-Bold] text-xl font-bold mb-4">Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-[15px] w-full ">
          {product?.map((item: any) => (
            <div className="col-span-1" key={item?.id}>
              <ProductCard
                product={item}
                removeItemToCard={removeItemToCard}
                isView={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="font-[Roboto-Medium] bg-red-500 text-white w-[5rem] h-[2.3rem] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
