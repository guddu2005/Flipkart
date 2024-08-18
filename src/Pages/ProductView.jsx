import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function ProductView() {
    const { addToCart } = useContext(CartContext);
    const { product } = useContext(ProductContext);
    const { id } = useParams();
    // const item = product[(id - 1)];
    const item = product.find((p) => p.id === parseInt(id));
    
    const handleAddToCart = () => {
        if (item) {
            addToCart(item);
        }
    };

    
    return (
        <div className='relative top-28'>
            <div className="bg-white mt-1 mx-10 shadow-md">
                <div className="">
                    {/* Image gallery */}
                    <div className='flex justify-center'>
                        <img src={item.image} alt="" className='h-80 w-5/12 ' />
                    </div>
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {item.title}
                            </h1>
                        </div>
                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">${item.price}</p>
                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`h-5 w-5 flex-shrink-0 ${index < item.rating ? 'text-gray-900' : 'text-gray-200'}`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="sr-only">{item.rating} out of 5 stars</p>
                                    <p className="ml-3">{item.rating} reviews</p>
                                </div>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-bluex-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{item.desc}</p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-gray-900">Brand: {item.brand}</h2>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">Available: {item.available}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">Min-Quantity: {item.weight}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">Shipment: {item.ship}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">Warranty: {item.warranty}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">Return Policy: {item.return}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

