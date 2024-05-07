import React, { useState, useEffect } from "react";
import loadPhotos from "../data/photoData";
import "./gallery-photos.css";

function GalleryPhotos() {
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    loadPhotos()
      .then((loadedPhotos) => {
        setPhotos(loadedPhotos);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat memuat foto:", error);
      });
  }, []);

  return (
    <>
      <div className="gallery-photos text-white">
        <div className="mx-[2rem]">
          <h1 className="gphotos-title text-2xl sm:text-lg flex justify-center font-bold mb-4 pb-1 relative">
            Galeri Foto
          </h1>
          <div className="flex flex-wrap justify-center pb-10">
            {loaded &&
              photos.map((img, index) => (
                <div key={index} className="">
                  <img
                    src={img}
                    alt={`image ${index}`}
                    crossOrigin="anonymous"
                    className="w-24 m-2 sm:w-12 sm:m-0.5 md:w-20 sm:m-1 rounded-md"
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
