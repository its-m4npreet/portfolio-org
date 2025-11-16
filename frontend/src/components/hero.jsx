import { IoLocation } from "react-icons/io5";
const Hero = () => {
  return (
    <>
    <div className="header w-full flex justify-between my-20">
      <div className="pfp w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
        <img src="p1.jpg" alt="pfp" />
      </div>
      <div className="info flex flex-col justify-center">
        <h1 className="text-6xl lg:text-7xl font-bold mb-3 tracking-tight leading-none">MANPREET</h1>
        <div className="flex items-center gap-2 mb-8 opacity-90 text-base">
          <IoLocation className="w-5 h-5" />
          <span className="font-medium">punjab<span className="font-normal">, </span>India</span>
        </div>
      </div>
    </div>

 </> );
};

export default Hero;
