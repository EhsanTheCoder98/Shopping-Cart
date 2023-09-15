import React, { useContext } from "react";

import { Link } from "react-router-dom";

// functions
import { shorten, isInCart ,quantityCount } from "../functions/shorten";

// contexts
import { Cartcontex } from "../context/CartContextProvider";

const Productdiv = ({ productData }) => {
  const { state, dispatch } = useContext(Cartcontex);
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h2>{shorten(productData.title)}</h2>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>
          {
          isInCart(state, productData.id) ? 
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })}>+</button> : 
            <button
              onClick={() =>
                dispatch({ type: "ADD-ITEM", payload: productData })}>ADD TO CART</button>
          }
          {quantityCount(state,productData.id) > 1 && <button onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
          {quantityCount(state,productData.id) === 1 && <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}>REMOVE</button>}
        </div>
      </div>
    </div>
  );
};

export default Productdiv;
