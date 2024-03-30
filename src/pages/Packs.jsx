import Footer from "../components/footer/Footer";
import HeaderBackground from "../components/header-background/HeaderBackground";
import Navbar from "../components/navbar/Navbar";
import PacksComp from "../components/packs-list/PacksComp";
import Tutor from "../components/tutor/Tutor";
import WhatsApp from "../components/whatsapp-icon/WhatsappIcon";

function Packs() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <HeaderBackground />
      <PacksComp />
      <Tutor />
      <Footer />
    </>
  );
}

export default Packs;
