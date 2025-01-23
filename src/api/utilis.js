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
    // console.log(err);
  }
};

// upload multiple images
export const uploadImagesToBB = async (images) => {
  const uploadedUrls = [];

  try {
    for (const image of images) {
      const formData =  new FormData();
      formData.append("image", image);

      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      uploadedUrls.push(data.data.url);
    }
    return uploadedUrls;
  } catch (err) {
    // console.log(err);
  }
};

// save user in DB

export const saveUser = async (user) => {
  await axios.post(`${import.meta.env.VITE_API_URL}/user/${user?.email}`, {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
  });
};
