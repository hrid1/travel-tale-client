import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TouristMenu from "../components/dashboard/TouristMenu";
import AdminMenu from "../components/dashboard/AdminMenu";
import GuideMenu from "../components/dashboard/GuideMenu";
import useRole from "../hooks/useRole";
import { TiThMenu } from "react-icons/ti";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [role] = useRole();
  const { logOut } = useAuth();
  console.log(role);

  const handleLogout = () => {
    logOut();
    toast("⚠️ Logout Successful!");
  };

  const navLinks = (
    <div className="flex flex-col w-full px-4 font-semibold space-y-0.5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold  underline text-sky-600  rounded-sm p-2"
            : "p-2 border rounded"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-sky-600  rounded-sm p-2"
            : "p-2 border rounded"
        }
        to="/community"
      >
        Community
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-sky-600 0  rounded-sm p-2"
            : "p-2 border rounded"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold underline text-sky-600 0  rounded-sm p-2"
            : "p-2 border rounded"
        }
        to="/trips"
      >
        Trips
      </NavLink>
      <button onClick={handleLogout} className="btn btn-sm">
        Logout
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
            className="btn btn-sm btn-primary m-1 drawer-button md:hidden right-0 rounded  absolute"
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
          <div className="min-h-screen bg-sky-600 w-60  text-white  flex flex-col justify-between">
            {/* logo & name */}
            <div className="h-14">
              logo
              <label
                htmlFor="my-drawer-2"
                className="font-bold rounded drawer-button md:hidden right-0 btn btn-sm  absolute bg-sky-600 hover:bg-red-600 text-white"
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
