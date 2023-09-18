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
      <br />
      <span>You Have {state.itemsCounter} Items in Shop</span>
      <br />
      <span>Total price is : {state.total}</span>
        </div>
    </div>
  );
};

export default Navbar;
