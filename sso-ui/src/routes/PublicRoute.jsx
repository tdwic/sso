import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <Navigate to="/" /> : children;
}
