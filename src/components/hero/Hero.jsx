import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero relative flex">
        <div className="container text-white self-end">
          <div className="px-16 pb-20 lg:pb-16">
            <div>
              <div className="text-5xl lg:text-4xl font-bold mb-4 lg:mb-3">
                Komunitas <span className="text-[#FFAA00]">Jeep</span>
              </div>
              <div className="text-6xl lg:text-5xl font-bold mb-4 lg:mb-3">
                <span className="text-[#FFAA00]">Tour</span> Galunggung
              </div>
              <div className="text-2xl lg:text-xl font-medium leading-9">
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
