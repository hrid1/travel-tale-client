import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { uploadImagesToBB } from "../../../api/utilis";
import { FaImage } from "react-icons/fa";
import Spiner from "../../../components/Spiner";
import toast from "react-hot-toast";

const UpdateStories = () => {
  const axiosSecure = useAxiosSecure();
  const paramsData = useParams();
  const { id } = paramsData || {};

  const {
    data: story,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/story/${id}`);
      return data;
    },
  });

  const handleAddImages = async (e) => {
    const files = e.target.files;
// console.log(files);
    const newImagesLinks = await uploadImagesToBB(files);

    try {
      await axiosSecure.patch(`/story/${id}/add-images`, {
        images: newImagesLinks,
      });
    } catch (err) {
  // console.log(err);
    }
    refetch();
  };

  const handleRemoveImage = async (image) => {
// console.log(image);
    try {
      await axiosSecure.patch(`/story/${id}/remove-image`, {
        image,
      });
    } catch (err) {
  // console.log(err);
    }
    refetch();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const storyInfo = {
      title,
      description,
    };
// console.log(storyInfo);
    try {
      const { data } = axiosSecure.patch(`/story/${id}`, storyInfo);
  // console.log(data);
      toast.success("Story Updated!");
    } catch (err) {
  // console.log(err);
    }
  };
  if (isLoading) return <Spiner />;
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">Update your story</h2>
      <p className="text-lg text-green-700 font-semibold text-center mb-6">
        {story?.title}
      </p>

      <form
        className="w-96 md:w-3/5 mx-auto bg-green-50 p-4 rounded-md"
        onSubmit={handleUpdate}
      >
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
            defaultValue={story?.title}
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
            rows="3"
            defaultValue={story?.description}
            required
          ></textarea>
        </div>

        <button className="btn w-full bg-green-500 text-white">Update</button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-6 p-2">
        {story?.images?.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Story Image ${index}`}
              className="w-full h-40 md:h-48 object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={() => handleRemoveImage(img)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1  w-6 h-6 flex items-center justify-center rounded font-semibold"
            >
              X
            </button>
          </div>
        ))}

        <label
          htmlFor="imageUpload"
          className="flex flex-col items-center justify-center bg border-2 border-dashed rounded-lg cursor-pointer bg-orange-100 m-2.5 h-32 md:h-40 hover:bg-gray-300 text-teal-500"
        >
          <div className="flex flex-col items-center">
            <FaImage className="text-2xl" />
            <span className="text-sm text-center">
              Click to upload or drag images here
            </span>
          </div>
          <input
            id="imageUpload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleAddImages}
            className="hidden"
          />
        </label>
      </div>

      <div className="mb-4"></div>
    </div>
  );
};

export default UpdateStories;
