import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import One from "../../Image/image 1.png";
import Two from "../../Image/image 2.jpg";
import Three from "../../Image/image 3.jpg";
import CarouselCard from "../common/CarouselCard";
const CarouselComponent = () => {
  return (
    <div id="areas" className="flex flex-col gap-7 md:gap-16">
      <h1 className="text-[32px] md:w-[57%] md:text-[56px] leading-[110%] tracking-[-2px]  pl-5 md:pl-[60px]">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h1>
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
    </div>
  );
};

export default CarouselComponent;
