import React from 'react';

// functions
import { shorten } from '../functions/shorten';

const Productdiv = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product' style={{width:"200px",}}/>
            <h2>{shorten(productData.title)}</h2>
            <p>{productData.price}</p>
            <div>
                <a  href="#">details</a>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Productdiv;