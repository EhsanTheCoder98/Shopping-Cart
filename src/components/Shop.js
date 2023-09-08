import React , {useContext} from 'react';

// shared
import Productdiv from '../shared/Productdiv';

// contect import
import { Context } from '../context/ContexProviderFile';

const Shop = () => {

    const product = useContext(Context);

    return (
        <div>
            {product.map(item =><Productdiv key={item.id} productData={item}/> )}
        </div>
    );
};

export default Shop;