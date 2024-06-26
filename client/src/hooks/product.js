import { useCallback } from "react";
import { useState } from "react";
import { URLS } from "../contants";
import instance from "../utils/api";

export const products = () => {
  const [data, setData] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const deleteProduct = useCallback(async (name) => {
    try {
      const response = await instance.delete(URLS.PRODUCTS + `/${name}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data.message;
    } catch (err) {
      setError(err);
    }
  }, []);

  const getAllProducts = useCallback(async ({ sort, page, limit }) => {
    try {
      const response = await instance.get(
        URLS.PRODUCTS + `?page=${page}&limit=${limit}&sort=${sort}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setData(response.data.product);
    } catch (err) {
      setError(err);
    }
  }, []);
  const getNewArrivals = useCallback(async ({ sort, page, limit }) => {
    try {
      const response = await instance.get(
        URLS.PRODUCTS + `/newArrivals?page=${page}&limit=${limit}&sort=${sort}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setNewArrivals(response.data.product);
    } catch (err) {
      setError(err);
    }
  }, []);

  const addProduct = async (payload) => {
    try {
      const response = await instance.post(URLS.PRODUCTS, payload, {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(response.data.message);
      return response.data.message;
    } catch (err) {
      setError(err.response.data.message);

      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
    }
  };

  return {
    getAllProducts,
    data,
    error,
    deleteProduct,
    addProduct,
    success,
    getNewArrivals,
    newArrivals,
  };
};
