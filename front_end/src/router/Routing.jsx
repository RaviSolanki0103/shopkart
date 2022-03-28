import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
import Profilescreen from "../screens/Profilescreen";
import ManageAddress from "../screens/ManageAddress";
import AddProduct from "../screens/AddProduct";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/product" element={<SpecificProduct />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/profile" element={<Profilescreen />} />
        <Route exact path="/address" element={<ManageAddress />} />
        <Route exact path="/product-category/:id" element={<Category />} />
        <Route exact path="/product/:id" element={<SpecificProduct />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default Routing;
