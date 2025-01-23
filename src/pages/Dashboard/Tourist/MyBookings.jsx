import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import { useQuery } from "@tanstack/react-query";
import Spiner from "../../../components/Spiner";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyBookings = () => {
  //   const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // load data
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/booking/${user?.email}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  // Handle payment redirection
  // const handlePay = (bookingId) => {
  //   navigate(`/payment/${bookingId}`);
  // };

  const handleCancel = (id) => {
    // console.log(id);
    try {
      axiosSecure.delete(`/booking/${id}`);
      toast.success("Booking Cancel!");
      refetch();
    } catch (err) {
      console.log(err);
    }
    refetch();
  };

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
              <td className="py-2 px-4 border">
                {booking?.guideInfo?.guideName}
              </td>
              <td className="py-2 px-4 border">
                {dayjs(booking?.date).format("DD-MM-YYYY")}
              </td>
              <td className="py-2 px-4 border">{booking?.price}</td>
              <td className="py-2 px-4 border ">
                <span
                  className={`text-xs p-1 rounded-md ${
                    booking.status === "Pending"
                      ? "badge-warning"
                      : booking.status === "Review"
                      ? "badge-info"
                      : booking.status === "Accepted"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {booking?.status}
                </span>
              </td>
              <td className="py-2 px-4 border space-x-2">
                <Link to={`/dashboard/payment/${booking._id}`}>
                  <button
                    // onClick={() => handlePay(booking?._id)}
                    className="bg-green-500 text-white  rounded-lg hover:bg-green-600 btn btn-sm"
                    disabled={booking?.status !== "Pending"}
                  >
                    Pay
                  </button>
                </Link>
                {booking?.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleCancel(booking._id)}
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
