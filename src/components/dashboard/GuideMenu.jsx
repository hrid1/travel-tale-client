import { NavLink } from "react-router-dom";

const GuideMenu = () => {
  return (
    <ul className="menu font-semibold  p-4 space-y-0.5 text-white">
      {/* Sidebar content here */}

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `mx-auto border-b-2 w-full p-2 rounded ${isActive ? "bg-green-900" : ""}`
        }
      >
        Manage Profile
      </NavLink>
      <NavLink
        to="my-assigned-tours"
        className={({ isActive }) =>
          `mx-auto border-b-2 w-full p-2 rounded ${isActive ? "bg-green-900" : ""}`
        }
      >
        My Assigned Tours
      </NavLink>
      <NavLink
        to="guide-manage-stories"
        className={({ isActive }) =>
          `mx-auto border-b-2 w-full p-2 rounded ${isActive ? "bg-green-900" : ""}`
        }
      >
        Manage Stories
      </NavLink>
      <NavLink
        to="guide-add-stories"
        className={({ isActive }) =>
          `mx-auto border-b-2 w-full p-2 rounded ${isActive ? "bg-green-900" : ""}`
        }
      >
        Add Stories
      </NavLink>
    </ul>
  );
};

export default GuideMenu;
