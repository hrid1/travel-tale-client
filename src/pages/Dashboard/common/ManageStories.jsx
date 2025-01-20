import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ManageStories = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: stories = [] } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/stories/${user?.email}`);
      return data;
    },
  });

  console.log(stories);

  // Handle delete story
  const handleDelete = async (id) => {};

  // Handle edit story navigation
  const handleEdit = (id) => {
    navigate(`/edit-story/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6">Manage Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div
              key={story._id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
            >
              {/* Story Images */}
              <div className="grid h-44  grid-cols-2 gap-2 mb-4">
                {story?.images?.slice(0,2).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Story Image ${index}`}
                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                  />
                ))}
              </div>

              {/* Story Details */}
              <h3 className="text-lg font-bold text-cyan-600">{story.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{story.description}</p>

              {/* Actions */}
              <div className="mt-auto flex space-x-2">
                <button
                  className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                  //   onClick={() => handleEdit(story.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm bg-orange-500 hover:bg-red-600 text-white"
                  //   onClick={() => handleDelete(story.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No stories added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ManageStories;
