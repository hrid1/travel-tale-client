import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { uploadImagesToBB } from "../../../api/utilis";
import { FaImage } from "react-icons/fa";

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
    console.log(files);
    const newImagesLinks = await uploadImagesToBB(files);

    try {
      await axiosSecure.patch(`/story/${id}/add-images`, {
        images: newImagesLinks,
      });
    } catch (err) {
      console.log(err);
    }
    refetch();
  };

  return (
    <div>
      <h2>Update your story</h2>
      <p>{story?.title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {story?.images?.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Story Image ${index}`}
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <button
              //   onClick={() => handleRemoveImage(img)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1  w-6 h-6 flex items-center justify-center rounded font-semibold"
            >
              X
            </button>
          </div>
        ))}

        <label
          htmlFor="imageUpload"
          className="flex flex-col items-center justify-center bg border-2 border-dashed rounded-lg cursor-pointer bg-orange-100 m-2.5 hover:bg-gray-100 text-teal-500"
        >
          <div className="flex flex-col items-center">
            <FaImage className="text-2xl" />
            <span className="text-sm">Click to upload or drag images here</span>
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
