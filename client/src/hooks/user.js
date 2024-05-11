import { useState } from "react";
import { useCallback } from "react";
import { URLS } from "../contants";
import instance from "../utils/api";

export const usersData = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const getAllUsers = useCallback(async ({ page, limit, email }) => {
    try {
      console.log("email getall", email);
      const response = await instance.get(
        URLS.USERS + `?page=${page}&limit=${limit}&email=${email}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setUsers(response.data.users);
    } catch (error) {
      setErr(error);
    }
  }, []);

  const getSingleUser = useCallback(async (email) => {
    try {
      const response = await instance.get(URLS.USERS + `?${email}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(response);
      setUser(response.data.users);
    } catch (error) {
      setErr(error);
    }
  }, []);

  return { users, user, err, getAllUsers, getSingleUser };
};
