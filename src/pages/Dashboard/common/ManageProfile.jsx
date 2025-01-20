import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spiner from "../../../components/Spiner";
import useRole from "../../../hooks/useRole";
import { ImSpinner3 } from "react-icons/im";
import { uploadImageToBB } from "../../../api/utilis";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";

const ManageProfile = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, loading, updateUserInfo } = useAuth();
  const [role] = useRole();
  const [isloading, setIsloading] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleApplyAsGuide = () => {
    navigate("/dashboard/join-guide");
  };

  // handle update form data
  const handleUpdate = async (e) => {
    setIsloading(true);
    e.preventDefault();
    const name = e.target.username.value || user?.displayName;
    const imageFile = e.target.photo.files[0];
    const image = (await uploadImageToBB(imageFile)) || user?.photoUrl;
    console.log(name, image);

    try {
      await updateUserInfo(name, image);
      const { data } = await axiosPublic.patch(`/user-profile/${user?.email}`, {
        name,
        image,
      });
      // console.log(data);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setIsModalOpen(false);
      setIsloading(false);
    }, 800);
  };

  if (loading) return <Spiner />;

  return (
    <div className=" flex flex-col items-center py-10 ">
      {/* Welcome Message */}
      <h1 className="text-2xl font-bold text-green-800">
        Welcome to Your Profile, {user?.displayName}!
      </h1>

      {/* User Info Card */}
      {/* User Info Card */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-lg rounded-xl p-8 mt-8 w-4/5 md:w-[460px]">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-28 h-28 rounded-full border-4 border-green-500 mb-5 shadow-sm"
          />
          <h2 className="text-2xl font-bold text-gray-700">{user.name}</h2>
          <p className="text-gray-600 italic">{user.email}</p>
          <p className="font-semibold mt-3 text-green-800 px-4 py-1 rounded-full">
            Name: <span className=" capitalize">{user.displayName}</span>
          </p>
          <p className="font-medium mt-3 bg-green-100 text-green-800 px-4 py-1 rounded-full">
            Role: <span className=" capitalize">{role}</span>
          </p>
        </div>
        <button
          onClick={handleEditClick}
          className="flex items-center gap-3 mt-6 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 w-full justify-center shadow-md"
        >
          <FaEdit className="text-lg" />
          <span> Edit Profile</span>
        </button>
        {role === "tourist" && (
          <button
            onClick={handleApplyAsGuide}
            className="mt-5 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 w-full shadow-md btn"
          >
            Apply For Tour Guide
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="min-h-screen w-full fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center mx-auto">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Edit Profile
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user.displayName}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  // defaultValue={user.displayName}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <button
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center gap-2"
                // onClick={handleCloseModal}
              >
                {isloading ? (
                  <>
                    {/* <span className="text-sm font-medium">Updating...</span> */}
                    <ImSpinner3 className="text-lg animate-spin font-medium" />
                  </>
                ) : (
                  <>
                    <span> Save Change</span>
                  </>
                )}
              </button>
            </form>
            <button
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProfile;
