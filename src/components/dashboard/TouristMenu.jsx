import React from "react";
import { NavLink } from "react-router-dom";

const TouristMenu = () => {
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
        to="my-bookings"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        My Bookings
      </NavLink>
      <NavLink
        to="tourist-manage-stories"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Manage Stories
      </NavLink>
      <NavLink
        to="tourist-add-stories"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Add Stories
      </NavLink>
      <NavLink
        to="join-guide"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Join As tour guide
      </NavLink>
    </ul>
  );
};

export default TouristMenu;
