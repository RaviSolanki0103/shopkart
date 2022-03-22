import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
import Profilescreen from "../screens/Profilescreen";
import ManageAddress from "../screens/ManageAddress";


function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/product" element={<SpecificProduct />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/profile" element={<Profilescreen />} />
        <Route exact path="*" element={<Homepage />} />
       <Route exact path="/address" element={<ManageAddress/>} />
      </Routes>
    </div>
  );
}

export default Routing;
