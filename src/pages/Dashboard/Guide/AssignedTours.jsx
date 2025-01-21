import React, { useState } from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import dayjs from "dayjs";
import Spiner from "../../../components/Spiner";

const AssignedTours = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  console.log(user);

  const {
    data: tours = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tour", "user"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/assigned-tour/${user?.email}`);
      return data;
    },
  });

  //   const [tours, setTours] = useState([
  //     {
  //       id: 1,
  //       packageName: "Sundarbans Adventure",
  //       touristName: "John Doe",
  //       tourDate: "2025-02-15",
  //       tourPrice: "$300",
  //       status: "Review", // Status: Pending, In Review, Accepted, Rejected
  //     },
  //     {
  //       id: 2,
  //       packageName: "Cox's Bazar Getaway",
  //       touristName: "Jane Smith",
  //       tourDate: "2025-02-20",
  //       tourPrice: "$200",
  //       status: "Pending",
  //     },
  //   ]);

  // Handle Accept
  const handleAccept = async (id) => {
    try {
      const data = await axiosSecure.patch(`booking/status/${id}`, {
        status: "Accepted",
      });
      //   console.log(data);
    } catch (err) {
      console.log(err);
    }
    refetch();
  };

  // Handle Reject
  const handleReject = async (id) => {
    try {
      const data = await axiosSecure.patch(`booking/status/${id}`, {
        status: "Rejected",
      });
      //   console.log(data);
    } catch (err) {
      console.log(err);
    }
    refetch();
  };

  console.log(tours);
  if (isLoading) return <Spiner />;
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6">
        My Assigned Tours
      </h2>
      {tours.length <= 0 ? (
        "No Assign Tour available"
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-cyan-500 text-white">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Package Name</th>
                <th className="py-2 px-4">Tourist Name</th>
                <th className="py-2 px-4">Tour Date</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours?.map((tour, index) => (
                <tr key={tour.id} className="text-">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{tour?.package}</td>
                  <td className="py-2 px-4">{tour?.tourist}</td>
                  <td className="py-2 px-4 text-sm">
                    {dayjs(tour?.date).format("DD-MM-YYYY")}
                  </td>
                  <td className="py-2 px-4">{tour?.price}</td>
                  <td className="py-2 px-4 ">
                    <span
                      className={`text-xs p-1 rounded-md ${
                        tour.status === "Pending"
                          ? "badge-warning"
                          : tour.status === "Review"
                          ? "badge-info"
                          : tour.status === "Accepted"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {tour?.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex items-center justify-center space-x-2">
                    <button
                      className={`btn btn-sm ${
                        tour?.status === "Review"
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : ""
                      }`}
                      //   disabled={tour.status !== "Review"}
                      onClick={() => handleAccept(tour._id)}
                    >
                      <MdCheckCircle className="mr-1" />
                      Accept
                    </button>
                    <button
                      className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => handleReject(tour._id)}
                    >
                      <MdCancel className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal */}
    </div>
  );
};

export default AssignedTours;
