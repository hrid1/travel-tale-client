import { div } from "framer-motion/client";
import React from "react";

const Spiner = () => {
  return (
    <div className="min-h-[calc(100vh - 288px)]">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
    </div>
  );
};

export default Spiner;
