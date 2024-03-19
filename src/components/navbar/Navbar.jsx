import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-dialz.png";
import "./navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
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
  return (
    <>
      <div ref={navbarRef} className="navbar fixed z-10">
        <div className="container flex px-6 py-2 justify-between font-bold text-white">
          <div className="logo">
            <div className="flex ">
              <img src={logo} alt="" className="w-8 h-auto " />
              <div className="text-2xl self-center ml-2">
                Dialz Tour Adventure
              </div>
            </div>
          </div>
          <div className="nav self-center">
            <Link to="/" className="mr-4">
              Beranda
            </Link>
            <Link to="/" className="mr-4">
              Paket Wisata
            </Link>
            <Link to="/">Galeri</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
