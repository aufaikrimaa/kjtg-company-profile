import videos from "../data/videoData";
import instagram from "../../assets/images/instagram-color.svg";
import "./gallery-videos.css";

function GalleryVideos() {
  return (
    <>
      <div className="gallery-videos text-white">
        <div className="mx-[2rem]">
          <h1 className="gvideos-title text-2xl sm:text-lg flex justify-center font-bold mb-4 pb-1 relative">
            Galeri Video
          </h1>
          <div className="flex flex-wrap justify-center pb-10">
            {videos.map((item, index) => (
              <div key={index} className="relative m-2 sm:m-1">
                <img
                  src={item.cover}
                  alt={`image ${index}`}
                  crossOrigin="anonymous"
                  className="cover-videos w-24 sm:w-12 md:w-20 rounded-md"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                />
                <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={instagram}
                      alt="Instagram Icon"
                      className="instagram-icon rounded-xl"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryVideos;
