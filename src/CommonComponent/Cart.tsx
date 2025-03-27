import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductCountContext } from "../App";

export default function Cart() {
  const { cartCount, cartStack,setShowToast,setToastMessage } = useContext<any>(ProductCountContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (cartStack.length > 0) {
      navigate("/view-cart");
    }else{
      setShowToast(true);
      setToastMessage("Cart is empty!")
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className="relative mt-4 mr-3 cursor-pointer"
    >
      <div className="font-[Roboto-Regular] absolute top-[-16px] text-white bg-blue-700 px-[5px] py-[1px] left-[28%] right-[10%] rounded-full text-[12px] flex items-center justify-center">
        {cartCount}
      </div>
      <div>
        <ShoppingCartOutlined />
      </div>
    </div>
  );
}
