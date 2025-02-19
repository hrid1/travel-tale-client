import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { Link } from "react-router-dom";

const Trips = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: packages = [], isLoading } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await axiosPublic("/packages");
      return data;
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center  my-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Explore Our Tour Packages
        </h1>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mt-2">
          Find your perfect getaway with curated trips tailored to your needs.
        </p>
      </div>

      <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 md:px-4">
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={pkg?.images[0]}
                alt={pkg.tripTitle}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-orange-600/70 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                {pkg.tourType}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col">
              {/* Trip Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {pkg.tripTitle}
              </h3>
              {/* Price */}
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium text-gray-700">Price:</span>{" "}
                {pkg.price}
              </p>

              {/* View Details Button */}
              <Link to={`/package/${pkg?._id}`} className="mt-auto">
                <button className="w-full bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Trips;
