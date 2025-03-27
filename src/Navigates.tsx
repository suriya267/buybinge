import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import ViewCart from "./Pages/ViewCart";

const Navigate = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/view-cart" element={<ViewCart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigate;
