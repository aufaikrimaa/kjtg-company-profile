import "./css/hero.css";

function Hero() {
  return (
    <>
      <div className="hero relative flex">
        <div className="container text-white self-end">
          <div className="px-16 pb-20">
            <div>
              <div className="text-5xl font-bold mb-4">
                Komunitas <span className="text-[#FFAA00]">Jeep</span>
              </div>
              <div className="text-6xl font-bold mb-4">
                <span className="text-[#FFAA00]">Tour</span> Galunggung
              </div>
              <div className="text-2xl font-medium leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
