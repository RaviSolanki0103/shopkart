import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import ViewOrder from "../components/order/ViewOrder";

function Order() {
  return (
    <div>
      <Navbar />
      <ViewOrder />
      <Footer />
    </div>
  );
}

export default Order;
