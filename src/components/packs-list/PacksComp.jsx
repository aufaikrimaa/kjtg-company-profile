import bgPacks from "../../assets/images/bg-packs.svg";
import bgPacksPromo from "../../assets/images/bg-packs-promo.svg";
import dataPacks from "../data/packsData";
import jeepIcon from "../../assets/images/jeep-icon.svg";
import "./packs.css";

function PacksComp() {
  return (
    <>
      <div className="packs text-white pb-6 3xl:pb-24">
        <div className="pb-6">
          <h1 className="packs-title text-2xl flex justify-center font-bold mb-4 pb-1 relative">
            Paket Wisata
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {dataPacks.map((data, index) => (
            <div key={index} className="packs-item">
              {data.promo ? (
                <div
                  style={{
                    height: "30rem",
                    width: "20rem",
                  }}
                >
                  <div className="absolute">
                    <img src={bgPacksPromo} className="h-[30rem]" />
                  </div>
                  <div className="relative flex justify-center pt-4 font-bold text-xl">
                    {data.title}
                  </div>
                  <div
                    className="relative flex justify-center pt-4"
                    style={{ height: "20rem" }}
                  >
                    <ul className="self-center">
                      {data.desc.map((item, index) => (
                        <li key={index} className="mb-2">
                          <div className="flex">
                            <img src={jeepIcon} alt="-" className="h-4 pr-2" />
                            {item}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <p className="mt-1 ml-8 opacity-50">{data.price}</p>
                    <div className="text-2xl font-bold flex justify-center">
                      {data.promoPrice}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    height: "30rem",
                    width: "20rem",
                  }}
                >
                  <div className="absolute">
                    <img src={bgPacks} className="h-[30rem]" />
                  </div>
                  <div className="relative flex justify-center pt-4 font-bold text-xl">
                    {data.title}
                  </div>
                  <div
                    className="relative flex justify-center  pt-4"
                    style={{ height: "20rem" }}
                  >
                    <ul className="self-center">
                      {data.desc.map((item, index) => (
                        <li key={index} className="mb-2">
                          <div className="flex">
                            <img src={jeepIcon} alt="-" className="h-4 pr-2" />
                            {item}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative text-3xl font-bold flex justify-center mt-4">
                    {data.price}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PacksComp;
