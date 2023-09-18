import React , {useContext} from 'react';
import { shorten } from '../functions/shorten';
import { Cartcontex } from '../context/CartContextProvider';

const Cart = (props) => {
    const {title,image,description,price,quantity} = props.data;
    const {dispatch} = useContext(Cartcontex);
    return (
        <div style={{border:"2px solid black"}}>
            <img src={image} style={{width:"100px"}} alt='product'/>
            <h2>You ordered {quantity} of {shorten(title)}</h2>
            <button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
            {
                quantity>1 ?
                <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>:
                <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}>REMOVE</button>
            }
            <p>{description}</p>
            <span>Price:{price}</span>
        </div>
    );
};

export default Cart;