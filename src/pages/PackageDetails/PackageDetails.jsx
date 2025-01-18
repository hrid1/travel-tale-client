import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PackageDetails = () => {
  const packageData = useLoaderData();
  const id = useParams();
  const { user } = useAuth();

  console.log(id, packageData);
  const guides = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Safi" },
    { id: 3, name: "Kafi" },
  ];

  const [tourDate, setTourDate] = useState(new Date());
  const [selectedGuide, setSelectedGuide] = useState("");

  //   const formatedDate = tourDate.toISOString() ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingDetails = {
      package: packageData?.tripTitle,
      price: packageData?.price,
      tourist: user?.displayName,
      toristEmail: user?.email,
      date: tourDate.toISOString(),
      guideInfo: selectedGuide,
      status: "Pending",
    };
    console.table(bookingDetails);
    // console.log(e.target.guide.value);
    // send to the server
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        bookingDetails
      );
      toast.success("Booking Successful!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl my-3 font-semibold">
        Package Details
      </h2>
      {/* img galary */}
      <section>
        
      </section>
      {/* pkg details */}
      <section className="max-w-5xl mx-auto p-6 bg-orange-200/40 shadow-md rounded-lg">
        {/* <img
          src={packageData.images[0]}
          alt={packageData.tripTitle}
          className="w-full h-64 object-cover rounded-md"
        /> */}

        <div className="mt-6">
          <p className="text-teal-500 uppercase text-sm font-bold">
            {packageData.tourType}
          </p>

          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            {packageData.tripTitle}
          </h1>

          <p className="text-lg text-gray-700 font-semibold mt-4">
            Price:$ <span className="text-blue-500">{packageData?.price}</span>
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <p className="text-gray-600 mt-2">{packageData?.about}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Tour Plan</h2>
            <p className="text-gray-600 mt-2 whitespace-pre-wrap">
              {packageData?.tourPlan}
            </p>
          </div>
        </div>
      </section>
      {/* guide info */}

      <section></section>
      {/* booking form */}
      <section>
        <div className="max-w-4xl mx-auto p-6 bg-base-200 shadow-md rounded-lg my-4">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Booking Form
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Package Name: {packageData?.tripTitle}
              </h2>
            </div>

            {/* Tourist Name & email */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="touristName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Tourist Name
                </label>
                <input
                  type="text"
                  id="touristName"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="touristEmail"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Tourist Email
                </label>
                <input
                  type="email"
                  id="touristEmail"
                  value={user?.email || ""}
                  readOnly
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Tourist Image & Price */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="touristImage"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Tourist Image/URL
                </label>
                <input
                  type="text"
                  id="touristImage"
                  value={user?.photoURL || ""}
                  readOnly
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  value={packageData.price || ""}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Tour Guide Name & Tour Date */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guide"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Tour Guide Name
                </label>
                <select
                  id="guide"
                  name="guide"
                  value={selectedGuide}
                  onChange={(e) => setSelectedGuide(e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Guide</option>

                  {guides.map((guide) => (
                    <option key={guide.id} value={guide.name}>
                      {guide.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="tourDate"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Tour Date
                </label>
                <DatePicker
                  selected={tourDate}
                  onChange={(date) => setTourDate(date)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  dateFormat="yyyy/MM/dd"
                />
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-5/6 block mt-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mx-auto"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
