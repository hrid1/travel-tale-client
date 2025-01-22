import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/travel-tale.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    toast("⚠️ Logout Successful!");
  };

  // console.log(user?.photoURL)

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold  underline text-green-500  rounded-sm p-2"
            : "p-2"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-500  rounded-sm p-2"
            : "p-2"
        }
        to="/community"
      >
        Community
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-500 0  rounded-sm p-2"
            : "p-2"
        }
        to="/aboutDeveloper"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-500 0  rounded-sm p-2"
            : "p-2"
        }
        to="/trips"
      >
        Trips
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-orange-100 backdrop-blur-md relative z-30">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-orange-100 rounded-box z-40 mt-3 w-52 p-2 shadow "
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center justify-center  text-xl">
            <img className="w-12 h-12" src={logo} alt="" />
            <span className="font-extrabold ">Travel Tale</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Profile" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w- p-2 shadow space-y-1"
                >
                  <li>
                    <Link to="/dashboard" className="px-0 py-0.5">
                      Dashboard
                    </Link>
                  </li>
                  <li className="text-cener">Hi, {user?.displayName}</li>
                  <li>{user?.email}</li>
                  <li>
                    <button onClick={handleLogout} className="btn btn-sm">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className=" space-x-2">
              <Link to="/login">
                <button className="btn ">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn bg-green-300">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
