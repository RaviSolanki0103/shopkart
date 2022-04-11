import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Payment from "../components/payment/Payment";
import Container from "../utils/Container/Container";

function PaymentScreen() {
  return (
    <div>
      <Navbar />
      <Container>
        <Payment />
      </Container>
      <Footer />
    </div>
  );
}

export default PaymentScreen;
