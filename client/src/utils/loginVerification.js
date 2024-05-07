import { getToken } from "./session";
import moment from "moment";
import { jwtDecode } from "jwt-decode";

export const isLoggedIn = () => {
  const token = getToken("token");
  if (!token) return false;
  const { exp } = jwtDecode(token);
  const currentTime = moment(new Date().valueOf());
  const expDate = moment.unix(exp);
  if (currentTime > expDate) return false;
  return true;
};

export const isValidRole = (role) => {
  if (role === "") return true;
  if (!role) return false;
  const token = getToken("token");
  if (!token) return false;
  const { data } = jwtDecode(token);
  console.log(data.role);
  const isValid = data.role.includes(role);
  if (!isValid) return false;
  return true;
};

export const createUser = () => {
  const token = getToken("token");
  const { data } = jwtDecode(token);
  return localStorage.setItem("currentUser", JSON.stringify(data));
};

export const getUser = () => {
  return localStorage.getItem("currentUser");
};
