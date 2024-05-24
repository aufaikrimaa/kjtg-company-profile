import "./whatsappIcon.css";
import whatsapp from "../../assets/images/whatsapp.svg";

function WhatsApp() {
  const handleClick = () => {
    window.open("whatsapp://send?phone=6281224284181", "_blank");
  };

  return (
    <>
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
    </>
  );
}
export default WhatsApp;
