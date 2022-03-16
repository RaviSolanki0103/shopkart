import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import OrderTrack from "../components/order-track/OrderTrack";
import ViewOrder from "../components/order/ViewOrder";

function Order() {
  return (
    <div>
      <Navbar />
      {/* <ViewOrder /> */}
      <OrderTrack />
      <Footer />
    </div>
  );
}

export default Order;
