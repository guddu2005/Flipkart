import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

export default function ProductPage() {
    const { product } = useContext(ProductContext);

    return (
        <div className='bg-gray-200'>
            <div className='flex flex-col lg:flex-row'>
                <aside className='lg:w-60 lg:fixed lg:top-28 lg:left-3 lg:bg-white lg:shadow-md lg:h-full lg:overflow-y-auto lg:flex lg:flex-col lg:pl-2 sm:hidden hidden'>
                    <ul className='text-lg mt-5'>
                        <li className='text-2xl font-semibold'>Filters</li>
                        <hr className='my-2' />
                        <a href='https://www.flipkart.com/search?q=brands&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' className='mt-2 cursor-pointer hover:text-blue-600'>Brand</a>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Features</li>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Availability</li>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Price</li>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Cost</li>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Quality</li>
                        <li className='mt-2 cursor-pointer hover:text-blue-600'>Discount</li>
                        <hr className='my-2' />
                        <li className='mt-5'>
                            <p>Offers</p>
                            <ul>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>No Cost EMI</label>
                                </li>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>Special Price</label>
                                </li>
                            </ul>
                        </li>
                        <hr className='my-2' />
                        <li className='mt-2'>
                            <p>Ratings</p>
                            <ul>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>4 &#9733; & above</label>
                                </li>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>3 &#9733; & above</label>
                                </li>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>2 &#9733; & above</label>
                                </li>
                                <li>
                                    <input type="checkbox" className='mr-2' />
                                    <label htmlFor="" className='text-sm'>1 &#9733; & above</label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>

                <main className='lg:ml-60 p-5 mt-24'>
                    <ul className='flex flex-col gap-5'>
                        {product.map((item, idx) => (
                            <li key={idx} className='flex flex-col lg:flex-row items-start gap-5 rounded shadow-md p-5 bg-white'>
                                <div className='flex-shrink-0 w-full lg:w-1/4'>
                                    <img src={item.thumbnail} alt="" className='w-full h-auto rounded' />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <p className='text-xl font-semibold hover:text-blue-400'>{item.title}</p>
                                    <p className='text-sm my-2'>{item.desc}</p>
                                    <section className='flex mt-3'>
                                        <p className='text-sm bg-green-600 text-white px-3 w-16 h-6 rounded hover:bg-green-400'>
                                            {item.rating} &#9733;
                                        </p>
                                        <p className='text-sm ml-3'>11220 ratings & 15 Reviews</p>
                                    </section>
                                    <ul className='pl-5 text-sm mt-3'>
                                        <li>Available: {item.available}</li>
                                        <li>Min-Quantity: {item.weight}</li>
                                        <li>Shipment: {item.ship}</li>
                                        <li>Warranty: {item.warranty}</li>
                                        <li>Return Policy: {item.return}</li>
                                        <li>
                                            <Link to={`/viewproduct/${item.id}`} className='text-blue-600 hover:text-black'>
                                                View Details
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-full lg:w-1/4 text-center lg:text-left'>
                                    <p className='text-3xl'>${item.price}</p>
                                    <p className='text-green-700'>{item.discount}% off</p>
                                    <p className='text-sm'>Free delivery</p>
                                    <p className='text-sm text-green-500'>Save Extra with combo offers</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    );
}

