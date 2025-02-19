const HeroSection = () => {
  return (
    <section>
      <div className="relative bg-hero bg-cover bg-center h-[30rem] ">
        <div className="absolute inset-0 bg-gray-200 opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-black text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Share Your Experience</h1>
          <p className="text-xl mb-6">
            Help other travelers by reviewing your tour guide
          </p>
          <div className="flex space-x-4">
            {/* <input
              type="text"
              placeholder="Search for your guide..."
              className="py-2 px-4 rounded shadow-lg dark:text-black text-white"
            /> */}
          </div>
          <button
            disabled
            className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg  transition duration-300 disabled:cursor-not-allowed"
          >
            Join as a Tour Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
