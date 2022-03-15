import React from "react";
import CarouselScreen from "../components/carousel/CarouselScreen";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <CarouselScreen/>
      <Footer />
    </div>
  );
}

export default Homepage;
