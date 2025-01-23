import React from "react";

const TourPlan = ({ tourPlan }) => {
  // console.log(tourPlan);
  const plans = tourPlan.split(", ");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <h3 className="text-green-500 font-semibold mb-2">{`Day ${
            index + 1
          }`}</h3>
          <p className="text-gray-700">{plan.split(": ")[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default TourPlan;
