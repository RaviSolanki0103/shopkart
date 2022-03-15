import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../screens/Category";
import Homepage from "../screens/Homepage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/product-category" element={<Category/>} />
        {/* <Route exact path="*" element={} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
