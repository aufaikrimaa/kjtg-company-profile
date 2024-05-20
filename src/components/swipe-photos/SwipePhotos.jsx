import React, { useState, useEffect, useRef } from "react";
import loadPhotos from "../data/photoData";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swipe-photos.css";

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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

  const myElementRefs = useRef([]);

  // Fungsi untuk menambah kelas 'show' jika elemen berada di viewport
  const showElementsOnScroll = () => {
    myElementRefs.current.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("show");
      }
    });
  };

  useEffect(() => {
    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", showElementsOnScroll);

    // Menjalankan fungsi saat komponen dimuat
    showElementsOnScroll();

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", showElementsOnScroll);
    };
  }, []);

  // Mengambil referensi untuk setiap elemen dengan kelas 'myElement'
  const setRefs = (el) => {
    if (el && !myElementRefs.current.includes(el)) {
      myElementRefs.current.push(el);
    }
  };

  return (
    <>
      <div className="photos flex pt-10 lg:pt-4 md:pt-1 sm:pt-0 px-8 md:px-6 sm:px-4 h-[75vh] md:h-[16rem] sm:h-[8rem]">
        <Swiper
          ref={setRefs}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          speed={1000}
          grabCursor={true}
          loop={true}
          className="myElement swiper-photo self-center"
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
    </>
  );
}

export default SwipePhotos;
