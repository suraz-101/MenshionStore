import { Navigate } from "react-router-dom";
import { isLoggedIn, isValidRole } from "../utils/loginVerification";

export const PrivateRoute = ({ children, role = "" }) => {
  return (
    <>
      {isLoggedIn() & isValidRole(role) ? (
        children
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};
