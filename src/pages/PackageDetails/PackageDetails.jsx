import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Gallery } from "react-grid-gallery";
import ImageGallery from "../../components/ImageGalary";
import TourPlan from "../../components/dashboard/TourPlan";
import GuideSection from "./GuideSection";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Confetti from "react-confetti";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWindowSize from "../../hooks/useWindowSize";
import useRole from "../../hooks/useRole";

const PackageDetails = () => {
  const packageData = useLoaderData();
  const { user } = useAuth();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [role] = useRole();
  // console.log(role);
  const [showConfeti, setShowConfetti] = useState(false);
  const width = window.innerWidth;

  // console.log(packageData);
  const { data: guides = [] } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users/guide");
      return data;
    },
  });

  const [tourDate, setTourDate] = useState(new Date());
  const [selectedGuide, setSelectedGuide] = useState("");
  const guide = guides.find((guide) => guide.email === selectedGuide);
  const guideInfo = { guideName: guide?.name, guideEmail: guide?.email };

  //   const formatedDate = tourDate.toISOString() ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingDetails = {
      package: packageData?.tripTitle,
      price: packageData?.price,
      tourist: user?.displayName,
      toristEmail: user?.email,
      date: tourDate.toISOString(),
      guideInfo,
      status: "Pending",
    };
    // console.table(bookingDetails);
    // console.log(e.target.guide.value);
    // send to the server
    try {
      
      const { data } = await axiosPublic.post("/booking", bookingDetails);
      Swal.fire({
        title: "<strong>Booking Successful!</strong>",
        icon: "success", // Fixed typo
        html: `
          <a 
            href="/dashboard/my-bookings" 
            class="text-green-500 text-xl font-bold underline hover:text-green-600"
            autofocus
          >
            Your Orders
          </a>
          
        `,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down",
      });
  // console.log(data);
      if (data.totalBookings >= 3) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000); 
      }
    } catch (err) {
  // console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl my-3 font-semibold">
        Package Details
      </h2>
      {/* img galary */}

      <section className="mx-auto max-w-6xl">
        <ImageGallery imageUrls={packageData?.images} />
      </section>
      {/* pkg details */}
      <section className="max-w-5xl mx-auto p-6 bg-orange-100/40 shadow-md rounded-lg">
        <div className="mt-6">
          <p className="text-green-500 uppercase text-sm font-bold">
            {packageData.tourType}
          </p>

          <div className="flex  justify-between items-center ">
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {packageData.tripTitle}
            </h2>

            <p className="text-2xl text-gray-700 font-semibold mt-4">
              Price:${" "}
              <span className="text-green-500">{packageData?.price}</span>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <p className="text-gray-600 mt-2">{packageData?.about}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Tour Plan</h2>

            <TourPlan tourPlan={packageData?.tourPlan}></TourPlan>
          </div>
        </div>
      </section>
      {/* guide info */}

      <section>
        <GuideSection />
      </section>

      {/* for confeti */}
      <div className="flex items-center justify-center">
        {showConfeti && (
          <Confetti
            width={width}
            height={"2200"}
            numberOfPieces={500}
            gravity={0.2}
          />
        )}
      </div>
      {/* booking form */}
      <section className="relative ">
        <div className="max-w-5xl mx-auto p-6 bg-green-100 shadow-md rounded-lg my-4">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
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
                  defaultValue={packageData.price || ""}
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
                  required
                  value={selectedGuide}
                  onChange={(e) => setSelectedGuide(e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Guide</option>

                  {guides.map((guide) => (
                    <option key={guide?._id} value={guide?.email}>
                      {guide?.name}
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
                disabled={role !== "tourist"}
                type="submit"
                className="w-5/6 block mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 mx-auto disabled:cursor-not-allowed"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>

        {/* congrats div */}
        {showConfeti && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200 p-6 lg:p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Congratulations! <br /> You Have Ordered 3 Packages.
            </h2>

            <button
              onClick={() => setShowConfetti(false)}
              className="mt-5 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md transition-all"
            >
              Apply Discount
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PackageDetails;
