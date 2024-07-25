import React,{useState,useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../Context/ProductContext';
// const searchItem = (arr , item) => {
//     for(let i=0; i<arr.length; i++){
//       if(arr.)
//     }
// }
export default function NavBar() {
  const { products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (e) => {
    e.prevent.default();

  }
  return (
    <div className='fixed w-screen top-0 z-10'>
      <div className=' bg-blue-700 '>
        <div className=' h-20 text-white font-semibold mx-5 flex justify-around lg:mx-24 sm:mx-8 '>
          <div className='w-14 lg:w-32 sm:w-32 lg:mt-2 sm:mt-4 mt-4 '>
            <p className='lg:text-3xl text-sm mr-3 font-bold'><i>Flipkart</i></p>
            <p className='text-sm'><i className=' cursor-pointer hover:text-blue-900'>Explore</i> <i className='text-yellow-500'>Plus+</i></p>
          </div>
          {/* <Link to='/' className='mt-7'>Home</Link> */}
          <form action="" className='mt-5 h-10 ml-2 lg:w-96 sm:w-80 flex justify-between  bg-white'>
            <input type="text" placeholder='search products,brands and more' className='px-4 py-2 lg:w-72 sm:w-64 sm:  text-black  focus:outline-none focus:border-none'
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Link to='/product'>
              <FontAwesomeIcon icon={faSearch} className='h-4 pt-3   pr-3 text-black' />
            </Link>

          </form>
          <button  className='bg-white mt-7 text-blue-700 lg:block sm:hidden hidden text-lg w-24 mt-5 h-10' >
            Login
          </button>
          <a href='https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect' className='lg:block sm:hidden hidden mt-7'>Become Seller</a>
          <a href='https://www.flipkart.com/communication-preferences/push?t=all' className=' mt-7 lg:block sm:block hidden'>More</a>
          <Link to="/cartpage" className='text-white mt-7 ml-4  lg:mt-7 sm:mt-7'>
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </Link>
        </div>
      </div>
      <div className='bg-white shadow-md'>
        <ul className='flex justify-around  h-7 lg:mx-24   overflow-scroll hide-scrollbar sm:overflow-x'>
          <li className='cursor-pointer hover:text-blue-600 ml-5' >Electronics </li>
          <li className='cursor-pointer hover:text-blue-600 ml-3' >TV & Appliances</li>
          <li className='cursor-pointer hover:text-blue-600 ml-3' >Men </li>
          <li className='cursor-pointer hover:text-blue-600 ml-3' >Women</li>
          <li className='cursor-pointer hover:text-blue scr-600 ml-3' >Baby&Kids</li>
          <li className='cursor-pointer hover:text-blue-600 ml-3 ' >Home&Furniture</li>
          <li className='cursor-pointer hover:text-blue-600 ml-3' > Sports,Books&More</li>
          <li className='cursor-pointer hover:text-blue-600 ml-3' >Grocery</li>
          <li className='cursor-pointer hover:text-blue-600 ml-3 mr-5' >Offer Zone</li>
        </ul>

      </div>
    </div>
  )
}

