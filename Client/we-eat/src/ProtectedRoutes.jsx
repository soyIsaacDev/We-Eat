import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./App";
import {  useSelector } from "react-redux";

/* const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
}; */

/* const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet /> // Renders the next match in an array that matches the current Location
  ) : (
    <Navigate to="/" replace state={{ from: location }} />  // setting Location state
  );
}; */

export default function ProtectedRoutes() {
  const isAuth = useSelector((state) => state.loginState);
  const location = useLocation();
  
  return isAuth.autenticated==="LogedIn" ? (
    <Outlet /> // Renders the next match in an array that matches the current Location
  ) : (
    <Navigate to="/" replace state={{ from: location }} />  // setting Location state
  );
}

/* export default ProtectedRoutes; */
