import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const GuideSection = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: guides, isLoading } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const { data } = await axiosPublic("/users/guide");
      return data;
    },
  });
  if (isLoading) return <Spiner />;
  return (
    <div>
      <p>Guides: {guides.length}</p>
      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tour Guides</h2>
        <div className=" gap-8">
          <Marquee pauseOnHover={true}>
            <div className="flex ">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-4 relative flex flex-col justify-between text-center"
                >
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-40 h-40 object-cover rounded-full mx-auto mt-4"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-500 mb-2">
                      {guide.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {guide.info.title}
                    </p>
                    <p className="text-gray-700 text-sm">{guide.info.reason}</p>
                  </div>
                  <Link
                    to={`/user/guide/${guide?.email}`}
                    className="bg-green-500 text-white text-center py-2 rounded-b-lg "
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default GuideSection;
