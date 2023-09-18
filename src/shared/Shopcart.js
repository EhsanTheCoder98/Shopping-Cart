import React, { useContext } from "react";

// context
import { Cartcontex } from "../context/CartContextProvider";

// component
import Cart from "./Cart";

const Shopcart = () => {
    const {state} = useContext(Cartcontex);
  return (
    <div>
      {
        state.selectedItems.map(item=><Cart key={item.id} data={item} />)
      }
    </div>
  );
};

export default Shopcart;
