import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import One from "../../Image/image 1.png";
import Two from "../../Image/image 2.jpg";
import Three from "../../Image/image 3.jpg";
import CarouselCard from "../common/CarouselCard";
import Left from "../../Image/left.svg";
const CarouselComponent = () => {
  return (
    <Carousel showIndic showThumbs={false} showStatus={false}>
      <div
        className="relative h-100%"
        renderArrowNext={() => {
          return (
            <div
              id="left"
              className="relative w-[36px] h-[36px] bg-gradient-to-r from-[#ffffff]/40
        to-[#999999]/40 rounded-full border-white/10"
            >
              <img
                src={Left}
                alt="left icon"
                className="absolute left-1/2 top-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          );
        }}
      >
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
