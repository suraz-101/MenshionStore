import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { products } from "../hooks/product";
// import { blogs } from "../Hooks/product";

export const productContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [sort, setSort] = useState(1);
  const { getAllProducts, data, error } = products();

  useEffect(() => {
    getAllProducts({ sort });
  }, [sort]);
  return (
    <productContext.Provider value={{ data, error, sort, setSort }}>
      {children}
    </productContext.Provider>
  );
};
