import { FcGoogle } from "react-icons/fc";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/travel-logo.png";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //   handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // user login
    try {
      const result = await loginUser(email, password);
      console.log(result);
      toast.success("Login Successful !");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast(err?.message);
    }
  };

  // Google sing In
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-[calc(100vh-288px)]">
          <div className="w-full max-w-md m-auto bg-gary-500 rounded p-5 bg-cyan-100/60 my-4 shadow-md">
            <header>
              <Link to="/">
                {" "}
                <img className="w-20 mx-auto mb-5" src={logo} />
              </Link>

              <h1 className="text-center text-2xl font-semibold">
                Login Your Account
              </h1>
            </header>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 ">Eamil</label>
                <input
                  className="w-full p-2 mb-6 border-b-2 border-cyan-500 outline-none focus:bg-cyan-100"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 ">Password</label>
                <input
                  className="w-full p-2 mb-6  border-b-2 border-cyan-500 outline-none focus:bg-cyan-100"
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full bg-cyan-400   font-bold py-2 px-4 mb-4 rounded btn"
                  type="submit"
                />
              </div>
            </form>
            <div className="mb-4 text-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-md hover:bg-gray-100"
              >
                <FcGoogle className="mr-2 text-lg" />
                Continue with Google
              </button>
            </div>
            <footer className="font-medium">
              <Link
                className="text-cyan-800 hover:text-pink-700 text-sm float-left"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
              <Link
                className="text-cyan-800 hover:text-pink-700 text-sm float-right"
                to="/register"
              >
                Create Account
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
