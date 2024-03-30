import imgUrl from "../data/photoData";
import "./gallery-photos.css";

function GalleryPhotos() {
  return (
    <>
      <div className="gallery-photos text-white">
        <div className="mx-[2rem]">
          <h1 className="gphotos-title text-2xl flex justify-center font-bold mb-4 pb-1 relative">
            Galeri Foto
          </h1>
          <div className="flex flex-wrap justify-center pb-10">
            {imgUrl.map((img, index) => (
              <div key={index} className="">
                <img
                  src={img}
                  alt={`image ${index}`}
                  crossOrigin="anonymous"
                  className="w-24 m-2 rounded-md"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryPhotos;
