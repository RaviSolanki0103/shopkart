import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";
import SpecificProduct from "../screens/SpecificProduct";
import Order from "../screens/Order";
<<<<<<< HEAD
import OrderTrack from "../screens/OrderTrack";
import Cart from "../screens/Cart";
import Wishlist from "../screens/Wishlist";
=======
import Profilescreen from "../screens/Profilescreen";
import ManageAddress from "../screens/ManageAddress";
>>>>>>> 00327c722d13b08675759e2fe377404116d1b49a


function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category />} />
        <Route exact path="/product" element={<SpecificProduct />} />
        <Route exact path="/order" element={<Order />} />
<<<<<<< HEAD
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/order-track" element={<OrderTrack />} />
=======
        <Route exact path="/profile" element={<Profilescreen />} />
>>>>>>> 00327c722d13b08675759e2fe377404116d1b49a
        <Route exact path="*" element={<Homepage />} />
       <Route exact path="/address" element={<ManageAddress/>} />
      </Routes>
    </div>
  );
}

export default Routing;
