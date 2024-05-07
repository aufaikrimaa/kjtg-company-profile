import React, { useState, useEffect } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import SwipePhotos from "../components/swipe-photos/SwipePhotos";
import SwipeVideos from "../components/swipe-videos/SwipeVideos";
import WhatsApp from "../components/whatsapp-icon/WhatsappIcon";
import WhyUs from "../components/why-us/WhyUs";
import loadPhotos from "../components/data/photoData";

function Home() {
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
      {photosLoaded && (
        <>
          <Navbar />
          <WhatsApp />
          <Hero />
          <SwipePhotos />
          <About />
          <WhyUs />
          <SwipeVideos />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
