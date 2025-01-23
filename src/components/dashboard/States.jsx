import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spiner from "../Spiner";
import {
  FaMoneyBillWave,
  FaUserTie,
  FaBoxOpen,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const States = () => {
  const axiosSecure = useAxiosSecure();

  const { data: states, isLoading } = useQuery({
    queryKey: ["state"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/dashboard-stats");
      return data;
    },
  });

  console.log(states);
  const {
    totalPayment,
    totalGuides,
    totalPackages,
    totalClients,
    totalStories,
  } = states || {};
  if (isLoading) return <Spiner />;

  return (
    <div className="flex flex-wrap gap-6  md:gap-10 mt-4 items-center justify-center bg-orange-50 p-4">
      {/* Total Payments */}
      <div className="flex items-center justify-center p-5 bg-base-200 shadow-lg rounded-lg">
        <FaMoneyBillWave className="text-green-500 text-4xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Total Payment</h3>
          <p className="text-2xl font-bold text-green-500">${totalPayment}</p>
        </div>
      </div>

      {/* Total Guides */}
      <div className="flex items-center p-5 bg-base-200 shadow-lg rounded-lg">
        <FaUserTie className="text-green-500 text-4xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Total Tour Guides</h3>
          <p className="text-2xl font-bold text-green-500">{totalGuides}</p>
        </div>
      </div>

      {/* Total Packages */}
      <div className="flex items-center p-5 bg-base-200 shadow-lg rounded-lg">
        <FaBoxOpen className="text-green-500 text-4xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Total Packages</h3>
          <p className="text-2xl font-bold text-green-500">{totalPackages}</p>
        </div>
      </div>

      {/* Total Clients */}
      <div className="flex items-center p-5 bg-base-200 shadow-lg rounded-lg">
        <FaUsers className="text-green-500 text-4xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Total Clients</h3>
          <p className="text-2xl font-bold text-green-500">{totalClients}</p>
        </div>
      </div>

      {/* Total Stories */}
      <div className="flex items-center p-5 bg-base-200 shadow-lg rounded-lg">
        <FaBook className="text-green-500 text-4xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Total Stories</h3>
          <p className="text-2xl font-bold text-green-500">{totalStories}</p>
        </div>
      </div>
    </div>
  );
};

export default States;
