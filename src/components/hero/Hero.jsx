import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero relative flex h-[100vh] md:h-[60vh] sm:h-[40vh]">
        <div className="container text-white self-end">
          <div className="px-16 md:px-8 sm:px-4 pb-20 lg:pb-16 md:pb-10 sm:pb-4">
            <div>
              <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4 lg:mb-3 md:mb-3 sm:mb-2">
                Komunitas <span className="text-[#FFAA00]">Jeep</span>
              </div>
              <div className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 lg:mb-3 md:mb-3 sm:mb-2">
                <span className="text-[#FFAA00]">Tour</span> Galunggung
              </div>
              <div className="text-2xl lg:text-xl md:text-lg sm:text-[0.65rem] font-medium leading-9 sm:leading-5">
                Kami adalah Jeep Tour Galunggung pertama, kami adalah pelopor!
                <br />
                Kami berupaya menyediakan layanan dan kualitas terbaik!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
