import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackagesTab from "./PackagesTab";
import CardsSkeleto from "../../components/CardsSkeleto";

const TourismTravelGuide = () => {
  // const packages = [
  //   {
  //     id: 1,
  //     title: "Sundarbans Adventure",
  //     price: "$300",
  //     img: "path/to/img1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Hill Tracts Trek",
  //     price: "$250",
  //     img: "path/to/img2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Cultural Dhaka Tour",
  //     price: "$150",
  //     img: "path/to/img3.jpg",
  //   },
  // ];

  // const tourGuides = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     experience: "5 Years",
  //     img: "path/to/guide1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     experience: "3 Years",
  //     img: "path/to/guide2.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Mohammed Ali",
  //     experience: "7 Years",
  //     img: "path/to/guide3.jpg",
  //   },
  // ];

  const { data: tourGuides = [], isLoading } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/guide?limit=true`
      );
      console.log(data);
      return data;
    },
  });

  // console.log(pakages);
  if (isLoading) return <CardsSkeleto />;
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Tourism and Travel Guide
        </h2>
        <Tabs>
          {/* Tab List */}
          <TabList className="flex justify-center space-x-6 border-b-2 border-gray-300 mb-6">
            <Tab className="px-4 py-2 cursor-pointer text-gray-600 focus:outline-none hover:text-blue-600 border-b-2 border-transparent focus:border-blue-600">
              Our Packages
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-gray-600 focus:outline-none hover:text-blue-600 border-b-2 border-transparent focus:border-blue-600">
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
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={guide?.image}
                    alt={guide.name}
                    className="w-32 rounded-full h-40 mx-auto object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {guide?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Email: {guide?.email}
                    </p>
                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      View Profile
                    </button>
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
