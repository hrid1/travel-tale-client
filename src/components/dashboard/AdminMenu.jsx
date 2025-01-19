import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <ul className="menu font-semibold text-white p-4 space-y-0.5">
      {/* Admin Menu Links */}
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${isActive ? "bg-green-800" : ""}`
        }
      >
        Manage Profile
      </NavLink>
      <NavLink
        to="/dashboard/add-package"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${isActive ? "bg-green-800" : ""}`
        }
      >
        Add Package
      </NavLink>
      <NavLink
        to="/dashboard/manage-users"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${isActive ? "bg-green-800" : ""}`
        }
      >
        Manage Users
      </NavLink>
      <NavLink
        to="/dashboard/manage-candidates"
        className={({ isActive }) =>
          `mx-auto border-b w-full p-2 rounded ${isActive ? "bg-green-800" : ""}`
        }
      >
        Manage Candidates
      </NavLink>
    </ul>
  );
};

export default AdminMenu;
