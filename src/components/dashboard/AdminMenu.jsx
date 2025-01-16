import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <ul className="menu font-semibold text-base-content p-4 space-y-0.5">
      {/* Admin Menu Links */}
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
        to="/dashboard/add-package"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Add Package
      </NavLink>
      <NavLink
        to="/dashboard/manage-users"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Manage Users
      </NavLink>
      <NavLink
        to="/dashboard/manage-candidates"
        className={({ isActive }) =>
          `mx-auto border w-full p-2 rounded ${isActive ? "bg-blue-200" : ""}`
        }
      >
        Manage Candidates
      </NavLink>
    </ul>
  );
};

export default AdminMenu;
