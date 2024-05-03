import { useCallback } from "react";
import { useState } from "react";
import { URLS } from "../contants";
import instance from "../utils/api";

export const products = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getAllProducts = useCallback(async () => {
    try {
      const response = await instance.get(URLS.PRODUCTS, {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      });
      setData(response.data.product.data);
    } catch (err) {
      setError(err);
    }
  }, []);

  const deleteProduct = useCallback(async (name) => {
    try {
      const response = await instance.delete(URLS.PRODUCTS + `/${name}`, {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      });
      return response.data.message;
    } catch (err) {
      setError(err);
    }
  }, []);

  const addProduct = async (payload) => {
    try {
      const response = await instance.post(URLS.PRODUCTS, payload, {
        headers: {
          access_token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.message);
    } catch (err) {
      setError(err);
    }
  };

  return { getAllProducts, data, error, deleteProduct, addProduct };
};
