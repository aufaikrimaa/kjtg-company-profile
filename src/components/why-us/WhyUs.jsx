import React, { useState, useEffect } from "react";
import ThumbsSwiper from "../thumbs-swiper/ThumbsSwiper";
import loadPhotos from "../data/photoData";
import "./whyus.css";

function WhyUs() {
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);
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
  return (
    <>
      <div className="whyus flex px-16 pt-10 sm:pt-4 md:pt-4 sm:px-4 md:px-20 h-[90vh] sm:h-[45vh] md:h-[40vh] sm:justify-center md:justify-center">
        <div className="text-white self-center sm:w-full">
          <div>
            <h1 className="whyus-title text-2xl flex justify-center font-bold pb-1 relative sm:text-lg">
              Mengapa KJTG ?
            </h1>
          </div>
          <div className="flex flex-row lg:pt-0 2xl:pt-0 h-[32rem] lg:h-[26rem] sm:h-[16rem] md:h-[22rem]">
            <div className="basis-2/5 flex justify-center self-center sm:hidden md:hidden">
              <img
                src={photos[4]}
                alt="photo"
                className="photo-whyus rounded-md"
                crossOrigin="anonymous"
              />
            </div>
            <div className="basis-3/5 flex justify-center">
              <div className="self-center">
                <ThumbsSwiper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyUs;
