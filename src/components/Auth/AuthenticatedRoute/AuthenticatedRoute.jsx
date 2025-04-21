import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../../FirebaseConfig";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const AuthenticatedRoute = ({ children, redirectTo = "/" }) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setTimeout(() => {
          const currentAuthUser = auth.currentUser;
          setIsAuthenticated(!!currentAuthUser);
          setIsChecking(false);
        }, 500);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsChecking(false);
      }
    };

    checkAuthStatus();
  }, [currentUser]);

  if (isChecking) {
    return <LoadingSpinner />;
  }

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default AuthenticatedRoute;
