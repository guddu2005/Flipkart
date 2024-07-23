import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState(()=>{
        const items = JSON.parse(localStorage.getItem('product'));
        return items || [];
    });
    
     useEffect(() => {
        localStorage.setItem('product' , JSON.stringify(product));
     }, [product])
     

    useEffect(() => {
        async function fetchProduct() {
            const url = 'https://dummyjson.com/products';
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    throw new Error(`Unable to fetch the Products ${resp.statusText}`)
                }
                const results = await resp.json();
                console.log(results);
                const sortedProducts = results.products.map(item => ({
                    id: item.id,
                    title: item.title,
                    desc: item.description,
                    price: item.price,
                    discount: item.discountPercentage,
                    rating: `${item.rating}`,
                    brand: item.brand,
                    thumbnail:item.thumbnail,
                    warranty:item.warrantyInformation,
                    return:item.returnPolicy,
                    weight:item.weight,
                    ship:item.shippingInformation,
                    available:item.minimumOrderQuantity,
                    image:item.images,
                    
                }));
                setProduct(sortedProducts);
            } catch (err) {
                console.error(err);
            }
        }
        fetchProduct();
    }, []);

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    );
};
