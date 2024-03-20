import imgUrl from "../data/photoData";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/swipe-photos.css";

function SwipePhotos() {
  return (
    <>
      <div className="photos flex">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          autoplay={{ delay: 3000 }}
          speed={1000}
          loop={true}
          grabCursor={true}
          slidesPerView={5}
          delay={200}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: -60,
            scale: 0.9,
            slideShadows: false,
          }}
          className="swiper-photo self-center"
          onSlideChange={(swiper) => {
            const slides = swiper.slides;
            slides.forEach((slide, index) => {
              const img = slide.querySelector("img");
              if (index === swiper.activeIndex + 2) {
                img.style.opacity = 1;
              } else {
                img.style.opacity = 0.5;
              }
            });
          }}
        >
          {imgUrl.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`image ${index}`}
                className="img-swipe h-24 rounded-md opacity-transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default SwipePhotos;
