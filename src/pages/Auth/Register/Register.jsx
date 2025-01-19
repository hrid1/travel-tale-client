import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { saveUser, uploadImageToBB } from "../../../api/utilis";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserInfo } = useAuth();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.files[0];

    // password authentication
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passRegex.test(password)) {
      setError({ ...error, password: "Password doesn't meet the criteria!" });
      return;
    }

    const imageUrl = await uploadImageToBB(image);
    console.log(username, email, password, imageUrl);

    try {
      // create User
      const result = await createUser(email, password);
      // save name and photo
      await updateUserInfo(username, imageUrl);
      // const userInfo = { name: username, email: email, image: imageUrl };
      console.log(result);
      await saveUser(result?.user);

      toast.success("Register Successful!");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // handle showhide passwrod
  const [show, setShow] = useState(false);
  const handleShowEye = (show) => {
    setShow(!show);
  };

  return (
    <div>
      <div className="flex items-center justify-center  min-h-[calc(100vh-80px)]">
        <div className="w-full border max-w-md p-6 bg-green-50 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister} className="mt-4">
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700"
              >
                User Name
              </label>
              <input
                name="username"
                type="username"
                id="username"
                required
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="photo"
                className="block text-sm font-semibold text-gray-700"
              >
                Upload Photo
              </label>
              <input
                name="photo"
                type="file"
                id="photo"
                required
                placeholder="Photo"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className=" relative ">
                <p
                  className=" absolute right-2.5 top-5 cursor-pointer"
                  onClick={() => handleShowEye(show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none  focus:ring-emerald-400 "
                />
              </div>
            </div>
            {/* for password */}
            {error && (
              <span className="text-sm font-medium text-red-500">
                {error.password}
              </span>
            )}
            {/* for firebase auth */}
            {/* {error && (
              <span className="text-sm font-medium text-red-500">
                {error.auth}
              </span>
            )} */}

            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg  font-semibold"
            >
              Register
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="text-sm font-medium text-green-600 hover:underline"
            >
              Sign In
            </Link>
          </div>
          {/* <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-md hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-lg" />
            Continue with Google
          </button>
        </div> */}
          <p className="mt-4 text-sm text-center text-gray-600">
            By signing in, you agree to our{" "}
            <Link to="/" className="text-green-600 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/" className="text-green-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
