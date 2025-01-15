import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/overview/overimg1.jpg";
import img2 from "../../assets/overview/overimg2.jpg";
import { div } from "framer-motion/client";

const Overview = () => {
  const images = [img1, img2];

  return (
    <div className=" bg-gray-100">
      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-800 mt-6 px-2 text-center  pt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {"Discover Bangladesh: Your Gateway to Adventure"}
      </motion.h2>{" "}
      <section className=" flex flex-col md:flex-row items-center ">
        {/* Left Section: Info */}
        <div className="w-full md:w-1/2 px-5 mb-5">
          <motion.div
            className=" bg-blue-50 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold  mb-4">
              Welcome to The Tourist Guide
            </h3>
            <p className="text-blue-500 text-lg">
              Discover the breathtaking beauty of Bangladesh! Explore its rich
              culture, stunning landscapes, and vibrant traditions with us.
            </p>
            <ul className="mt-4 text-blue-600 text-sm list-disc list-inside">
              <li>Experience the Sundarbans, home of the Bengal tiger.</li>
              <li>Visit serene hill tracts like Bandarban and Rangamati.</li>
              <li>
                Immerse yourself in the vibrant culture of Sylhet and Dhaka.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Section: Images */}
        <section className="w-full md:w-1/2">
          <div className=" flex justify-center items-center space-x-6 mt-10 md:mt-0">
            <motion.img
              src={img1}
              alt={`Animated Image}`}
              className="w-44 md:w-56 md:h-44 object-cover rounded-lg shadow-lg"
              animate={{
                y: [0, -30, 0], // Bouncing animation
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={img2}
              alt={`Animated Image}`}
              className="w-44 md:w-56 md:h-44 object-cover rounded-lg shadow-lg"
              animate={{
                y: [0, -24, 0], // Bouncing animation
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeIn",
              }}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Overview;
