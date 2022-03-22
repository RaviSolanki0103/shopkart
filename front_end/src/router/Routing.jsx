import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
import AddProduct from "../screens/AddProduct";
import ShowProduct from "../components/product/ShowProduct";
import OrderTrack from "../screens/OrderTrack";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/product" element={<SpecificProduct />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/getproduct" element={<ShowProduct />} />
        <Route exact path="/order-track" element={<OrderTrack />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default Routing;
