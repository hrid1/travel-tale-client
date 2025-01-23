import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackagesTab from "./PackagesTab";
import CardsSkeleto from "../../components/CardsSkeleto";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { Link } from "react-router-dom";
import TitleInfo from "../../components/common/TitleInfo";

const TourismTravelGuide = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: tourGuides = [], isLoading } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users/guide?limit=true");
  // console.log(data);
      return data;
    },
  });

  // console.log(pakages);
  if (isLoading) return <CardsSkeleto />;
  return (
    <section id="tourism" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <TitleInfo
          title="Tourism and Travel Guide"
          subtitle="Plan, Explore, and Make Memories That Last Forever."
        ></TitleInfo>
        <Tabs>
          {/* Tab List */}
          <TabList className="flex justify-center space-x-6 border-b-2 border-gray-300 mb-6">
            <Tab className="px-4 py-2 cursor-pointer text-gray-600 focus:outline-none hover:text-green-600 border-b-2 border-transparent focus:border-green-600">
              Our Packages
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-gray-600 focus:outline-none hover:text-green-600 border-b-2 border-transparent focus:border-green-600">
              Meet Our Tour Guides
            </Tab>
          </TabList>

          {/* Our Packages Tab */}
          <TabPanel>
            <PackagesTab />
          </TabPanel>

          {/* Meet Our Tour Guides Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tourGuides.map((guide) => (
                <div
                  key={guide._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
                >
                  <img
                    src={guide?.image}
                    alt={guide.name}
                    className="w-32 rounded-full h-40 mx-auto object-cover mt-2.5"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {guide?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Email: {guide?.email}
                    </p>
                    <Link to={`user/guide/${guide?.email}`}>
                      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default TourismTravelGuide;
