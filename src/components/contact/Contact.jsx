import { useEffect, useRef } from "react";
import { number } from "../phoneNumber/phoneNum";
import "./contact.css";

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

function Contact() {
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

  const contactData = [
    {
      title: "Email",
      name: "komunitasjeeptourgalunggung@gmail.com",
      link: "mailto:komunitasjeeptourgalunggung@gmail.com",
    },
    {
      title: "WhatsApp",
      name: "+" + number,
      link: `whatsapp://send?phone=${number}`,
    },
    {
      title: "Telepon",
      name: "+" + number,
      link: `tel:+${number}`,
    },
  ];
  return (
    <div className="px-16 sm:px-4 bg-[#0f0f0f] h-[40rem] sm:h-[44rem] grid content-center">
      <div className="text-white">
        <div ref={setRefs} className="myElement">
          <div className="contact-title text-2xl sm:text-lg flex justify-center font-bold mb-4 pb-1 relative">
            Kontak kami
          </div>
        </div>
        <div className="flex mt-6 md:grid sm:grid px-2">
          <div
            ref={setRefs}
            className="myElement basis-2/3 md:basis-none sm:basis-none flex justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.069713821678!2d108.184115175881!3d-7.346068772268841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f56e3a6190f7d%3A0xf13d361369c9e17a!2sHotel%20Taman%20Mangkubumi%20Indah!5e0!3m2!1sen!2sid!4v1717151023968!5m2!1sen!2sid"
              loading="lazy"
              className="rounded-lg h-full w-5/6 md:w-full sm:w-full"
            />
          </div>
          <div className="sm:mt-4 md:mt-4">
            {contactData.map((data, i) => (
              <div
                key={i}
                ref={setRefs}
                className="myElement bg-[#ffaa00] rounded-lg p-3.5 mb-2 cursor-pointer"
                onClick={() => {
                  window.open(data.link, "_blank");
                }}
              >
                <div className="font-bold text-lg sm:text-sm">{data.title}</div>
                <div className="text-sm sm:text-[0.6rem]">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
