import React from "react";
import useRole from "../hooks/useRole";
import Spiner from "../components/Spiner";
import { Navigate } from "react-router-dom";

const TouristRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  
  if (isLoading) return <Spiner />;
  if (role === "tourist") return children;

  return <Navigate to={"/dashboard"}></Navigate>;
};

export default TouristRoute;
