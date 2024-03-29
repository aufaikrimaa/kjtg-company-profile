import bgPacks from "../assets/images/bg-packs.svg";
import bgPacksPromo from "../assets/images/bg-packs-promo.svg";
import dataPacks from "./data/packsData";
import "./css/packs.css";

function PacksComp() {
  return (
    <>
      <div className="packs text-white pb-6">
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
                    backgroundImage: `url(${bgPacksPromo})`,
                    backgroundPosition: "center",
                    height: "30rem",
                    width: "20rem",
                  }}
                  className="bg-cover bg-no-repeat "
                >
                  <div className="flex justify-center pt-4 font-bold text-xl">
                    {data.title}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ height: "20rem" }}
                  >
                    <ul className="self-center">
                      {data.desc.map((item, index) => (
                        <li key={index} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mt-1 ml-8 opacity-50">{data.price}</p>
                    <div className="text-2xl font-bold flex justify-center">
                      {data.promoPrice}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    backgroundImage: `url(${bgPacks})`,
                    backgroundPosition: "center",
                    height: "30rem",
                    width: "20rem",
                  }}
                  className="bg-cover bg-no-repeat"
                >
                  <div className="flex justify-center pt-4 font-bold text-xl">
                    {data.title}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ height: "20rem" }}
                  >
                    <ul className="self-center">
                      {data.desc.map((item, index) => (
                        <li key={index} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-3xl font-bold flex justify-center mt-4">
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
