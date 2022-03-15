
import React from "react";
import CarouselScreen from "../components/carousel/CarouselScreen";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ProductCategory from "../components/product-category/ProductCategory";

function Homepage() {
  return (
    <div>
      <Navbar />
      <CarouselScreen/>
      <ProductCategory/>
      <Footer/>
    </div>
  );
}

export default Homepage;
