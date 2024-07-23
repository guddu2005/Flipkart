import React, { createContext,useEffect, useContext, useState } from 'react';
import { ProductContext } from './ProductContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { product } = useContext(ProductContext);
    const [cartProducts, setCartProducts] = useState(()=>{
        const items = JSON.parse(localStorage.getItem('cartProducts'));
        return items || [];
    });
    useEffect(() => {
      localStorage.setItem('cartProducts' , JSON.stringify(cartProducts));
    }, [cartProducts])
    
    const addToCart = (item) => {
        setCartProducts([...cartProducts, item]);
    };

    const removeFromCart = (id) => {
        setCartProducts(cartProducts.filter((item) => item.id !== id)); // Corrected filter logic
    };

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, cartProducts ,setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
};
