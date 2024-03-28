import Footer from "../components/Footer";
import GalleryPhotos from "../components/GalleryPhotos";
import HeaderBackground from "../components/HeaderBackground";
import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsappIcon";

function Gallery() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <HeaderBackground />
      <GalleryPhotos />
      <Footer />
    </>
  );
}

export default Gallery;
