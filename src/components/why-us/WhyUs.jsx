import React, { useState, useEffect, useRef } from "react";
import ThumbsSwiper from "../thumbs-swiper/ThumbsSwiper";
import loadPhotos from "../data/photoData";
import "./whyus.css";

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
      <div className="whyus flex sm:w-[100vw] px-16 pt-10 sm:pt-4 md:pt-4 sm:px-4 md:px-20 h-[90vh] sm:h-[22rem] md:h-[28rem] sm:justify-center md:justify-center">
        <div className="text-white self-center sm:w-[100vw]">
          <div ref={setRefs} className="myElement">
            <div className="whyus-title text-2xl flex justify-center font-bold pb-1 relative sm:text-lg">
              Mengapa KJTG ?
            </div>
          </div>
          <div className="flex flex-row lg:pt-0 2xl:pt-0 h-[32rem] lg:h-[26rem] sm:h-[16rem] md:h-[22rem]">
            <div className="basis-2/5 flex justify-center self-center sm:hidden md:hidden">
              <img
                src={photos[4]}
                alt="photo"
                className="myElement photo-whyus rounded-md"
                crossOrigin="anonymous"
                ref={setRefs}
              />
            </div>
            <div className="basis-3/5 sm:basis-0 flex justify-center">
              <div ref={setRefs} className="myElement self-center">
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
