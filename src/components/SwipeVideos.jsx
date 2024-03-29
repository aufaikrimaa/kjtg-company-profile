import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import videos from "./data/videoData";
import instagram from "../assets/images/instagram-color.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./css/swipe-videos.css";
import "./css/gallery-videos.css";

export default function SwipeVideos() {
  return (
    <>
      <div className="videos text-white px-16 pt-12">
        <div className="mb-8">
          <h1 className="gsvideos-title text-2xl flex justify-center font-bold mb-4 pb-1 relative">
            Dokumentasi Video
          </h1>
        </div>
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          pagination={{
            type: "fraction",
          }}
          modules={[FreeMode, Pagination]}
          className="swiper-photos"
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={item.cover}
                alt={`image ${index}`}
                crossOrigin="anonymous"
                className="cover-videos h-[20rem] rounded-md"
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
        <div className="grid place-content-end mt-4">
          <Link
            to="/gallery"
            className="border-2 border-white rounded-full px-2 cursor-pointer hover:bg-white hover:text-[#FFAA00] font-bold transition-colors duration-300 ease-in-out transition-background-color duration-300 ease-in-out"
          >
            Lihat lebih banyak
          </Link>
        </div>
      </div>
    </>
  );
}
