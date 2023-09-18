import React from 'react';

const Cart = (props) => {
    const {title,image,description,price,quantity} = props.data;
    return (
        <div style={{border:"2px solid black"}}>
            <img src={image} style={{width:"100px"}}/>
            <h2>You ordered {quantity} of {title}</h2>
            <p>{description}</p>
            <span>Price:{price}</span>
        </div>
    );
};

export default Cart;