import React, { useState, useEffect , createContext } from "react";

// API
import { getData } from "../services/api";

const Context = createContext();

const ContexProviderFile = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getData());
    };
    fetchAPI();
  }, []);

  return (
    <Context.Provider value={product}>
        {props.children}
    </Context.Provider>
  );
};

export default ContexProviderFile;
