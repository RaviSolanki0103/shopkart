import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ProductPage from "../components/product-page/ProductPage";
import Container from "../utils/container/Container";

function SpecificProduct() {
  return (
    <div>
      <Navbar />
      <Container>
        <ProductPage />
      </Container>
      <Footer />
    </div>
  );
}

export default SpecificProduct;
