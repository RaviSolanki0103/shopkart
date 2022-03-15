import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Product_Listing from "../components/product-listing/Product_Listing";

function Category() {
  return (
    <div>
      <Navbar />
      <Product_Listing/>
      <Footer />
    </div>
  );
}

export default Category;
