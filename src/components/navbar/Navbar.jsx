import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListCollapse } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import logo from "../../assets/images/logo-galunggung.png";
import "./navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  useEffect(() => {
    const shrinkNavbar = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navbarRef.current.classList.replace("navbar", "shrink");
      } else {
        navbarRef.current.classList.replace("shrink", "navbar");
      }
    };
    window.addEventListener("scroll", shrinkNavbar);
    return () => {
      window.removeEventListener("scroll", shrinkNavbar);
    };
  }, []);

  const handleNavChange = (nav) => {
    setActiveNav(nav);
  };

  return (
    <>
      <div
        ref={navbarRef}
        className="navbar flex fixed z-20 px-6 sm:px-3 py-2 justify-between font-bold text-white"
      >
        <div className="logo self-center">
          <Link to="/">
            <div className="flex ">
              <img
                src={logo}
                alt=""
                className="w-8 h-auto lg:w-6 md:w-6 sm:w-6"
              />
              <div className="text-3xl lg:text-2xl md:text-2xl sm:text-xl self-center ml-3">
                K J T G
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:block md:block hidden self-center z-40">
          <Popover>
            <PopoverTrigger className="flex items-center px-2 py-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
              <ListCollapse />
            </PopoverTrigger>
            <PopoverContent className=" bg-[#0f0f0f] border-none">
              <div className="self-center text-white md:text-base sm:text-sm font-semibold pl-2 md:grid sm:grid md:gap-y-3 sm:gap-y-3 justify-items-center">
                <Link
                  to="/"
                  className={`menu mr-4 ${activeNav === "/" ? "active" : ""}`}
                  onClick={() => handleNavChange("/")}
                >
                  Beranda
                </Link>
                <Link
                  to="/packs"
                  className={`menu mr-4 ${
                    activeNav === "/packs" ? "active" : ""
                  }`}
                  onClick={() => handleNavChange("/packs")}
                >
                  Paket Wisata
                </Link>
                <Link
                  to="/gallery"
                  className={`menu mr-4 ${
                    activeNav === "/gallery" ? "active" : ""
                  }`}
                  onClick={() => handleNavChange("/gallery")}
                >
                  Galeri
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="md:hidden sm:hidden flex">
          <div className="self-center text-xl lg:text-lg font-semibold justify-items-center">
            <Link
              to="/"
              className={`menu mr-4 ${activeNav === "/" ? "active" : ""}`}
              onClick={() => handleNavChange("/")}
            >
              Beranda
            </Link>
            <Link
              to="/packs"
              className={`menu mr-4 ${activeNav === "/packs" ? "active" : ""}`}
              onClick={() => handleNavChange("/packs")}
            >
              Paket Wisata
            </Link>
            <Link
              to="/gallery"
              className={`menu mr-4 ${
                activeNav === "/gallery" ? "active" : ""
              }`}
              onClick={() => handleNavChange("/gallery")}
            >
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
