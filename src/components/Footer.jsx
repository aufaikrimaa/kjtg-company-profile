import "./css/footer.css";
import logo from "../assets/images/logo-galunggung.png";
import youtube from "../assets/images/youtube.svg";
import tiktok from "../assets/images/tiktok.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";

function Footer() {
  const sosmedData = [
    {
      icon: youtube,
      link: "",
    },
    {
      icon: tiktok,
      link: "",
    },
    {
      icon: instagram,
      link: "",
    },
    {
      icon: facebook,
      link: "",
    },
  ];

  const handleClick = () => {
    window.open(sosmedData.link, "_blank");
  };

  return (
    <>
      <div className="footer">
        <div className="flex flex row px-24 py-6">
          <div className="basis-1/3 flex justify-center self-center">
            <div>
              <div className="flex text-white">
                <img src={logo} className="h-8" />
                <p className="self-center font-bold text-2xl ml-2">K J T G</p>
              </div>
              <div className="flex mt-2 ml-1">
                {sosmedData.map((data, index) => (
                  <img
                    key={index}
                    src={data.icon}
                    className="w-5 mr-2 cursor-pointer"
                    onClick={handleClick}
                  />
                ))}
              </div>
              <div className="mt-4">
                <p className="text-xs text-white">
                  &copy; 2024 Komunitas Jeep Tour Galunggung. <br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center text-white self-center">
            <div>
              <div>
                <h1 className="font-bold text-xl mb-4">Kontak</h1>
              </div>
              <div>
                <div className="mt-2">
                  <h2 className="text-sm font-bold mb-0.5">Telp & SMS</h2>
                  <p className="text-xs">08xxxxxxxxx</p>
                </div>
                <div className="mt-2">
                  <h2 className="text-sm font-bold mb-0.5">WhatsApp</h2>
                  <p className="text-xs">08xxxxxxxxx</p>
                </div>
                <div className="mt-2">
                  <h2 className="text-sm font-bold mb-0.5">Email</h2>
                  <p className="text-xs">info@kjtg.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center self-center">
            <div>
              <div>
                <h1 className="text-white font-bold text-xl mb-4">
                  Alamat Kantor
                </h1>
              </div>
              <div>
                <p className="text-white text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
