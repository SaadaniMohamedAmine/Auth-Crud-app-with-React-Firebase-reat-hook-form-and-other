import React from "react";
import { Navigate } from "react-router-dom";
import Feed from "../components/Feed";

const PrivateRoute = ({ setIsAuth }) => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? <Feed setIsAuth={setIsAuth} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
