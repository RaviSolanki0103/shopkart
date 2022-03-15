import React from "react";
import { Carousel } from "antd";
import "./carousel.css";

function CarouselScreen() {
  return (
    <div>
      <Carousel autoplay>
        <div className="carousel-img-one"></div>
        <div className="carousel-img-two"></div>
        <div className="carousel-img-one"></div>
        <div className="carousel-img-two"></div>
      </Carousel>
    </div>
  );
}

export default CarouselScreen;
