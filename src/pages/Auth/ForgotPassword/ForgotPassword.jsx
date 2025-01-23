import { BsXLg } from "react-icons/bs";
import { FaLeftLong } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const handleGetCode = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    document.getElementById("my_modal").showModal();
// console.log(email);
    resetPassword(email)
      .then((res) => {
        toast.success("Password Reset Email Sent!");
      })
      .catch((error) => {
    // console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-288px)] bg-gray-50">
      <form
        onSubmit={handleGetCode}
        className="bg-white shadow-md p-6 rounded-lg  w-96"
      >
        <button
          type="button"
          className="mx-auto  border h-12 w-12 rounded-md bg-green-50 flex items-center justify-center"
        >
          <MdLockOutline className="mx-auto my-4 text-3xl  rounded-md" />
        </button>

        <h2 className="text-center mb-6 font-extrabold text-2xl text-green-600">
          Forgot Password
        </h2>
        <input
          className="input input-bordered w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <div className="flex justify-between items-center">
          <Link to="/">
            <button type="button" className="btn text-white bg-green-500">
              <FaLeftLong /> Go Back{" "}
            </button>
          </Link>
          <button
            type="submit"
            className="btn  mt-2 text-white bg-green-500 hover:bg-green-600"
          >
            Get Code
          </button>
        </div>
      </form>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg text-center">Check Your Email</h3>
          <p className="py-4 text-center">
            A password reset link has been sent to your email. Click the button
            below to open Gmail.
          </p>
          <div className="flex justify-center">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open Gmail
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ForgotPassword;
