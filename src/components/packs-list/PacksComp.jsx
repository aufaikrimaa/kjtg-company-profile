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
            <div key={index} className="packs-item bg-red-800 m-3 rounded-lg">
              <div className="h-[44rem] w-[20rem] flex flex-col  p-4">
                <div className=" flex justify-center pt-4 font-bold text-lg h-[8rem]">
                  {data.title}
                </div>
                <div className="flex justify-center">
                  <div className="self-center text-xs">
                    <div className="text-base mb-2">Fasilitas:</div>
                    {data.fasilitas.map((item, index) => (
                      <div key={index} className="">
                        <div className="flex">
                          {typeof item === "string" ? (
                            <>
                              <img
                                src={jeepIcon}
                                alt="-"
                                className="h-2 pr-2"
                              />
                              {item}
                            </>
                          ) : (
                            <>
                              <div className="flex">
                                <img
                                  src={jeepIcon}
                                  alt="-"
                                  className="h-2 pr-2"
                                />
                                {item.title}
                              </div>
                              <div className="ml-4">
                                {item.items.map((subItem, subIndex) => (
                                  <div key={subIndex}>{subItem}</div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-lg font-bold text-center mb-2">
                    {data.price}
                  </div>
                  <div className="flex justify-center border-2 border-white rounded-full px-2 cursor-pointer hover:bg-white hover:text-[#FFAA00] font-bold transition-colors duration-300 ease-in-out transition-background-color duration-300 ease-in-out">
                    Pesan Sekarang
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PacksComp;
