import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
export default function ProductPage() {
    const { product } = useContext(ProductContext);
    return (
        <div
            // className='bg-gradient-to-b from-green-900 to-green-400'
            className='shadow-md flex justify-around mx-5 '
        >
            <aside className='mr-5 '>
                <ul className=' text-lg pl-2  mt-5 shadow-md w-60 fixed top-24'>
                    <li className='text-2xl font-semibold '>
                        Filters
                    </li>
                    <hr className=' my-2' />
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Brand</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Features</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Availability</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Price</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Cost</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Quality</li>
                    <li className='mt-2 cursor-pointer hover:text-blue-600' >Discount</li>

                    <hr className=' my-2' />
                    <li className='mt-5 ' >
                        <p>Offers</p>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>No Cost EMI</label>
                        </li>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>Special Price</label>
                        </li>
                    </li>
                    <hr className=' my-2' />
                    <li className='mt-2 ' >
                        <p>Ratings</p>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>4  &#9733; &above</label>
                        </li>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>3  &#9733; &above</label>
                        </li>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>2  &#9733; &above</label>
                        </li>
                        <li>
                            <input type="checkbox" className='mr-2' />
                            <label htmlFor="" className='text-sm'>1  &#9733; &above</label>
                        </li>
                    </li>

                </ul>
            </aside>
            <ul className='ml-60 relative top-28 '>
                {product.map((item, idx) => (
                    <li key={idx} className='flex-wrap   rounded mt-5 items-center'>
                        <div className=' flex justify-center   '>
                            <div className='w-1/4  shadow-md rounded'>
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <div className='w-1/2 ml-5 p-3'>
                                <p className='text-xl font-semibold hover:text-blue-400'>{item.title}</p>
                                <p className='text-sm my-2'>{item.desc}</p>
                                <section className='flex  mt-3'>
                                    <p className='text-sm bg-green-600 text-white px-3 w-16 h-6 rounded hover:bg-green-400'>{item.rating}
                                        &#9733;
                                    </p>
                                    <p className='text-sm  ml-3'>11220 rating & 15 Reviews</p>
                                </section>
                                <ul className='pl-5 text-sm mt-3'>
                                    <li>Available: {item.available}</li>
                                    <li>Min-Quantity: {item.weight}</li>
                                    <li>Shipment: {item.ship}</li>
                                    <li>warranty: {item.warranty}</li>
                                    <li>Return Policy:{item.return}</li>
                                    <li>
                                        <Link to={`/viewproduct/${item.id}`} className='text-blue-600 hover:text-black'>
                                            View Details
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 ml-10 pl-10 pt-10 '>
                                <p className='text-3xl'>${item.price}</p>
                                <p className='text-green-700' > {item.discount}% off</p>
                                <p className='text-sm'>Free delivery</p>
                                <p className='text-sm text-green-500'>Save Extra with combo offers</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
