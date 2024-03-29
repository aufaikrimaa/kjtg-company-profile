import Footer from "../components/Footer";
import GalleryPhotos from "../components/GalleryPhotos";
import GalleryVideos from "../components/GalleryVideos";
import HeaderBackground from "../components/HeaderBackground";
import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsappIcon";

function Gallery() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <HeaderBackground />
      <GalleryVideos />
      <GalleryPhotos />
      <Footer />
    </>
  );
}

export default Gallery;
