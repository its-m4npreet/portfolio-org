const Hero = () => {
  return (
    <>
    <div className="w-full min-h-screen flex py-12 text-white">
      {/* <div className="max-w-5xl w-full mx-auto"> */}
        <div className="w-full flex justify-between">
          <div className="relative shrink-0 w-[100%/2]">
            <div className="absolute -top-2.5 -right-24 hidden lg:flex items-center gap-1.5 text-sm text-white z-10">
              <svg className="w-20 h-8" viewBox="0 0 120 50">
                <path d="M 10 25 Q 40 10, 70 25 T 110 25" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <circle cx="110" cy="25" r="3" fill="white"/>
              </svg>
              <span className="whitespace-nowrap font-normal">hey, i'm here</span>
            </div>
            <div className="w-40 h-40 lg:w-36 lg:h-36 rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
              <img src="/p1.jpg" alt="Manpreet" className="w-full h-full object-cover block" />
            </div>
          </div>
           <div className="flex-1">
            <h1 className="text-6xl lg:text-7xl font-bold mb-3 tracking-tight leading-none">MANPREET</h1>
            <div className="flex items-center gap-2 mb-8 opacity-90 text-base justify-center lg:justify-start">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>punjab, India</span>
            </div>
            </div>
          


          {/* Right Section - Content */}
          {/* <div className="flex-1">
            <h1 className="text-6xl lg:text-7xl font-bold mb-3 tracking-tight leading-none">MANPREET</h1>
            <div className="flex items-center gap-2 mb-8 opacity-90 text-base justify-center lg:justify-start">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>punjab, India</span>
            </div>

            <p className="text-base leading-[1.8] mb-10 text-[#b0b0b0]">
              I'm a <span className="text-white font-medium">full-stack developer</span> with a passion for crafting powerful and user-friendly <span className="text-white font-medium">web applications</span>. I excel in technologies like <span className="text-white font-medium">React</span> and I'm adept at back-end development using <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">express</span> and <span className="text-white font-medium">MongoDB</span> for robust applications. I'm driven by a love for <span className="text-white font-medium">cutting-edge tools</span> and technologies, constantly leveling up my skills to deliver <span className="text-white font-medium">seamless, end-to-end solutions</span> that make a real impact.
            </p>

             <div className="mt-10">
              <div className="text-sm text-[#666] mb-4">[ Strong understanding of... ]</div>
              <div className="flex gap-2.5 items-center justify-center lg:justify-start flex-wrap">
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
                <div className="w-[50px] h-2 bg-[#2a2a2a] rounded-sm"></div>
              </div>
            </div> 
          </div> */}
        </div>
      {/* </div> */}
    </div>
 </> );
};

export default Hero;
