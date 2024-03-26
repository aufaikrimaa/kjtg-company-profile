import "./css/whatsappIcon.css";
import whatsapp from "../assets/images/whatsapp.svg";

function WhatsApp() {
  const handleClick = () => {
    window.open("", "_blank");
  };

  return (
    <>
      <div className="whatsapp grid fixed z-10 place-content-end">
        <div className="container pr-6 pb-5">
          <img
            src={whatsapp}
            alt="whatsapp icon"
            className="h-6 cursor-pointer hover:scale-125 transition ease-in-out"
          />
        </div>
      </div>
    </>
  );
}
export default WhatsApp;
