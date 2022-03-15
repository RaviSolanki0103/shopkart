import React from "react";
import { Carousel } from "antd";
import "./carousel.css";

function CarouselScreen() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div className="carousel-img-one"></div>
        </div>
        <div className="carousel-img-one"></div>
        <div className="carousel-img-one"></div>
        <div className="carousel-img-one"></div>
      </Carousel>
    </div>
  );
}

export default CarouselScreen;
