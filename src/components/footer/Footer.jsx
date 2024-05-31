import "./footer.css";
import logo from "../../assets/images/logo-galunggung.png";
import youtube from "../../assets/images/youtube.svg";
import tiktok from "../../assets/images/tiktok.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";

function Footer() {
  const sosmedData = [
    {
      icon: youtube,
      link: "https://www.youtube.com/@komunitas_jeep_tour_galu-kz2fm",
    },
    {
      icon: tiktok,
      link: "https://www.tiktok.com/@kjtg_tasikmalaya",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/komunitas_jeep_tour_galunggung?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: facebook,
      link: "https://web.facebook.com/people/Komunitas-Jeep-Tour-Galunggung/61554666005868/",
    },
  ];

  return (
    <>
      <div className="footer h-[40vh] lg:h-[50vh] md:h-[25vh] sm:h-[12rem] md:h-[20rem]">
        <div className="flex flex row px-24 py-6 lg:px-20 md:px-16 sm:px-4 sm:py-3 3xl:py-12">
          <div className="basis-1/3 flex justify-center self-center">
            <div>
              <div className="flex text-white">
                <img src={logo} className="h-8 sm:h-5" />
                <p className="self-center font-bold text-2xl sm:text-base ml-2">
                  K J T G
                </p>
              </div>
              <div className="flex mt-2 ml-1">
                {sosmedData.map((data, index) => (
                  <img
                    key={index}
                    src={data.icon}
                    className="w-5 sm:w-4 mr-2 sm:mr-0.5 cursor-pointer"
                    onClick={() => {
                      window.open(data.link, "_blank");
                    }}
                  />
                ))}
              </div>
              <div className="mt-4">
                <p className="text-xs sm:text-[0.5rem] text-white">
                  &copy; 2024 Komunitas Jeep Tour Galunggung. <br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center text-white self-center">
            <div>
              <div>
                <h1 className="font-bold text-xl mb-4 sm:text-base">Kontak</h1>
              </div>
              <div>
                <div className="mt-2">
                  <h2 className="text-sm sm:text-xs font-bold mb-0.5">
                    Telp & SMS
                  </h2>
                  <p className="text-xs sm:text-[0.5rem]">+62-817-7981-7666</p>
                </div>
                <div className="mt-2">
                  <h2 className="text-sm sm:text-xs font-bold mb-0.5">
                    WhatsApp
                  </h2>
                  <p className="text-xs sm:text-[0.5rem]">+62-817-7981-7666</p>
                </div>
                {/* <div className="mt-2">
                  <h2 className="text-sm sm:text-xs font-bold mb-0.5">Email</h2>
                  <p className="text-xs sm:text-[0.5rem]">
                    komunitasjeeptourgalunggung@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center self-center">
            <div>
              <div>
                <h1 className="text-white font-bold text-xl sm:text-base mb-4">
                  Alamat Posko
                </h1>
              </div>
              <div>
                <p
                  className="text-white text-xs sm:text-[0.5rem] cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.069713821678!2d108.184115175881!3d-7.346068772268841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f56e3a6190f7d%3A0xf13d361369c9e17a!2sHotel%20Taman%20Mangkubumi%20Indah!5e0!3m2!1sen!2sid!4v1717151023968!5m2!1sen!2sid",
                      "_blank"
                    );
                  }}
                >
                  📍 Jl. AH Nasution No.KM 7, Mangkubumi, Kec. Mangkubumi, Kab.
                  Tasikmalaya, Jawa Barat 46181
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
