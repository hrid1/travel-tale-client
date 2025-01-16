import React from "react";
import useAuth from "../hooks/useAuth";
import Spiner from "../components/Spiner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) return <Spiner />;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
