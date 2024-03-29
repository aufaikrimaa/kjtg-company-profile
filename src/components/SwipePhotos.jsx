import React, { useState, useEffect } from "react";
import imgUrl from "./data/photoData";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/swipe-photos.css";

function SwipePhotos() {
  useEffect(() => {
    const firstSlide = document.querySelector(
      ".swiper-slide-photos:first-child img"
    );
    firstSlide.classList.add("active");
  }, []);

  const handleSlideOnChange = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      const img = slide.querySelector("img");
      if (index === swiper.activeIndex + 2) {
        img.style.opacity = 1;
        img.classList.add("active");
      } else {
        img.style.opacity = 0.5;
        img.classList.remove("active");
      }
    });
  };
  return (
    <>
      <div className="photos flex pt-10 lg:pt-4 px-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          speed={1000}
          grabCursor={true}
          slidesPerView={5}
          loop={true}
          className="swiper-photo self-center"
          onSlideChange={handleSlideOnChange}
        >
          {imgUrl.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide-photos">
              <img
                src={img}
                alt={`image ${index}`}
                className="img-swipe rounded-md"
                crossOrigin="anonymous"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default SwipePhotos;
