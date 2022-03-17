import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import ViewOrder from "../components/order/ViewOrder";
import Container from "../utils/Container/Container";

function Order() {
  return (
    <div>
      <Navbar />
      <Container>
        <ViewOrder />
      </Container>
      <Footer />
    </div>
  );
}

export default Order;
