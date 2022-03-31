import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import ProductListing from "../components/product-listing/ProductListing";
import Container from "../utils/container/Container";

function Category() {
  return (
    <div>
      <Navbar />
      <Container>
        <ProductListing />
      </Container>
      <Footer />
    </div>
  );
}

export default Category;
