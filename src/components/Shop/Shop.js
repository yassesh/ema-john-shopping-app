import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="carts-container">
                <h2>Order Summary</h2>
                <p>selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;