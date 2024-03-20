import "../css/hero.css";

function Hero() {
  return (
    <>
      <div className="hero relative flex">
        <div className="container z-1 text-white self-center">
          <div className="px-16">
            <div>
              <div className="text-6xl font-bold mb-4">
                Dialz <span className="text-[#e1d29b]">Tour</span>
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
