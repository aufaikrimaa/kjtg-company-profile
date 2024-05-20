import logo from "../../assets/images/logo-galunggung.png";

function Loading() {
  return (
    <div className="bg-[#0f0f0f] h-screen w-screen flex items-center justify-center">
      <img src={logo} alt="KJTG" className="animate-bounce w-12 h-12" />
    </div>
  );
}
export default Loading;
