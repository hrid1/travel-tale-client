import React from "react";
import { NavLink } from "react-router-dom";

const GuideMenu = () => {
  return (
    <ul className="menu font-semibold  text-base-content   p-4 space-y-0.5 ">
      {/* Sidebar content here */}

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Manage Profile
      </NavLink>
      <NavLink
        to="my-assigned-tours"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        My Assigned Tours
      </NavLink>
      <NavLink
        to="guide-manage-stories"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Manage Stories
      </NavLink>
      <NavLink
        to="guide-add-stories"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Add Stories
      </NavLink>
    </ul>
  );
};

export default GuideMenu;
