import { BsXLg } from "react-icons/bs";
import { FaLeftLong } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleGetCode = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email)


  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-288px)] bg-gray-50">
      <form
        onSubmit={handleGetCode}
        className="bg-white shadow-md p-6 rounded-lg  w-96"
      >
        <button
          type="button"
          className="mx-auto  border h-12 w-12 rounded-md bg-cyan-50 flex items-center justify-center"
        >
          <MdLockOutline className="mx-auto my-4 text-3xl  rounded-md" />
        </button>

        <h2 className="text-center mb-6 font-extrabold text-2xl text-cyan-600">
          Forgot Password
        </h2>
        <input
          className="input input-bordered w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <div className="flex justify-between items-center">
          <Link to="/">
            <button type="button" className="btn text-white bg-cyan-500">
              <FaLeftLong /> Go Back{" "}
            </button>
          </Link>
          <button
            type="submit"
            className="btn  mt-2 text-white bg-cyan-500 hover:bg-cyan-600"
          >
            Get Code
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
