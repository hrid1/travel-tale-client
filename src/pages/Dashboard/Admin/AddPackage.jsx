import axios from "axios";
import { uploadImagesToBB } from "../../../api/utilis";
import toast from "react-hot-toast";

const AddPackage = () => {
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const tripTitle = form.tripTitle.value;
    const tourType = form.tourType.value;
    const price = form.price.value;
    const about = form.about.value;
    const tourPlan = form.tourPlan.value;
    const imagesFile = form.photo.files;
    const images = await uploadImagesToBB(imagesFile);

    const formData = {
      tripTitle,
      tourType,
      price,
      about,
      images,
      tourPlan,
    };
    console.log("Submitted Package Data:", formData);
    // Add logic to send data to the backend here
    try {
      const { data } = await axios.put(
        `http://localhost:5000/package`,
        formData
      );
      console.log(data);
      toast.success("Package Succesfully Added!")
    } catch (err) {
      console.log(err);
    }

    // alert("Package added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl m-4">
        <h2 className="text-2xl font-bold text-cyan-600 text-center mb-2">
          Add New Package
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Trip Title */}
          <div className="mb-2">
            <label
              htmlFor="tripTitle"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Trip Title
            </label>
            <input
              type="text"
              id="tripTitle"
              name="tripTitle"
              className="input input-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Enter trip title"
              required
            />
          </div>
          {/* Image URL */}
          <div className="mb-2">
            <label
              htmlFor="photo"
              className="block text-sm font-semibold text-gray-700"
            >
              Upload Photos
            </label>
            <input
              name="photo"
              type="file"
              id="photo"
              multiple // Allow selecting multiple files
              required
              placeholder="Upload Photos"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div className="mb-2 flex justify-between gap-4">
            {/* Tour Type */}
            <div className="w-full md:w-1/2">
              <label
                htmlFor="tourType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tour Type
              </label>
              <input
                type="text"
                id="tourType"
                name="tourType"
                className="input input-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter tour type (e.g., Adventure, Family)"
                required
              />
            </div>

            {/* Price */}
            <div className="w-full md:w-1/2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="input input-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter price (e.g., $499)"
                required
              />
            </div>
          </div>

          {/* Tour Plan */}
          <div className="mb-2">
            <label
              htmlFor="tourPlan"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tour Plan
            </label>
            <textarea
              id="tourPlan"
              name="tourPlan"
              className="textarea textarea-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Provide the tour plan (e.g., Day 1: ..., Day 2: ...)"
              rows="4"
              required
            ></textarea>
          </div>

          {/* About */}
          <div className="mb-2">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              className="textarea textarea-bordered w-full border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Enter a brief description of the package"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 text-white w-full"
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
