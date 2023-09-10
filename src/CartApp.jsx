import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingPages } from "./pages/ShoppingPages";
import { CartPages } from "./pages/CartPages";
import { ProviderProducts } from "./context/ProviderProducts";
import { ProviderCart } from "./context/ProviderCart";

export const CartApp = () => {
  return (
    <ProviderProducts>
      <ProviderCart>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShoppingPages></ShoppingPages>}></Route>
          <Route path="/cart" element={<CartPages></CartPages>}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      </ProviderCart>
    </ProviderProducts>
  );
};
