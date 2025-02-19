import React from "react";
import { motion } from "framer-motion";
import img0 from "../../assets/overview/overimg.jpg";
import img1 from "../../assets/overview/overimg1.jpg";
import img2 from "../../assets/overview/overimg2.jpg";

const Overview = () => {
  return (
    <div className="max-w-screen-xl mx-auto shadow-lg">
      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-800 mt-6 px-2 text-center  pt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {" Welcome to The Tourist Tale"}
      </motion.h2>{" "}
      <section className=" flex flex-col md:flex-row items-center ">
        {/* Left Section: Info */}
        <div className="w-full md:w-1/2 px-5 mb-5">
          <motion.div
            className=" bg-green-50 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Discover: Your Gateway to Adventure
            </h3>
            <p className="text-green-800 text-lg">
              Uncover the hidden gems of Bangladesh! From its breathtaking
              natural beauty to its rich cultural heritage, embark on a journey
              like no other.
            </p>
            <ul className="mt-4 text-green-900 text-sm list-disc list-inside space-y-2">
              <li>
                🌳 <strong>Sundarbans:</strong> Wander through the world’s
                largest mangrove forest, home to the majestic Bengal tiger and
                rare species.
              </li>
              <li>
                🏞 <strong>Hill Tracts:</strong> Explore the serenity of
                Bandarban and Rangamati with lush green hills, tribal culture,
                and tranquil lakes.
              </li>
              <li>
                🕌 <strong>Historic Cities:</strong> Immerse yourself in the
                vibrant traditions of Sylhet, Dhaka, and Chittagong, filled with
                historical landmarks.
              </li>
              <li>
                🌊 <strong>Cox's Bazar:</strong> Relax on the golden sands of
                the world’s longest natural sea beach and enjoy stunning
                sunsets.
              </li>
              <li>
                🎨 <strong>Cultural Experiences:</strong> Witness colorful
                festivals, savor traditional cuisine, and engage with warm,
                welcoming locals.
              </li>
            </ul>
            <p className="mt-6 text-gray-700 text-sm">
              Whether you seek adventure, relaxation, or cultural exploration,
              Bangladesh offers it all. Join us and create unforgettable
              memories!
            </p>
          </motion.div>
        </div>

        {/* Right Section: Images */}
        <section className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* Large Image */}
            <motion.div
              className="col-span-2 w-11/12 mx-auto h-60 md:h-72 rounded-lg shadow-lg overflow-hidden"
              animate={{
                scale: [1, 1.1, 1], // Slight zoom animation
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={img0}
                alt="Large Animated Image"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Smaller Images */}
            <motion.div
              className="w-full h-40 md:h-52 rounded-lg shadow-lg overflow-hidden"
              whileHover={{
                scale: 1.05, // Zoom on hover
                rotate: 2, // Slight tilt on hover
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <img
                src={img2}
                alt="Animated Image 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full h-40 md:h-52 rounded-lg shadow-lg overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <img
                src={img1}
                alt="Animated Image 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* </section> */}
      </section>
    </div>
  );
};

export default Overview;
