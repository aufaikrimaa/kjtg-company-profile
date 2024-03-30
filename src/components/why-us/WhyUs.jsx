import ThumbsSwiper from "../thumbs-swiper/ThumbsSwiper";
import imgUrl from "../data/photoData";
import "./whyus.css";

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
          <div className="flex flex-row lg:pt-0 2xl:pt-0 h-[32rem] lg:h-[26rem]">
            <div className="basis-2/5 flex justify-center self-center">
              <img
                src={imgUrl[44]}
                alt="photo"
                className="photo-whyus rounded-md"
                crossOrigin="anonymous"
              />
            </div>
            <div className="basis-3/5 flex justify-end">
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
