import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { usersData } from "../hooks/user";
// import { blogs } from "../Hooks/product";

export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  //   const [sort, setSort] = useState(1);
  const { users, err, getAllUsers, getSingleUser, user } = usersData();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  // useEffect(() => {
  //   getAllUsers();
  // }, [getAllUsers]);
  return (
    <userContext.Provider
      value={{
        users,
        user,
        err,
        getAllUsers,
        page,
        setPage,
        limit,
        setLimit,
        getSingleUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
