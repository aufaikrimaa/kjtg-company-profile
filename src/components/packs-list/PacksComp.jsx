import bgPacks from "../../assets/images/bg-packs.svg";
import bgPacksPromo from "../../assets/images/bg-packs-promo.svg";
import dataPacks from "../data/packsData";
import jeepIcon from "../../assets/images/jeep-icon.svg";
import "./packs.css";
import { MessageCircleMore } from "lucide-react";
import { useEffect, useRef } from "react";
import { number } from "../phoneNumber/phoneNum";

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

function PacksComp() {
  const handleClick = () => {
    window.open(`whatsapp://send?phone=${number}`, "_blank");
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
    <div className="px-4 packs text-white pb-6 3xl:pb-24">
      <div className="pb-2">
        <div
          ref={setRefs}
          className="myElement packs-title text-2xl flex justify-center font-bold mb-4 pb-1 relative sm:text-xl"
        >
          Paket Wisata
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <div
          ref={setRefs}
          className="myElement text-center italic text-sm sm:text-[0.5rem]"
        >
          <div>Note : Max 7 jam (jam 17.00 sudah di titik penjemputan )</div>
          {/* <div>
              mintalah bukti pembayaran tiket pada saat pembayaran di pos
              Cipanas
            </div> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {dataPacks.map((data, index) => (
          <div
            key={index}
            className="packs-item border m-3 rounded-lg  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-103  hover:shadow-[#ffaa00] duration-300 hover:shadow-[-5px_5px_10px_rgba(255,105,135,0.3)]"
          >
            <div className="h-[48rem] w-[18rem] sm:w-auto flex flex-col">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={data.photo}
                  alt={data.title}
                  ref={setRefs}
                  className="myElement w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#0f0f0f]"></div>
              </div>
              <div className="">
                <div className="flex justify-center font-bold text-sm h-[5rem] px-1">
                  <div
                    ref={setRefs}
                    className="myElement text-center"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                </div>
                <div className="flex justify-center px-3">
                  <div
                    ref={setRefs}
                    className="myElement self-center text-xs  w-full"
                  >
                    <div className="text-sm mb-2">Fasilitas:</div>
                    {data.fasilitas.map((item, index) => (
                      <div key={index} className="">
                        <div className="flex">
                          {typeof item === "string" ? (
                            <>
                              <img
                                src={jeepIcon}
                                alt="-"
                                className="h-2 pr-2"
                              />
                              {item}
                            </>
                          ) : (
                            <>
                              <div className="flex">
                                <img
                                  src={jeepIcon}
                                  alt="-"
                                  className="h-2 pr-2"
                                />
                                {item.title}
                              </div>
                              <div className="ml-4">
                                {item.items.map((subItem, subIndex) => (
                                  <div key={subIndex}>{subItem}</div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto p-4">
                <div
                  ref={setRefs}
                  className="myElement text-lg font-bold text-center mb-2"
                >
                  {data.price}
                </div>
                <div
                  onClick={handleClick}
                  ref={setRefs}
                  className="myElement flex justify-center border-2 border-white rounded-full px-2 cursor-pointer hover:bg-white hover:text-[#FFAA00] font-bold transition-colors duration-300 ease-in-out transition-background-color duration-300 ease-in-out"
                >
                  <MessageCircleMore className="h-3 mr-0.1 self-center" />
                  Pesan Sekarang
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PacksComp;
