import { useEffect } from "react";
import { createContext } from "react";
import { products } from "../hooks/product";
// import { blogs } from "../Hooks/product";

export const productContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const { getAllProducts, data, error } = products();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <productContext.Provider value={{ data, error }}>
      {children}
    </productContext.Provider>
  );
};
