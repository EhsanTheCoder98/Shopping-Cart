import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontex } from "../context/CartContextProvider";

const Navbar = () => {
    const {state} = useContext(Cartcontex);
  return (
    <div>
        <Link to="/products">Product</Link>
        <div>
      <Link to="/cart">Cart</Link>
      <span>{state.itemsCounter}</span>
        </div>
    </div>
  );
};

export default Navbar;
