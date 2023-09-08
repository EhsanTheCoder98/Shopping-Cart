import React , {useContext} from 'react';
import { useParams } from 'react-router-dom';

// context
import { Context } from '../context/ContexProviderFile';

const Productdetail = () => {
    const params = useParams();
    const data = useContext(Context);
    const product = data[params.id - 1];
    const {image,title,category,description,price} = product ;

    return (
        <div>
            <img src={image} alt='product'/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{category}</p>
            <span>{price}</span>
        </div>
    );
};

export default Productdetail;