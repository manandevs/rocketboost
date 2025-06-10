export default function Hero() {
  return (
    <main id="home" className="text-white flex flex-col lg:flex-row-reverse items-center justify-between z-10 w-full lg:min-h-[calc(100vh-120px)]">
      <div className="scale-[0.65] lg:scale-[1] lg:w-1/2 flex justify-center items-center relative w-full h-[300px] lg:h-[500px]">
        <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] border-2 border-dashed border-purple-400/50 rounded-full animate-spin [animation-duration:27s]" />
        <div className="absolute top-[10%] left-[10%] sm:left-[5%] md:left-[15%] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-300 rounded-full shadow-2xl flex items-center justify-center overflow-hidden animate-pulse [animation-duration:4s]">
          <div className="w-4 h-4 bg-gray-500/70 rounded-full absolute top-4 left-6 scale-90" />
          <div className="w-3 h-3 bg-gray-500/70 rounded-full absolute top-10 left-3 scale-90" />
          <div className="w-5 h-5 bg-gray-400/70 rounded-full absolute bottom-5 right-5 scale-90" />
          <div className="w-2 h-2 bg-gray-500/70 rounded-full absolute top-6 right-4 scale-90" />
        </div>
        <div className="absolute bottom-[15%] right-[10%] sm:right-[5%] md:right-[15%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-red-500 rounded-full shadow-2xl flex items-center justify-center overflow-hidden animate-pulse [animation-duration:5s] [animation-delay:-1s]">
          <div className="w-5 h-5 bg-red-700/70 rounded-full absolute top-5 left-8 scale-90" />
          <div className="w-4 h-4 bg-red-700/70 rounded-full absolute top-12 left-4 scale-90" />
          <div className="w-6 h-6 bg-red-800/70 rounded-full absolute bottom-6 right-6 scale-90" />
          <div className="w-3 h-3 bg-red-700/70 rounded-full absolute bottom-4 left-5 scale-90" />
        </div>
        <img
          src="/Rocket.png"
          alt="rocket"
          className="w-96 h-96 md:w-[425px] md:h-[425px] -rotate-[40deg] z-30"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left -mt-4 lg:-mt-8 z-20">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.2] font-bold tracking-tight">
            BOOST
          </h1>
          <h2 className="text-[50px] uppercase  md:text-[82px] leading-[1.1] font-extrabold text-red-500  italic">
            Your Local Business
          </h2>
          <p className="text-lg sm:text-xl leading-[1.4] text-center lg:text-left  mx-auto lg:mx-0 mt-4 text-gray-300 max-w-md">
            We specialize in Local Arizona Businesses
          </p>
        </div>
        <div className="mt-10 flex  flex-row gap-4 justify-center lg:justify-start">
          <a href="#service" className="cursor-pointer bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-md text-lg shadow-lg transform hover:scale-105">
            LEARN MORE
          </a>
          <a href="#contact" className="cursor-pointer uppercase transition-colors text-white font-semibold py-3 px-8 rounded-md text-lg shadow-lg transform hover:scale-105 bg-transparent border border-red-500 hover:bg-red-500">
            Text Us
          </a>
        </div>
      </div>
    </main>
  );
}
