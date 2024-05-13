import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import GalleryPhotos from "../components/gallery-photos/GalleryPhotos";
import GalleryVideos from "../components/gallery-videos/GalleryVideos";
import HeaderBackground from "../components/header-background/HeaderBackground";
import Navbar from "../components/navbar/Navbar";
import WhatsApp from "../components/whatsapp-icon/WhatsappIcon";
import loadPhotos from "../components/data/photoData";

function Gallery() {
  const [photosLoaded, setPhotosLoaded] = useState(false);
  useEffect(() => {
    loadPhotos()
      .then(() => {
        setPhotosLoaded(true);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat memuat foto:", error);
      });
  }, []);
  return (
    <>
      {photosLoaded === false ? (
        "loading"
      ) : (
        <>
          <Navbar />
          <WhatsApp />
          <HeaderBackground />
          <GalleryPhotos />
          <GalleryVideos />
          <Footer />
        </>
      )}
    </>
  );
}

export default Gallery;
