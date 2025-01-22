import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.webp";
import banner3 from "../assets/banner/banner3.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    // <div className="mx-auto rounded-2xl overflow-hidden  z-10">
    //   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    //     <SwiperSlide>
    //       <div className="h-auto md:h-[640px]">
    //         <img className="h-full w-full object-cover" src={banner2} alt="" />
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="md:h-[640px]">
    //         <img className="h-full w-full object-cover" src={banner3} alt="" />
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="md:h-[640px]">
    //         <img className="h-full w-full object-cover" src={banner1} alt="" />
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>

    <div className="h- [500px]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[360px] md:h-[520px] rounded-md overflow-hidden">
            {/* Background Image */}
            <img
              className="w-full h-full object-cover"
              src={banner2}
              alt="Beautiful Scenery"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
              {/* Content in the overlay */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Explore the Wonders of the Bangladesh
              </h2>
              <p className="text-lg mb-6 text-center">
                Discover breathtaking views, unique artifacts, and stories that
                bring history to life. Your journey starts here!
              </p>
              <a href="#tourism">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[360px] md:h-[520px] rounded-md overflow-hidden">
            {/* Background Image */}
            <img
              className="w-full h-full object-cover"
              src={banner3}
              alt="Beautiful Scenery"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
              {/* Content in the overlay */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Experience the Beauty and Culture of Bangladesh
              </h2>
              <p className="text-lg mb-6 text-center">
                Discover breathtaking views, unique artifacts, and stories that
                bring history to life. Your journey starts here!
              </p>
              <a href="#tourism">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[360px] md:h-[520px] rounded-md overflow-hidden">
            {/* Background Image */}
            <img
              className="w-full h-full object-cover"
              src={banner1}
              alt="Beautiful Scenery"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
              {/* Content in the overlay */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Discover the Hidden Treasures of Bangladesh
              </h2>
              <p className="text-lg mb-6 text-center">
                Discover breathtaking views, unique artifacts, and stories that
                bring history to life. Your journey starts here!
              </p>
              <a href="#tourism">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
