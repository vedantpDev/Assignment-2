import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { userEmail } = useSelector((store) => store.userData);
  return !userEmail ? children : <Navigate to={"/dashboard"} />;
};

export default PublicRoute;
