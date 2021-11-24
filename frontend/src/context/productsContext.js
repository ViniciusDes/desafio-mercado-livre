import { createContext, useState } from "react";

export const ProductsContext = createContext({
  query: "",
  items: [],
});

export const ProductsProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const setItemsState = async (data) => {
    setItems(data);
  };

  const setQueryState = async (data) => {
    setQuery(data);
  };

  return (
    <ProductsContext.Provider
      value={{
        query,
        setQuery: setQueryState,
        items,
        setItems: setItemsState,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
