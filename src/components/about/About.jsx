import { useEffect, useRef } from "react";
import "./about.css";

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

function About() {
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
      <div className="about flex py-20 justify-center h-[30vh] xl:h-[60vh] lg:h-[65vh] sm:h-[26rem] md:h-[28rem]">
        <div className="container self-center text-white px-16 lg:px-0 md:px-4 sm:px-4">
          <div
            ref={setRefs}
            className="myElement about-title text-2xl sm:text-lg flex justify-center font-bold mb-4 pb-1 relative"
          >
            Tentang Komunitas
          </div>
          <div className=" text-center text-sm sm:text-[0.65rem] sm:leading-tight md:leading-snug">
            <div ref={setRefs} className="myElement mb-2">
              <p>
                Selamat datang di Komunitas Jeep Tour Galunggung, komunitas
                pertama dan terbesar yang resmi mengoperasikan sewa jeep wisata
                di kawasan Galunggung! Kami bangga menjadi pionir dalam industri
                ini dan menawarkan pengalaman berkendara yang tak terlupakan di
                jalur-jalur 4x4 terbaik.
              </p>
            </div>

            <div ref={setRefs} className="myElement mb-2">
              <h3 className="mb-1">🚙 Apa yang membuat kami berbeda?</h3>
              <p>
                Kami hanya menggunakan armada jeep asli 4x4, memastikan Anda
                mendapatkan pengalaman berkendara yang sebenarnya dan penuh
                tantangan. Dengan jejak roda 4x4 yang seluruhnya, kami menjamin
                adrenalin tinggi dan petualangan sejati di setiap perjalanan.
                Bergabunglah dengan kami dan rasakan sensasi offroad di medan
                yang menantang dengan pemandangan alam Galunggung yang
                menakjubkan. Ayo jelajahi keindahan alam dan budaya lokal dengan
                gaya petualangan yang sesungguhnya! Ikuti kami di media sosial
                kami untuk mendapatkan informasi lebih lanjut tentang paket
                wisata, rute petualangan, dan promo eksklusif. Bergabung
                sekarang dan jadilah bagian dari komunitas petualang sejati!
              </p>
            </div>

            <div ref={setRefs} className="myElement">
              <h3>
                Ayo, temukan petualangan Anda bersama Komunitas Jeep Tour
                Galunggung! 🌄🚙🔥
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
