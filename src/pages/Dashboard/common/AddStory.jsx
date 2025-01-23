import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImagesToBB } from "../../../api/utilis";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Spiner from "../../../components/Spiner";
import Spiner2 from "../../../components/Spiner2";
import useRole from "../../../hooks/useRole";

const AddStory = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const imagesfile = form.images.files;
    const images = await uploadImagesToBB(imagesfile);

    const storyData = {
      title,
      description,
      images,
      owner: user.email,
    };

    console.log("Story Data Submitted:", storyData);
    try {
      const { data } = await axiosSecure.post("/stories", storyData);
      toast.success("Update Story");
      setLoading(false);
      //   console.log(data)

      if (role === "guide") {
        navigate("/dashboard/guide-manage-stories");
      } else {
        navigate("/dashboard/tourist-manage-stories");
      }
    } catch (err) {
      console.log(err);
    }

    // navigate("/manage-stories");
  };

  //   if (loading) return <Spiner />;
  return (
    <div className="min-h-[calc(100vh-40px)] bg-gray-50 py-10 px-6">
      {/* loader */}
      {loading && <Spiner2 />}
      {/* main form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Add Your Story
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Story Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input input-bordered w-full border-green-500 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter the story title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered w-full border-green-500 focus:ring-green-500 focus:border-green-500"
              placeholder="Write your story here"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              className="file-input file-input-bordered w-full border-green-500 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white w-full"
          >
            Add Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStory;
