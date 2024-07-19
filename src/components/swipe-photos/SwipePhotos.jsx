import React, { useState, useEffect } from "react";
import loadPhotos from "../data/photoData";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swipe-photos.css";

function SwipePhotos() {
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [firstSlideLoaded, setFirstSlideLoaded] = useState(false);

  useEffect(() => {
    loadPhotos()
      .then((loadedPhotos) => {
        setPhotos(loadedPhotos);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat memuat foto:", error);
      });
  }, []);

  useEffect(() => {
    if (loaded && photos.length > 0 && !firstSlideLoaded) {
      const firstSlide = document.querySelector(
        ".swiper-slide-photos:first-child img"
      );
      if (firstSlide) {
        firstSlide.classList.add("active");
        setFirstSlideLoaded(true);
      }
    }
  }, [loaded, photos, firstSlideLoaded]);

  const handleSlideOnChange = (swiper) => {
    const slides = swiper.slides;
    const screenWidth = window.innerWidth;

    slides.forEach((slide, index) => {
      const img = slide.querySelector("img");
      let indexOffset = 1;
      if (screenWidth >= 1100) {
        indexOffset = 2;
      }
      if (index === swiper.activeIndex + indexOffset) {
        img.style.opacity = 1;
        img.classList.add("active");
      } else {
        img.style.opacity = 0.5;
        img.classList.remove("active");
      }
    });
  };

  return (
    <div className="photos flex pt-10 lg:pt-4 md:pt-1 sm:pt-0 px-8 md:px-6 sm:px-4 h-[30rem] md:h-[16rem] sm:h-[8rem]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        speed={1000}
        grabCursor={true}
        loop={true}
        className="swiper-photo self-center"
        onSlideChange={handleSlideOnChange}
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
      >
        {loaded &&
          photos.map((img, index) => (
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
  );
}

export default SwipePhotos;
