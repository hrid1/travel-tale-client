import axios from "axios";

// upload image
export const uploadImageToBB = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    return data.data.url;
  } catch (err) {
    console.log(err);
  }
};
