const photos = [
  "https://kjtg-images.vercel.app/images/photo1.jpg",
  "https://kjtg-images.vercel.app/images/photo2.jpg",
  "https://kjtg-images.vercel.app/images/photo3.jpg",
  "https://kjtg-images.vercel.app/images/photo4.jpg",
  "https://kjtg-images.vercel.app/images/photo6.jpg",
  "https://kjtg-images.vercel.app/images/photo7.jpg",
  "https://kjtg-images.vercel.app/images/photo8.jpg",
  "https://kjtg-images.vercel.app/images/photo10.jpg",
  "https://kjtg-images.vercel.app/images/photo11.jpg",
  "https://kjtg-images.vercel.app/images/photo12.jpg",
  "https://kjtg-images.vercel.app/images/photo13.jpg",
  "https://kjtg-images.vercel.app/images/photo14.jpg",
  "https://kjtg-images.vercel.app/images/photo15.jpg",
  "https://kjtg-images.vercel.app/images/photo16.jpg",
  "https://kjtg-images.vercel.app/images/photo17.jpg",
  "https://kjtg-images.vercel.app/images/photo18.jpg",
  "https://kjtg-images.vercel.app/images/photo19.jpg",
  "https://kjtg-images.vercel.app/images/photo21.jpg",
  "https://kjtg-images.vercel.app/images/photo22.jpg",
  "https://kjtg-images.vercel.app/images/photo23.jpg",
  "https://kjtg-images.vercel.app/images/photo24.jpg",
  "https://kjtg-images.vercel.app/images/photo26.jpg",
  "https://kjtg-images.vercel.app/images/photo27.jpg",
  "https://kjtg-images.vercel.app/images/photo28.jpg",
  "https://kjtg-images.vercel.app/images/photo29.jpg",
  "https://kjtg-images.vercel.app/images/photo30.jpg",
  "https://kjtg-images.vercel.app/images/photo31.jpg",
  "https://kjtg-images.vercel.app/images/photo32.jpg",
  "https://kjtg-images.vercel.app/images/photo33.jpg",
  "https://kjtg-images.vercel.app/images/photo34.jpg",
  "https://kjtg-images.vercel.app/images/photo35.jpg",
  "https://kjtg-images.vercel.app/images/photo36.jpg",
  "https://kjtg-images.vercel.app/images/photo37.jpg",
  "https://kjtg-images.vercel.app/images/photo38.jpg",
  "https://kjtg-images.vercel.app/images/photo39.jpg",
  "https://kjtg-images.vercel.app/images/photo40.jpg",
  "https://kjtg-images.vercel.app/images/photo41.jpg",
  "https://kjtg-images.vercel.app/images/photo42.jpg",
  "https://kjtg-images.vercel.app/images/photo44.jpg",
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
