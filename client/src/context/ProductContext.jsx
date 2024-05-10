import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { products } from "../hooks/product";
// import { blogs } from "../Hooks/product";

export const productContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [sort, setSort] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const { getAllProducts, data, error, getNewArrivals, newArrivals } =
    products();

  useEffect(() => {
    getAllProducts({ sort, page, limit });
  }, [sort, getAllProducts, page, limit]);

  useEffect(() => {
    getNewArrivals({ sort, page, limit });
  }, [sort, getNewArrivals, page, limit]);
  return (
    <productContext.Provider
      value={{
        data,
        error,
        sort,
        setSort,
        setPage,
        page,
        limit,
        setLimit,
        newArrivals,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
