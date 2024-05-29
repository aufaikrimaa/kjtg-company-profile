import React, { useState, useEffect, useRef } from "react";
import loadPhotos from "../data/photoData";
import "./gallery-photos.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <div className="mx-[2rem] sm:mx-0">
          <div className="gphotos-title text-2xl sm:text-lg flex justify-center font-bold mb-4 pb-1 relative">
            Galeri Foto
          </div>
          <div className="flex flex-wrap justify-center pb-10">
            {loaded &&
              photos.map((img, index) => (
                <div key={index}>
                  <Dialog>
                    <DialogTrigger>
                      <img
                        src={img}
                        alt={`image ${index}`}
                        loading="lazy"
                        crossOrigin="anonymous"
                        className="w-24 m-2 sm:w-12 sm:m-0.5 md:w-20 sm:m-1 rounded-md"
                        allowFullScreen
                      />
                    </DialogTrigger>
                    <DialogContent className="p-0 m-0 rounded-lg">
                      <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                          <img
                            src={img}
                            alt={`image ${index}`}
                            crossOrigin="anonymous"
                            className=" rounded-md"
                            allowFullScreen
                          />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryPhotos;
