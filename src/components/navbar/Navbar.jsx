import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-dialz.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar fixed z-10">
        <div className="container flex px-5 py-2 justify-between font-bold text-white">
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
              Home
            </Link>
            <Link to="/" className="mr-4">
              Paket Wisata
            </Link>
            <Link to="/">Gallery</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
