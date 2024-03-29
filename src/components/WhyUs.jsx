import ThumbsSwiper from "./ThumbsSwiper";
import imgUrl from "./data/photoData";
import "./css/whyus.css";

function WhyUs() {
  return (
    <>
      <div className="whyus flex px-16 pt-10">
        <div className="text-white self-center">
          <div>
            <h1 className="whyus-title text-2xl flex justify-center font-bold pb-1 relative">
              Mengapa KJTG ?
            </h1>
          </div>
          <div className="flex flex-row lg:pt-5 2xl:pt-0 h-[32rem]">
            <div className="basis-1/2 flex justify-center self-center p-10 lg:p-4 2xl:p-18 3xl:p-20">
              <img
                src={imgUrl[44]}
                alt="photo"
                className="photo-whyus rounded-md"
                crossOrigin="anonymous"
              />
            </div>
            <div className="basis-1/2 flex justify-center">
              <div className="self-center">
                <ThumbsSwiper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyUs;
