// const packs = [
//   {
//     title: "Paket A",
//     desc: [
//       "4-6 Jeep",
//       "Stasiun Pirusa",
//       "Galunggung Lava Quarry",
//       "Pasirdatar Off Road Track",
//       "Curug Cikahuripan Offroad",
//       "Curug Tilu Offroad",
//       "Cipanas Galunggung",
//       "Crater Galunggung",
//     ],
//     price: "Rp. 400.000,-",
//     promo: false,
//     promoPrice: "",
//   },
//   {
//     title: "Paket B",
//     desc: [
//       "6-10 Jeep",
//       "Stasiun Pirusa",
//       "Galunggung Lava Quarry",
//       "Pasirdatar Off Road Track",
//       "Curug Cikahuripan Offroad",
//       "Curug Tilu Offroad",
//       "Cipanas Galunggung",
//       "Crater Galunggung",
//     ],
//     price: "Rp. 600.000,-",
//     promo: false,
//     promoPrice: "",
//   },
//   {
//     title: "Paket C (PROMO)",
//     desc: [
//       "Jumlah jeep bebas",
//       "Stasiun Pirusa",
//       "Galunggung Lava Quarry",
//       "Pasirdatar Off Road Track",
//       "Curug Cikahuripan Offroad",
//       "Curug Tilu Offroad",
//       "Cipanas Galunggung",
//       "Crater Galunggung",
//     ],
//     price: "Rp. 600.000,-",
//     promo: true,
//     promoPrice: "Rp. 450.000,-",
//   },
// ];

import photo1 from "../../assets/images/photos/photo29.jpg";
import photo2 from "../../assets/images/photos/photo2.jpg";
import photo3 from "../../assets/images/photos/photo25.jpg";
import photo4 from "../../assets/images/photos/photo6.jpg";

const paket = [
  {
    photo: photo2,
    title: "PAKET FUN OFFROAD<br />KOTA - PASIRDATAR - CIPANAS",
    price: "Rp. 900,000,-/Jeep",
    fasilitas: [
      "Jeep 4x4 kapasitas 4 orang (Driver, BBM, Parkir)",
      {
        title: "Free tiket:",
        items: ["✓ Pasirdatar", "✓ Curug cikahuripan", "✓ Pemandian Cipanas"],
      },
      "Fun Offroad area basah (area tambang pasir)",
      "Fun offroad area pegunungan Pasir datar.",
      "Pemandu trecking ke air terjun cikahuripan",
      "Wellcome drink (kelapa muda)",
      "Air mineral kemasan",
      "Makan 1x",
      "Safety (helm)",
      "Asuransi kecelakaan",
    ],
  },
  {
    photo: photo1,
    title:
      "PAKET FUN OFFROAD (+) OUTBOND ACTIVITY<br />KOTA - PASIRDATAR - CIPANAS",
    price: "Rp. 1,200,000,-/Jeep",
    fasilitas: [
      "Minimal peserta 5 Jeep atau 20 orang",
      "Jeep 4x4 kapasitas 4 orang (Driver, BBM, Parkir)",
      {
        title: "Free tiket:",
        items: ["✓ Pasirdatar", "✓ Curug cikahuripan", "✓ Pemandian Cipanas"],
      },
      "Fun Offroad area basah (area tambang pasir)",
      "Fun offroad area pegunungan Pasir datar.",
      "Pemandu trecking ke air terjun cikahuripan",
      "Outbond (Capacity Building, Team Building, Fun games_include instruktur & perlengkapan outbond)",
      "Coffee brew",
      "Wellcome drink (kelapa muda)",
      "Air mineral kemasan",
      "Makan 1x",
      "Safety (helm)",
      "Asuransi kecelakaan",
    ],
  },
  {
    photo: photo3,
    title: "PAKET FUN OFFROAD<br />KOTA - KAWAH - PASIRDATAR - CIPANAS",
    price: "Rp. 1,300,000,-/Jeep",
    fasilitas: [
      "Jeep 4x4 kapasitas 4 orang (Driver, BBM, Parkir)",
      {
        title: "Free tiket:",
        items: [
          "✓ Kawah Galunggung",
          "✓ Pasirdatar",
          "✓ Curug cikahuripan",
          "✓ Pemandian Cipanas",
        ],
      },
      "Fun Offroad area basah (area tambang pasir)",
      "Fun offroad area pegunungan Pasir datar.",
      "Pemandu trecking ke air terjun cikahuripan",
      "Free ojek kawah PP",
      "Welcome drink (kelapa muda)",
      "Air mineral kemasan",
      "Makan 1x",
      "Safety (helm)",
      "Asuransi kecelakaan",
    ],
  },
  {
    photo: photo4,
    title: "PAKET FUN OFFROAD TRIP SHORT<br /> CIPANAS - PASIRDATAR",
    price: "Rp. 450,000,-/Jeep",
    fasilitas: [
      "Jeep 4x4 kapasitas 4 orang (Driver, BBM, Parkir)",
      {
        title: "Free tiket:",
        items: ["✓ Pasirdatar", "✓ Curug cikahuripan"],
      },
      "Fun Offroad area basah (area tambang pasir)",
      "Fun offroad area pegunungan Pasir datar.",
      "Curug Cikahuripan",
      "Safety (helm)",
      "Asuransi",
      "Durasi waktu 2 jam",
    ],
  },
];
export default paket;
