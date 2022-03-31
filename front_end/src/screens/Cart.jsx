import React from "react";
import Wishlist from "../screens/Wishlist";
import CartCombine from "../components/cart/CartCombine";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import Container from "../utils/container/Container";

function Cart() {
  return (
    <div>
      <Navbar />
      <Container>
        <CartCombine />
      </Container>
      {/* <Wishlist /> */}
      <Footer />
    </div>
  );
}

export default Cart;
