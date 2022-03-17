import React from "react";
import CarouselScreen from "../components/carousel/CarouselScreen";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import ProductCategory from "../components/product-category/ProductCategory";

function Homepage() {
  return (
    <div>
      <Navbar />
      <CarouselScreen />
      <ProductCategory />
      <Footer />
    </div>
  );
}

export default Homepage;
