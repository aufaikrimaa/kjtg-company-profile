import React, { useState, useEffect } from "react";
import imgUrl from "./data/photoData";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/swipe-photos.css";

function SwipePhotos() {
  useEffect(() => {
    const firstSlide = document.querySelector(".swiper-slide:first-child img");
    firstSlide.classList.add("active");
  }, []);

  return (
    <>
      <div className="photos flex">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          speed={1000}
          grabCursor={true}
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          className="swiper-photo self-center"
          onSlideChange={(swiper) => {
            const slides = swiper.slides;
            slides.forEach((slide, index) => {
              const img = slide.querySelector("img");
              if (index === swiper.activeIndex) {
                img.style.opacity = 1;
                img.classList.add("active");
              } else {
                img.style.opacity = 0.5;
                img.classList.remove("active");
              }
            });
          }}
        >
          {imgUrl.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`image ${index}`}
                className="img-swipe rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default SwipePhotos;
