import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SwipePhotos from "../components/SwipePhotos";
import ThumbsSwiper from "../components/ThumbsSwiper";
import WhatsApp from "../components/WhatsappIcon";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <Hero />
      <SwipePhotos />
      <About />
      <WhyUs />
      <Footer />
    </>
  );
}

export default Home;
