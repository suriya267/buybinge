import "./App.css";
import "./styles/fonts.css";
import Navigate from "./Navigates";
import { createContext, useEffect, useState } from "react";

export const ProductCountContext = createContext<any>({});

function App() {
  const [products, setProducts] = useState<any>([]);
  const [showProducts, setShowProducts] = useState<any>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [cartStack, setCartStack] = useState<any>([]);
  const [cartStackCopy, setCartStackCopy] = useState<any>([]);
  const [cartCount, setCartCount] = useState<any>(0);
  const [searchInput, setSearchInput] = useState<String>("");
  const [isView, setIsView] = useState<any>(false);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCartCount(cartStack?.length);
  }, [cartStack]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setShowProducts(data);
      });
  };

  const addItemToCard = (item: any) => {
    if (
      cartStack?.some((selected: any) => selected?.id === item?.id) === false
    ) {
      let tempObj = item;

      tempObj["qty"] = 1;
      setCartStack((prev: any) => [...prev, tempObj]);
      setCartStackCopy((prev: any) => [...prev, tempObj]);
      setToastMessage("Item added to cart!");
    } else {
      setToastMessage("Item already added to the cart");
    }
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast === true) {
      setTimeout(() => {
        setShowToast(false);
        setToastMessage("");
      }, 2600);
    }
  }, [showToast]);

  const removeItemToCard = (id: any) => {
    const filteredValue = cartStack.filter((item: any) => item?.id !== id);
    setCartStack(filteredValue);
    setCartStackCopy(filteredValue);
  };

  const searchProduct = (searchItem: any) => {
    setSearchInput(searchItem);
  };

  useEffect(() => {
    if (isView !== true) {
      if (searchInput === "") {
        getProducts();
      } else {
        const filteredItems = showProducts?.filter((item: any) => {
          return item?.title?.toLowerCase().includes(searchInput.toLowerCase());
        });
        setProducts(filteredItems);
      }
    }

    if (isView === true) {
      const filteredCartItems = cartStackCopy?.filter((item: any) => {
        return item?.title?.toLowerCase().includes(searchInput.toLowerCase());
      });
      setCartStack(filteredCartItems);
    }
  }, [searchInput]);

  const increaseCount = (id: number) => {
    const tempData = cartStack?.map((item: any) => {
      let tempObj = item;
      if (item?.id === id) {
        tempObj["qty"] = tempObj["qty"] + 1;
      }
      return tempObj;
    });

    setCartStack(tempData);
    setCartStackCopy(tempData);
  };

  const decreaseCount = (id: number) => {
    const tempData = cartStack?.map((item: any) => {
      let tempObj = item;
      if (item?.id === id) {
        if (tempObj["qty"] > 1) {
          tempObj["qty"] = tempObj["qty"] - 1;
        }
      }
      return tempObj;
    });
    setCartStack(tempData);
    setCartStackCopy(tempData);
  };

  return (
    <ProductCountContext.Provider
      value={{
        products,
        cartCount,
        searchProduct,
        searchInput,
        cartStack,
        setShowToast,
        setToastMessage,
        addItemToCard,
        showToast,
        toastMessage,
        removeItemToCard,
        increaseCount,
        decreaseCount,
        setIsView,
      }}
    >
      <Navigate />
    </ProductCountContext.Provider>
  );
}

export default App;
