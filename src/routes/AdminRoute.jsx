import React, { Children } from "react";
import useRole from "../hooks/useRole";
import Spiner from "../components/Spiner";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Spiner />;
  if (role === "admin") return children;
  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoute;
