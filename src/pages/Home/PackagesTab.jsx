import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Spiner from "../../components/Spiner";
import CardsSkeleto from "../../components/CardsSkeleto";
import { Link } from "react-router-dom";

const PackagesTab = () => {
  const { data: packages = [], isLoading } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/packages?limit=true`
      );
      return data;
    },
  });

  console.log(packages)
  if (isLoading) return <CardsSkeleto />;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages?.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image Section */}
            <img
              src={pkg?.images[0]}
              alt={pkg.tripTitle}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Tour Type */}
              <p className="text-sm font-medium text-teal-500 uppercase">
                {pkg.tourType}
              </p>
              {/* Trip Title */}
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                {pkg.tripTitle}
              </h3>
              {/* Price */}
              <p className="text-sm text-gray-600 mt-1">Price: {pkg.price}</p>
              {/* View Details Button */}
              <Link to={`/package/${pkg?._id}`}>
                <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesTab;
