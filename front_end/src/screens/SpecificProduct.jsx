import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ProductPage from "../components/product-page/ProductPage";

function SpecificProduct() {
  return (
    <div>
      <Navbar />
      <ProductPage/>
      <Footer />
    </div>
  );
}

export default SpecificProduct;
