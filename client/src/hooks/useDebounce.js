import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 1000) => {
  console.log("value", value);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchTerm(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceSearchTerm;
};
