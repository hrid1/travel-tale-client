import axios from "axios";
import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const JoinAsTourGuide = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    reason: "",
    cvLink: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send to backend here
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/users/${user?.email}`,
        {
          status: "Requested",
          info: formData,
        }
      );
      console.log(data);
      Swal.fire({
        title: "Good job!",
        text: "Successfully Applied to become a Guide!",
        icon: "success",
        timer: 1500,
      });
    } catch (err) {
      //   console.log(err.response.data);
      toast.error(err.response.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-cyan-600 text-center mb-6">
          Join as a Tour Guide
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Application Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Application Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Enter your application title"
              required
            />
          </div>

          {/* Reason */}
          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Why do you want to be a Tour Guide?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="textarea textarea-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Share your motivation"
              rows="4"
              required
            ></textarea>
          </div>

          {/* CV Link */}
          <div className="mb-6">
            <label
              htmlFor="cvLink"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              CV Link
            </label>
            <div className="flex items-center space-x-2">
              <FaPaperclip className="text-cyan-500" />
              <input
                type="url"
                id="cvLink"
                name="cvLink"
                value={formData.cvLink}
                onChange={handleChange}
                className="input input-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your CV link (e.g., Google Drive, LinkedIn)"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 text-white w-full"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinAsTourGuide;
