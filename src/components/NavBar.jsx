import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {

  return (
    <div className='fixed w-screen top-0 z-10'>
      <div className=' bg-blue-700 '>
        <div className=' h-20 text-white font-semibold flex justify-around mx-24'>
          <div className='w-32 mt-2'>
            <p className='text-3xl font-bold'><i>Flipkart</i></p>
            <p className='text-sm'><i className=' cursor-pointer hover:text-blue-900'>Explore</i> <i className='text-yellow-500'>Plus+</i></p>
          </div>
          {/* <Link to='/' className='mt-7'>Home</Link> */}
          <form action="" className='mt-5 h-10 w-96 flex justify-between  bg-white'>
            <input type="text" placeholder='search products,brands and more' className='px-4 py-2  text-black w-72 focus:outline-none focus:border-none' />
            <Link to='/product'>
              <FontAwesomeIcon icon={faSearch} className='h-4 pt-3   pr-3 text-black' />
            </Link>

          </form>
          <button className='bg-white text-blue-700  text-lg w-24 mt-5 h-10' >
            Login
          </button>
          <button>Become Seller</button>
          <button>More</button>
          <Link to="/cartpage" className='text-white mt-7'>
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </Link>
        </div>
      </div>
      <div className='bg-white shadow-md'>
        <ul className='flex justify-between h-7 mx-24 overflow-scroll hide-scrollbar'>
          <li className='cursor-pointer hover:text-blue-600 ' >Electronics </li>
          <li className='cursor-pointer hover:text-blue-600 ' >TV & Appliances</li>
          <li className='cursor-pointer hover:text-blue-600 ' >Men </li>
          <li className='cursor-pointer hover:text-blue-600 ' >Women</li>
          <li className='cursor-pointer hover:text-blue scr-600 ' >Baby&Kids</li>
          <li className='cursor-pointer hover:text-blue-600 ' >Home&Furniture</li>
          <li className='cursor-pointer hover:text-blue-600 ' > Sports,Books&More</li>
          <li className='cursor-pointer hover:text-blue-600 ' >Grocery</li>
          <li className='cursor-pointer hover:text-blue-600 ' >Offer Zone</li>
        </ul>

      </div>
    </div>
  )
}

