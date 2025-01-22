import React from "react";
import Overview from "./Overview";
import TourismTravel from "./TourismTravel";
import TouristStory from "./TouristStory";
import Banner from "../../components/Banner";
import FaqSection from "./FaqSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Overview />
      <TourismTravel />
      <TouristStory />
      <FaqSection />
      <Contact />
    </div>
  );
};

export default Home;
