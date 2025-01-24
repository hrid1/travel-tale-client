import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import TouristMenu from "../components/dashboard/TouristMenu";
import AdminMenu from "../components/dashboard/AdminMenu";
import GuideMenu from "../components/dashboard/GuideMenu";
import useRole from "../hooks/useRole";
import { TiThMenu } from "react-icons/ti";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import logo from "../assets/travel-tale.png";
import { FaHome, FaUsers, FaInfoCircle, FaSuitcase } from "react-icons/fa";

const Dashboard = () => {
  const [role] = useRole();
  const { logOut } = useAuth();
  // console.log(role);

  const handleLogout = () => {
    logOut();
    toast("⚠️ Logout Successful!");
  };

  const navLinks = (
    <div className="flex flex-col w-full px-4 font-semibold space-y-0.5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-600 rounded-sm p-2 flex items-center space-x-2"
            : "p-2 border-b-2 rounded flex items-center space-x-2"
        }
        to="/"
      >
        <FaHome className="text-orange-200" />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-600 rounded-sm p-2 flex items-center space-x-2"
            : "p-2 border-b-2 rounded flex items-center space-x-2"
        }
        to="/community"
      >
        <FaUsers className="text-orange-200" />
        <span>Community</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-600 rounded-sm p-2 flex items-center space-x-2"
            : "p-2 border-b-2 rounded flex items-center space-x-2"
        }
        to="/aboutDeveloper"
      >
        <FaInfoCircle className="text-orange-200" />
        <span>About</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-green-600 rounded-sm p-2 flex items-center space-x-2"
            : "p-2 border-b-2 rounded flex items-center space-x-2"
        }
        to="/trips"
      >
        <FaSuitcase className="text-orange-200" />
        <span>Trips</span>
      </NavLink>
      <button
        onClick={handleLogout}
        className="btn btn-sm flex items-center space-x-2"
      >
        <span>Logout</span>
      </button>
    </div>
  );
  return (
    <div>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm bg-green-600 text-white m-1 drawer-button md:hidden right-0 rounded  absolute"
          >
            <TiThMenu />
          </label>

          {/* Main Content */}
          <div className="mt-2 p-2">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-screen bg-green-700/90 w-60  text-white  flex flex-col justify-between">
            {/* logo & name */}
            <div className="h-14">
              <Link to="/" className="flex items-center  mt-4 pl-4">
                <img className="w-12 h-12" src={logo} alt="logo" />
                <h2 className="font-semibold">Travel Tale</h2>
              </Link>
              <label
                htmlFor="my-drawer-2"
                className="font-bold rounded drawer-button md:hidden right-0.5 top-0.5 btn btn-sm  absolute bg-green-600 hover:bg-green-600 text-white"
              >
                X
              </label>
            </div>

            {/*Sidebar Menu Items  */}
            <div className="flex-1 text-white ">
              {role === "admin" && <AdminMenu />}
              {role === "tourist" && <TouristMenu />}
              {role === "guide" && <GuideMenu />}
            </div>
            {/* Common Menu */}
            <div className="h-60 ">{navLinks}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
