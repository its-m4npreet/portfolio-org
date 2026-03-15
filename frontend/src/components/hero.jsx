import { IoLocation } from "react-icons/io5";
import { useState } from 'react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
    <div className="header w-full flex flex-row justify-between items-center gap-6 my-12 md:my-10 px-4">
      <div className="pfp relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden  shadow-lg shrink-0 bg-[#151515]">
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-linear-to-r from-[#121212] via-[#252525] to-[#121212]"></div>
        )}
        <img
          src="p2.jpeg"
          alt="pfp"
          loading="eager"
          decoding="async"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div className="info h-full flex flex-col justify-center items-center  text-center  mt-4 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight leading-none">MANPREET</h1>
        <div className="flex items-center gap-2 mb-8 opacity-90 text-sm sm:text-base text-gray-300">
          <IoLocation className="w-4 h-full sm:w-5 sm:h-5" />
          <span className="font-medium ">Hoshiarpur<span className="font-normal">, </span>Punjab<span className="font-normal">, </span>India</span>
        </div>
      </div>
    </div>
    
 </> );
};

export default Hero;
