import { useEffect, useRef } from "react";
import "./hero.css";

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

function Hero() {
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
    <div className="hero relative flex h-[100vh] md:h-[60vh] sm:h-[40vh]">
      <div className="container text-white self-end">
        <div className="px-16 md:px-8 sm:px-4 pb-20 lg:pb-16 md:pb-10 sm:pb-4">
          <div>
            <div
              className="myElement text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4 lg:mb-3 md:mb-3 sm:mb-2"
              ref={setRefs}
            >
              Komunitas <span className="text-[#FFAA00]">Jeep</span>
            </div>
            <div
              className="myElement text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 lg:mb-3 md:mb-3 sm:mb-2"
              ref={setRefs}
            >
              <span className="text-[#FFAA00]">Tour</span> Galunggung
            </div>
            <div
              className="myElement text-2xl lg:text-xl md:text-lg sm:text-[0.65rem] font-medium leading-10 lg:leading-9 sm:leading-5"
              ref={setRefs}
            >
              Kami adalah Jeep Tour Galunggung pertama!
              <br />
              Kami berupaya menyediakan layanan dan kualitas terbaik!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
