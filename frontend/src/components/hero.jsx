import { IoLocation } from "react-icons/io5";
export const Hero = () => {
  return (
    <>
    <div className="header w-full flex flex-row justify-between items-center gap-6 my-12 md:my-10 px-4">
      <div className="pfp w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0">
        <img src="p1.jpg" alt="pfp" className="w-full h-full object-cover" />
      </div>
      <div className="info h-full flex flex-col justify-center items-center  text-center  mt-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight leading-none">MANPREET</h1>
        <div className="flex items-center gap-2 mb-8 opacity-90 text-sm sm:text-base">
          <IoLocation className="w-4 h-full sm:w-5 sm:h-5" />
          <span className="font-medium">punjab<span className="font-normal">, </span>India</span>
        </div>
      </div>
    </div>
    
 </> );
};

export default Hero;
