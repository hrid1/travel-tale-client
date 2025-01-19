import React from "react";
import { NavLink } from "react-router-dom";

const TouristMenu = () => {
  return (
    <ul className="menu font-semibold     p-4 space-y-0.5  ">
      {/* Sidebar content here */}

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${
            isActive ? "bg-green-800" : ""
          }`
        }
      >
        Manage Profile
      </NavLink>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${
            isActive ? "bg-green-800" : ""
          }`
        }
      >
        My Bookings
      </NavLink>
      <NavLink
        to="tourist-manage-stories"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${
            isActive ? "bg-green-800" : ""
          }`
        }
      >
        Manage Stories
      </NavLink>
      <NavLink
        to="tourist-add-stories"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${
            isActive ? "bg-green-800" : ""
          }`
        }
      >
        Add Stories
      </NavLink>
      <NavLink
        to="join-guide"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${
            isActive ? "bg-green-800" : ""
          }`
        }
      >
        Join As tour guide
      </NavLink>
    </ul>
  );
};

export default TouristMenu;
