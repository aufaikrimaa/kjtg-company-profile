import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import videos from "../data/videoData";
import instagram from "../../assets/images/instagram-color.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./swipe-videos.css";
import "../gallery-videos/gallery-videos.css";
import { useEffect, useRef } from "react";

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

export default function SwipeVideos() {
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
    <div className="videos text-white px-16 sm:px-6 md:px-12 pt-12 sm:pt-6 h-[80vh] lg:h-[100vh] md:h-[44rem] sm:h-[26rem]">
      <div className="mb-8 lg:mb-6 sm:mb-4 md:mb-6">
        <div
          ref={setRefs}
          className="myElement gsvideos-title text-2xl flex justify-center font-bold mb-4 pb-1 relative sm:text-lg"
        >
          Dokumentasi Video
        </div>
      </div>
      <div ref={setRefs} className="myElement">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1800: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
          className="swiper-photos"
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={item.cover}
                alt={`image ${index}`}
                crossOrigin="anonymous"
                className="cover-videos h-[20rem] sm:h-[12rem] rounded-md"
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
              />
              <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram Icon"
                    className="instagram-icon rounded-xl"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        ref={setRefs}
        className="myElement grid place-content-end mt-4 md:mt-6"
      >
        <Link
          to="/gallery"
          className="sm:text-xs border-2 border-white rounded-full px-2 cursor-pointer hover:bg-white hover:text-[#FFAA00] font-bold transition-colors duration-300 ease-in-out transition-background-color duration-300 ease-in-out"
        >
          Lihat lebih banyak
        </Link>
      </div>
    </div>
  );
}
