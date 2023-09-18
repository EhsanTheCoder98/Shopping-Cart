import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { Cartcontex } from "../context/CartContextProvider";

// component
import Cart from "./Cart";

const Shopcart = () => {
  const { state ,dispatch } = useContext(Cartcontex);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div>
        {
            state.itemsCounter && <div>
                <h3>Total Items : {state.itemsCounter}</h3>
                <h3>Total Price : {state.total}</h3>
                <div>
                    <button onClick={()=>dispatch({type:"CHECKOUT"})}>CheckOut</button>
                    <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                </div>
            </div>
        }
        {
            state.checkout && <div>
                <h3>Checked Out Successfully</h3>
                <Link to="/products">Buy More</Link>
            </div>
        }
      </div>
    </div>
  );
};

export default Shopcart;
