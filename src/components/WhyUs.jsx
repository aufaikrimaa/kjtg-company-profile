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
          <div className="flex flex-row ">
            <div className="basis-1/2 flex justify-center self-center p-10">
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
