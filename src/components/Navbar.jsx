import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-galunggung.png";
import "./css/navbar.css";

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
      <div ref={navbarRef} className="navbar flex fixed z-10">
        <div className="container flex px-6 py-2 justify-between font-bold text-white self-center">
          <div className="logo">
            <Link to="/">
              <div className="flex ">
                <img src={logo} alt="" className="w-8 h-auto " />
                <div className="text-3xl self-center ml-3">KTJG</div>
              </div>
            </Link>
          </div>
          <div className="self-center text-xl font-semibold">
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
