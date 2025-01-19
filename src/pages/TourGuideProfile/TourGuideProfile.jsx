import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const TourGuideProfile = () => {
  const data = useLoaderData() || {};
  const { guide = [], stories = [] } = data;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Profile Section */}
        <div className="flex flex-col justify-center items-center space-x-6 mb-6">
          <img
            src={guide?.image}
            alt={guide?.name}
            className="w-48 h-48 rounded-lg shadow-lg"
          />
          <div className="text-center mt-2">
            <h2 className="text-2xl font-bold text-green-600">{guide?.name}</h2>
            <p className="text-gray-600">{guide?.email}</p>
            <p className="text-sm text-green-500 font-semibold capitalize">
              {guide.role}
            </p>
          </div>
        </div>

        {/* Guide Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">{guide.info.reason}</p>
        </div>

        {/* Stories Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Stories Added
          </h3>
          {stories?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories?.map((story) => (
                <div
                  key={story._id}
                  className="bg-gray-100 flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg shadow-md"
                >
                  {/* Image Section */}
                  <img
                    className="w-60 h-40 rounded-md object-cover"
                    src={story?.images?.[0]}
                    alt={story.title}
                  />

                  {/* Content Section */}
                  <div className="flex flex-col justify-between">
                    <h4 className="text-lg font-bold text-green-600 mb-2">
                      {story.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {story.description?.slice(0, 100)}
                    </p>
                    {/* <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm">
               Read More
             </button> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No stories added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
