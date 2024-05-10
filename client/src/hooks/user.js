import { useState } from "react";
import { useCallback } from "react";
import { URLS } from "../contants";
import instance from "../utils/api";

export const usersData = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const getAllUsers = useCallback(async ({ page, limit }) => {
    try {
      const response = await instance.get(
        URLS.USERS + `?page=${page}&limit=${limit}`,
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

  return { users, err, getAllUsers };
};
