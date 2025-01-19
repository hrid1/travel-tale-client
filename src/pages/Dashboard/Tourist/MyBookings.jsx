import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import { useQuery } from "@tanstack/react-query";
import Spiner from "../../../components/Spiner";
import useAuth from "../../../hooks/useAuth";

const MyBookings = () => {
  //   const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  // load data
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/booking/${user?.email}`
      );
      return data;
    },
  });

  // Handle payment redirection
  const handlePay = (bookingId) => {
    navigate(`/payment/${bookingId}`);
  };

  // Handle cancellation
  //   const handleCancel = async (bookingId) => {
  //     try {
  //       await axios.delete(`/api/bookings/${bookingId}`); // Replace with your delete API endpoint
  //       setBookings((prevBookings) =>
  //         prevBookings.filter((booking) => booking._id !== bookingId)
  //       );
  //       alert("Booking canceled successfully");
  //     } catch (error) {
  //       console.error("Failed to cancel booking", error);
  //       alert("Failed to cancel booking");
  //     }
  //   };

  if (isLoading) return <Spiner />;
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>
      <table className="min-w-full bg-green-100/60 border border-gray-200 rounded-lg ">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-semibold">
            <th className="py-2 px-4 border">Package Name</th>
            <th className="py-2 px-4 border">Tour Guide</th>
            <th className="py-2 px-4 border">Tour Date</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="text-center">
              <td className="py-2 px-4 border">{booking?.package}</td>
              <td className="py-2 px-4 border">{booking?.guideInfo}</td>
              <td className="py-2 px-4 border">
                {dayjs(booking?.date).format("DD-MM-YYYY")}
              </td>
              <td className="py-2 px-4 border">{booking?.price}</td>
              <td className="py-2 px-4 border">{booking?.status}</td>
              <td className="py-2 px-4 border space-x-2">
                <button
                  onClick={() => handlePay(booking?._id)}
                  className="bg-green-500 text-white  rounded-lg hover:bg-green-600 btn btn-sm"
                >
                  Pay
                </button>
                {booking?.status === "Pending" && (
                  <>
                    <button
                      //   onClick={() => handleCancel(booking._id)}
                      className="bg-red-500 text-white btn rounded-lg hover:bg-red-600 btn-sm"
                    >
                      Cancel
                    </button>
                  </>
                )}
                {/* {booking?.status !== "Pending" && (
                  <span className="text-gray-500 italic">No actions</span>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
