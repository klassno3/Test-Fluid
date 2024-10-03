import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import One from "../../Image/image 1.png";
import Two from "../../Image/image 2.jpg";
import Three from "../../Image/image 3.jpg";
import CarouselCard from "../common/CarouselCard";
const CarouselComponent = () => {
  return (
    <Carousel showIndic showThumbs={false} showStatus={false}>
      <div className="relative h-100%">
        <img src={Two} className="h-full" alt="card" />

        <CarouselCard />
      </div>
      <div>
        <img src={Three} alt="card" />

        <CarouselCard />
      </div>
      <div>
        <img src={One} alt="card" />
        <CarouselCard />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
