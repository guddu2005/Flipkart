import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';


const renderCartItems = (cartProducts) => {
    const items = []
    items.push(
        <table className=' font-bold text-xl mt-5 ml-5 mb-5'>
            <tr className=''>
                <th className='pl-2 py-2'>SNo.</th>
                <th className=' pl-10 py-2' >Products</th>
                <th className=' pl-20 py-2'>Price</th>
            </tr>
        </table>
    )
    let sum = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        sum += (cartProducts[i].price)
        items.push(
            <table key={i} className='ml-5 w-auto mr-5'>
                <tr className=''>
                    <td className=' px-2 py-2  font-semibold'>{i + 1}.</td>
                    <td className=' pl-5 py-2 '>{cartProducts[i].title}</td>
                    <td className=' pl-10 py-2 '>${cartProducts[i].price}</td>
                </tr>
            </table>
        );
    }
    items.push(
        <tr className='flex justify-around'>
            <td className=' text-xl  font-semibold col-span-2 '>Total Price:</td>
            <td className=' text-lg font-semibold '>${Math.ceil(sum)}</td>
        </tr>
    )
    return items;
};

export default function CartPage() {
    const { removeFromCart, cartProducts, setCartProducts } = useContext(CartContext);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartProducts'));
        if (Array.isArray(items)) {
            setCartProducts(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <div className="lg:relative lg:top-28  flex-wrap w-auto ">
            <div className="mr-10   md:absolute md:top-28  ">
                {cartProducts.map((item, idx) => (
                    <div key={idx} className="flex flex-wrap mt-24">
                        <div className="shadow-md my-5 mx-3 ">
                            <img src={item.image} alt={item.title} className="w-96 h-96" />
                        </div>
                        <div className="shadow-md  m-5  md:w-1/3 sm:w-screen  p-10   ">
                            <div className="text-xl">{item.title}</div>
                            <div>Price: ${item.price}</div>
                            {/* Add more details as needed */}
                            <ul>
                                <li className="text-gray-400 mt-2">
                                    <span className="text-gray-600">Available: {item.available}</span>
                                </li>
                                <li className="text-gray-400 mt-2">
                                    <span className="text-gray-600">Min-Quantity: {item.weight}</span>
                                </li>
                                <li className="text-gray-400 mt-2">
                                    <span className="text-gray-600">Shipment: {item.ship}</span>
                                </li>
                                <li className="text-gray-400 mt-2">
                                    <span className="text-gray-600">Warranty: {item.warranty}</span>
                                </li>
                                <li className="text-gray-400 mt-2">
                                    <span className="text-gray-600">Return Policy: {item.return}</span>
                                </li>
                            </ul>
                            <div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="mt-3 ml-3 bg-blue-500 p-2 rounded text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" lg:fixed lg:top-32 lg:right-16 lg:shadow-lg lg:w-1/3 md:left-16 md:w-screen  lg:rounded md:fixed md:bottom-0  md:1/3    sm:fixed sm:bottom-0">
                <h1 className="text-center font-bold mt-10 text-2xl ">Bill Payment</h1>
                <ul>
                    {renderCartItems(cartProducts)}
                </ul>
            </div>
        </div>

    );
}
