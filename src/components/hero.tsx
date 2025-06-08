export default function Hero() {
  return (
    <main className="text-white flex-grow container mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between z-10 pt-8 pb-0 lg:pb-20 lg:pt-0 w-full">
      <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          ROCKET
        </h1>
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-red-500 -mt-2 sm:-mt-3 md:-mt-4 italic">
          BOOST
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-md text-lg shadow-lg transform hover:scale-105">
            LEARN MORE
          </button>
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-md text-lg shadow-lg transform hover:scale-105 sm:bg-transparent sm:border-2 sm:border-red-500 sm:hover:bg-red-500">
            BUY NOW
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center relative h-[400px] sm:h-[500px] md:h-[600px] w-full mt-12 lg:mt-0">
        <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] border-2 border-dashed border-purple-400/50 rounded-full animate-spin [animation-duration:20s]" />
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
          className="w-96 h-96 -rotate-[40deg] z-30"
        />
      </div>
      
    </main>
  );
}
