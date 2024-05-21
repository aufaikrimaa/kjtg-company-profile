import { useEffect, useRef } from "react";
import bg from "../../assets/images/bg-tutor.svg";
import "./tutor.css";

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

function Tutor() {
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

  const data1 = [
    {
      no: "1",
      desc: "Buka website atau kunjungi Instagram resmi KJTG",
      mt: "6rem",
    },
    {
      no: "2",
      desc: "Pilih paket yang tersedia sesuai keinginan di menu Paket Wisata",
      mt: "4rem",
    },
    {
      no: "3",
      desc: "Hubungi kami melalui kontak di bawah atau klik icon WhatsApp",
      mt: "2rem",
    },
  ];

  const data2 = [
    {
      no: "4",
      desc: "Diskusikan perjalanan wisata offroad anda dengan kami",
      mt: "4rem",
    },
    {
      no: "5",
      desc: "Lakukan pembayaran sesuai dengan diskusi sebelumnya",
      mt: "2rem",
    },
    {
      no: "6",
      desc: "Datang ke tempat offroad tepat waktu dan have fun bersama kami !",
      mt: "0rem",
    },
  ];

  return (
    <>
      <div className="tutor flex px-8 pb-8 3xl:pb-24 justify-center h-[90vh] sm:h-[80vh] md:h-[70vh]">
        <div className="self-center text-white">
          <div className="flex flex-row sm:grid md:grid">
            <div className="tutor-content basis-1/2 sm:basis-full md:basis-full flex lg:justify-end xl:justify-end 2xl:justify-end 3xl:justify-end 4xl:justify-end w-[45vw]">
              <div>
                <div
                  ref={setRefs}
                  className="myElement tutor-title text-2xl font-bold pb-1 relative pt-2 pl-6 sm:pl-2 mb-[2rem] sm:mb-[0rem] sm:text-xl"
                >
                  Cara Order
                </div>
                <div className="flex">
                  {data1.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginTop: item.mt,
                      }}
                      ref={setRefs}
                      className="myElement h-[12rem] w-[12rem] lg:h-[11rem] lg:w-[11rem] sm:h-[8rem] sm:w-[8rem]"
                    >
                      <div>
                        <img
                          src={bg}
                          className="absolute h-[12rem] sm:h-[8rem]"
                        />
                      </div>
                      <div className=" text-5xl sm:text-3xl font-bold w-12 h-12 sm:w-8 sm:h-8 flex justify-center relative">
                        <div className="self-center"> {item.no}</div>
                      </div>
                      <div className="text-xs sm:text-[0.5rem] p-2 sm:p-0 flex justify-center pl-6 sm:pl-5 pr-3 sm:pr-1 relative">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tutor-content basis-1/2 sm:basis-full md:basis-full flex justify-start">
              <div>
                <div className="flex">
                  {data2.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginTop: item.mt,
                      }}
                      ref={setRefs}
                      className="myElement h-[12rem] w-[12rem] lg:h-[11rem] lg:w-[11rem] sm:h-[8rem] sm:w-[8rem]"
                    >
                      <div>
                        <img
                          src={bg}
                          className="absolute h-[12rem] sm:h-[8rem]"
                        />
                      </div>
                      <div className=" text-5xl sm:text-3xl font-bold w-12 h-12 sm:w-8 sm:h-8 flex justify-center relative">
                        <div className="self-center"> {item.no}</div>
                      </div>
                      <div className="text-xs sm:text-[0.5rem] p-2 sm:p-0 flex justify-center pl-6 sm:pl-5 pr-3 sm:pr-1 relative">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  ref={setRefs}
                  className="myElement pb-1 flex justify-end mt-12 sm:mt-6 md:mt-8 sm:px-4"
                >
                  <div>
                    <div className="text-xl sm:text-lg font-bold flex justify-center">
                      Selamat berwisata !
                    </div>
                    <p className="sm:text-sm flex sm:justify-center sm:text-center md:justify-center md:text-center">
                      Ayo have fun bareng Komunitas Jeep Tour Galunggung !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tutor;
