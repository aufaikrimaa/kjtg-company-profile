import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import SwipePhotos from "../components/swipe-photos/SwipePhotos";
import SwipeVideos from "../components/swipe-videos/SwipeVideos";
import Tutor from "../components/tutor/Tutor";
import WhatsApp from "../components/whatsapp-icon/WhatsappIcon";
import WhyUs from "../components/why-us/WhyUs";

function Home() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <Hero />
      <SwipePhotos />
      <About />
      <WhyUs />
      <SwipeVideos />
      <Tutor />
      <Footer />
    </>
  );
}

export default Home;
