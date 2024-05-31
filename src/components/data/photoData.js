import photo1 from "../../assets/images/photos/photo1.jpg";
import photo2 from "../../assets/images/photos/photo2.jpg";
import photo3 from "../../assets/images/photos/photo3.jpg";
import photo4 from "../../assets/images/photos/photo4.jpg";
import photo6 from "../../assets/images/photos/photo6.jpg";
import photo7 from "../../assets/images/photos/photo7.jpg";
import photo8 from "../../assets/images/photos/photo8.jpg";
import photo10 from "../../assets/images/photos/photo10.jpg";
import photo11 from "../../assets/images/photos/photo11.jpg";
import photo12 from "../../assets/images/photos/photo12.jpg";
import photo13 from "../../assets/images/photos/photo13.jpg";
import photo14 from "../../assets/images/photos/photo14.jpg";
import photo15 from "../../assets/images/photos/photo15.jpg";
import photo16 from "../../assets/images/photos/photo16.jpg";
import photo17 from "../../assets/images/photos/photo17.jpg";
import photo18 from "../../assets/images/photos/photo18.jpg";
import photo19 from "../../assets/images/photos/photo19.jpg";
import photo20 from "../../assets/images/photos/photo25.jpg";
import photo21 from "../../assets/images/photos/photo21.jpg";
import photo22 from "../../assets/images/photos/photo22.jpg";
import photo23 from "../../assets/images/photos/photo23.jpg";
import photo24 from "../../assets/images/photos/photo24.jpg";
import photo26 from "../../assets/images/photos/photo26.jpg";
import photo27 from "../../assets/images/photos/photo27.jpg";
import photo28 from "../../assets/images/photos/photo28.jpg";
import photo29 from "../../assets/images/photos/photo29.jpg";
import photo30 from "../../assets/images/photos/photo30.jpg";
import photo31 from "../../assets/images/photos/photo31.jpg";
import photo32 from "../../assets/images/photos/photo32.jpg";
import photo33 from "../../assets/images/photos/photo33.jpg";
import photo34 from "../../assets/images/photos/photo34.jpg";
import photo35 from "../../assets/images/photos/photo35.jpg";
import photo36 from "../../assets/images/photos/photo36.jpg";
import photo37 from "../../assets/images/photos/photo37.jpg";
import photo38 from "../../assets/images/photos/photo38.jpg";
import photo39 from "../../assets/images/photos/photo39.jpg";
import photo40 from "../../assets/images/photos/photo40.jpg";
import photo41 from "../../assets/images/photos/photo41.jpg";
import photo42 from "../../assets/images/photos/photo42.jpg";
import photo44 from "../../assets/images/photos/photo44.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo6,
  photo7,
  photo8,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo40,
  photo41,
  photo42,
  photo44,
];

function loadPhotos() {
  const promises = [];
  photos.forEach((photo) => {
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        resolve(photo);
      };
      img.onerror = () => {
        reject(new Error(`Gagal memuat foto: ${photo}`));
      };
    });
    promises.push(promise);
  });

  return Promise.all(promises);
}

loadPhotos()
  .then(() => {
    console.log("Semua foto telah berhasil dimuat");
  })
  .catch((error) => {
    console.error("Terjadi kesalahan saat memuat foto:", error);
  });

export default loadPhotos;
