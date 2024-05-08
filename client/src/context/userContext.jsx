import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { usersData } from "../hooks/user";
// import { blogs } from "../Hooks/product";

export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  //   const [sort, setSort] = useState(1);
  const { users, err, getAllUsers } = usersData();

  // useEffect(() => {
  //   getAllUsers();
  // }, [getAllUsers]);
  return (
    <userContext.Provider value={{ users, err, getAllUsers }}>
      {children}
    </userContext.Provider>
  );
};
