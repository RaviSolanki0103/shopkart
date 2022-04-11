import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
import OrderTrack from "../screens/OrderTrack";
import Cart from "../screens/Cart";
import Wishlist from "../screens/Wishlist";
import Profilescreen from "../screens/Profilescreen";
import ManageAddress from "../screens/ManageAddress";
import AddProduct from "../screens/AddProduct";
import PaymentScreen from "../screens/PaymentScreen";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/ordertrack" element={<OrderTrack />} />
        <Route exact path="/profile" element={<Profilescreen />} />
        <Route exact path="/address" element={<ManageAddress />} />
        <Route exact path="/product-category/:id" element={<Category />} />
        <Route exact path="/product/:id" element={<SpecificProduct />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        {/* <Route exact path="/payment/:id/:color/:size" element={<PaymentScreen />} /> */}
        <Route exact path="/payment" element={<PaymentScreen />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default Routing;
