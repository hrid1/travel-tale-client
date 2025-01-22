import React from "react";
import Overview from "./Overview";
import TourismTravel from "./TourismTravel";
import TouristStory from "./TouristStory";
import Banner from "../../components/Banner";
import FaqSection from "./FaqSection";

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Overview />
      <TourismTravel />
      <TouristStory />
      <FaqSection/>
    </div>
  );
};

export default Home;
