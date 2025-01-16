import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TouristMenu from "../components/dashboard/TouristMenu";
import AdminMenu from "../components/dashboard/AdminMenu";
import GuideMenu from "../components/dashboard/GuideMenu";
import useRole from "../hooks/useRole";

import { TiThMenu } from "react-icons/ti";

const Dashboard = () => {
  const [role] = useRole();
  console.log(role);
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
          <div className="min-h-screen bg-blue-100 w-60   flex flex-col justify-between">
            {/* logo & name */}
            <div className="h-14">
              logo
              <label
                htmlFor="my-drawer-2"
                className="font-bold rounded drawer-button md:hidden right-0 btn btn-sm  absolute bg-blue-600 hover:bg-red-600 text-white"
              >
                X
              </label>
            </div>

            {/*Sidebar Menu Items  */}
            <div className="flex-1 bg-base-200">
              {role === "admin" && <AdminMenu />}
              {role === "tourist" && <TouristMenu />}
              {role === "guide" && <GuideMenu />}
            </div>
            {/* Common Menu */}
            <div className="h-60">profiel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
