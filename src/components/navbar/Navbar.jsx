import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-galunggung.png";
import "./navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

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
          <button
            onClick={handleToggle}
            className="flex items-center px-2 py-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm16 4a1 1 0 110 2H3a1 1 0 110-2h16z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:absolute sm:absolute md:bg-[#0f0f0f] sm:bg-[#0f0f0f] rounded-lg md:w-full sm:w-full w-auto lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center 3xl:flex 3xl:items-center 4xl:flex 4xl:items-center justify-end`}
        >
          <div className="self-center text-xl lg:text-lg md:text-base sm:text-sm font-semibold md:grid sm:grid md:py-5 sm:py-5 md:gap-y-3 sm:gap-y-3 justify-items-center">
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
