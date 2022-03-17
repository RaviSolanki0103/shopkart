import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Container from "../utils/Container/Container";
import ViewOrderTrack from "../components/order-track/ViewOrderTrack";

function OrderTrack() {
  return (
    <div>
      <Navbar />
      <Container>
        <ViewOrderTrack />
      </Container>
      <Footer />
    </div>
  );
}

export default OrderTrack;
