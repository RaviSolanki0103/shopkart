import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
import OrderTrack from "../screens/OrderTrack";
import Cart from "../screens/Cart";
import Wishlist from "../screens/Wishlist";


function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/product" element={<SpecificProduct />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/order-track" element={<OrderTrack />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default Routing;
