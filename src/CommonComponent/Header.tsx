import SearchBar from "./SearchBar";
import "./Header.css";
import Cart from "./Cart";

export default function Header(props: any) {
  const { isView } = props;
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-8">
        <div className="col-span-2 font-[Roboto-bold] text-[35px] text-[#f0f5ff] mx-2">
          BuyBinge
        </div>
        <div className="col-span-4 flex items-center">
          <SearchBar isView={isView} />
        </div>
        {isView !== true && (
          <div className="flex items-center col-span-2 justify-end">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}
