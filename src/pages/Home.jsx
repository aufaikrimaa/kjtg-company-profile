import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import SwipePhotos from "../components/swipe-photos/SwipePhotos";
import WhyUs from "../components/why-us/WhyUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SwipePhotos />
      <WhyUs />
    </>
  );
}

export default Home;
