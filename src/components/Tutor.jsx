import bg from "../assets/images/bg-tutor.svg";
import "./css/tutor.css";

function Tutor() {
  const data1 = [
    {
      no: "1",
      desc: "Buka website atau kunjungi Instagram resmi KJTG",
      mt: "8rem",
    },
    {
      no: "2",
      desc: "Pilih paket yang tersedia sesuai keinginan di menu Paket Wisata",
      mt: "6rem",
    },
    {
      no: "3",
      desc: "Hubungi kami melalui kontak di bawah atau klik icon WhatsApp",
      mt: "4rem",
    },
  ];

  const data2 = [
    {
      no: "4",
      desc: "Diskusikan perjalanan wisata offroad anda dengan kami",
      mt: "4rem",
    },
    {
      no: "5",
      desc: "Lakukan pembayaran sesuai dengan diskusi sebelumnya",
      mt: "2rem",
    },
    {
      no: "6",
      desc: "Datang ke tempat offroad tepat waktu dan have fun bersama kami !",
      mt: "0rem",
    },
  ];

  return (
    <>
      <div className="tutor flex px-8 pb-8 3xl:pb-24">
        <div className="self-center text-white">
          <div className="flex flex-row">
            <div className="tutor-content basis-1/2 flex justify-end">
              <div>
                <h1 className="tutor-title text-2xl font-bold pb-1 relative pt-2 pl-6">
                  Cara Order
                </h1>
                <div className="flex">
                  {data1.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginTop: item.mt,
                      }}
                      className="h-[12rem] w-[12rem] lg:h-[11rem] lg:w-[11rem]"
                    >
                      <div>
                        <img src={bg} className="absolute h-[12rem]" />
                      </div>
                      <div className=" text-5xl font-bold w-12 h-12 flex justify-center relative">
                        <div className="self-center"> {item.no}</div>
                      </div>
                      <div className="text-xs p-2 flex justify-center pl-6 pr-3 relative">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tutor-content basis-1/2 flex justify-start">
              <div>
                <div className="flex">
                  {data2.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginTop: item.mt,
                      }}
                      className="h-[12rem] w-[12rem] lg:h-[11rem] lg:w-[11rem]"
                    >
                      <div>
                        <img src={bg} className="absolute h-[12rem]" />
                      </div>
                      <div className=" text-5xl font-bold w-12 h-12 flex justify-center relative">
                        <div className="self-center"> {item.no}</div>
                      </div>
                      <div className="text-xs p-2 flex justify-center pl-6 pr-3 relative">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pb-1 flex justify-end mt-12">
                  <div>
                    <h1 className="text-xl font-bold flex justify-center">
                      Selamat berwisata !
                    </h1>
                    <p>Ayo have fun bareng Komunitas Jeep Tour Galunggung !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tutor;
