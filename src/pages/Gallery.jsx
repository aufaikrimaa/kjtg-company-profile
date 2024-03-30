import Footer from "../components/footer/Footer";
import GalleryPhotos from "../components/gallery-photos/GalleryPhotos";
import GalleryVideos from "../components/gallery-videos/GalleryVideos";
import HeaderBackground from "../components/header-background/HeaderBackground";
import Navbar from "../components/navbar/Navbar";
import WhatsApp from "../components/whatsapp-icon/WhatsappIcon";

function Gallery() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <HeaderBackground />
      <GalleryPhotos />
      <GalleryVideos />
      <Footer />
    </>
  );
}

export default Gallery;
