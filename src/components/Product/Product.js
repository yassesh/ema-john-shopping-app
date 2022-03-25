import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, handleCart } = props;
    const { name, seller, price, ratings, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h4 className='product-price'>Price: {price}</h4>
                <p>Manfacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleCart(product)} className='button-cart'>
                <p className='button-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;