import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://travel-tale.vercel.app",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
