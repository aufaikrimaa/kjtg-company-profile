import "./whatsappIcon.css";
import whatsapp from "../../assets/images/whatsapp.svg";
import { number } from "../phoneNumber/phoneNum";

function WhatsApp() {
  const handleClick = () => {
    window.open(`whatsapp://send?phone=${number}`, "_blank");
  };

  // console.log(number);

  return (
    <div className="whatsapp grid fixed z-10">
      <div className="container">
        <img
          src={whatsapp}
          alt="whatsapp icon"
          className="h-6 cursor-pointer hover:scale-125 transition ease-in-out"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default WhatsApp;
