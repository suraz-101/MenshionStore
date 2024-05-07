export const setToken = (value) => {
  return localStorage.setItem("token", value);
};
export const getToken = (key) => {
  return localStorage.getItem(key);
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const removeUser = () => {
  return localStorage.removeItem("currentUser");
};
