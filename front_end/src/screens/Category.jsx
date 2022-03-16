import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import ProductListing from "../components/product-listing/ProductListing";

function Category() {
  return (
    <div>
      <Navbar />
      <ProductListing />
      <Footer />
    </div>
  );
}

export default Category;
