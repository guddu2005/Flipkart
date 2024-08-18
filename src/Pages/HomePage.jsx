import React from 'react';
import './page.css'
import SlideComponent from '../slides/SlideComponent';
const HomePage = () => {
  return (
    <div className="w-screen bg-gray-100 mt-5 relative -z-10 top-24 ">
      {/* <div className='fixed overflow-scroll w-60 bg-red-500'>
      <section className='mx-3 mt-8 font-semibold flex justify-between bg-white text-center lg:px-28 sm:px-4 '>
          <div className='mmd:-2  sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100" alt="Top Offers" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm '>Top Offers</p>
          </div>
          <div className='mmd:-2  sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100" alt="Mobiles & Tablets" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg  text-sm'>Mobiles & Tablets</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100" alt="TV & Appliances" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>TV & Appliances</p>
          </div>
          <div className='mmd:-2  sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="Electronics" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Electronics</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="Fashion" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Fashion</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100" alt="Beauty" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Beauty</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100" alt="Home & Kitchen" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Home & Kitchen</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100" alt="Furniture" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Furniture</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100" alt="Travel" className='sm:h-12  md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Travel</p>
          </div>
          <div className='md:m-2 sm:m-2 m-'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100" alt="Grocery" className='sm:h-12 md:h-24 h-10' />
            <p className='sm:text-sm md:text-lg text-sm'>Grocery</p>
          </div>
      </section>
        </div> */}
      <div className=' flex justify-around  w-screen  sm:overflow-x '>
        <section className='flex justify-between  w-auto bg-white lg:mx-5 md: overflow-x-scroll hide-scrollbar'>
          <div className='md:m-2 sm:m-2 m-1 '>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100" alt="Top Offers" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center '>Top Offers</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100" alt="Mobiles & Tablets" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Mobiles & Tablets</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100" alt="TV & Appliances" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>TV & Appliances</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="Electronics" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Electronics</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="Fashion" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Fashion</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100" alt="Beauty" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Beauty</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100" alt="Home & Kitchen" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Home & Kitchen</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100" alt="Furniture" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Furniture</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100" alt="Travel" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Travel</p>
          </div>
          <div className='md:m-2 sm:m-2 m-1'>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100" alt="Grocery" className='sm:h-12 md:h-24 lg:h-32 h-10' />
            <p className='text-center'>Grocery</p>
          </div>
        </section>
      </div>

      {/* Hero Section */}
      <section className="bg-white  w-auto mx-3  mt-3  text-white   ">
        <div className="container mx-auto text-center">
          <SlideComponent/>
          {/* <button className="px-6 py-3 mt-56 bg-blue-500 text-white rounded">Shop New Arrivals</button> */}
        </div>
      </section>
      <section className='mt-5 pb-8 bg-white py-2 mx-3'>
        <h1 className='text-2xl font-semibold mx-10 mb-5'>Deals on Smartphone</h1>
        <section className='flex justify-around overflow-x-scroll hide-scrollbar'>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/r/d/-original-imah2nyhz7jehgrn.jpeg?q=70" className='lg:h-56 md:h-44 h-24' alt="CMF Phone 1" />
            <p>CMF Phone </p>
            <p className='font-semibold'>From ₹14,999*</p>
          </div>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/q/5/-original-imahfkf6jcuhhzyb.jpeg?q=70" alt="Redmi 13c 5G" className='lg:h-56 md:h-44 h-24' />
            <p>Redmi 13c 5G</p>
            <p className='font-semibold'>Just ₹10,499</p>
          </div>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70" alt="Realme P1 5g" className='lg:h-56 md:h-44 h-24' />
            <p className=''>Realme P1 5g</p>
            <p className='font-semibold'>Just ₹15,999</p>
          </div>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/p/y/12-pro-5g-rmx3842-realme-original-imagxgnhafyjz8rb.jpeg?q=70" alt="realme 12 Pro 5G" className='lg:h-56 md:h-44 h-24' />
            <p>realme 12 Pro 5G</p>
            <p className='font-semibold'>₹22,999</p>
          </div>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/r/-original-imagpfbtmrr7spgc.jpeg?q=70" alt="vivo T2 5G" className='lg:h-56 md:h-44 h-24' />
            <p>vivo T2 5G</p>
            <p className='font-semibold'>₹23,999</p>
          </div>
          <div className='inline-block border border-gray-300 rounded p-2 m-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="Apple iPhone 15" className='lg:h-56 md:h-44 h-24' />
            <p>Apple iPhone 15</p>
            <p className='font-semibold'>₹65,499</p>
          </div>
        </section>

      </section>


      <section className='flex bg-white mt-2 mx-3 w-full '>
        <img className='ml-2 w-1/3' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/1a6ccb003d9a7b3d.jpg?q=20" alt="" />
        <img className='ml-2 w-1/3 ' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e5cac70efd92ae9a.png?q=20" alt="" />
        <img className='ml-2 mr-2 w-1/3 overflow-hidden ' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/83aefeef8cd78687.jpg?q=20" alt="" />
      </section>


      {/* Categories Section */}
      <section className="bg-gray-100  py-5 h-auto  w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="flex justify-center  ">
            <div className="p-4 ml-2  bg-white   md:font-bold sm:font-bold arrival-bg rounded object-cover md:w-44 sm:w-44 w-24 shadow-md">
              <p>New Arrivals</p>
            </div>
            <div className="p-4  ml-2 md:font-bold sm:font-bold product-bg bg-white rounded shadow-md md:w-44 sm:w-44 w-16 h-20">
              <p>Productivity</p>
            </div>
            <div className="p-4 ml-2 md:font-bold sm:font-bold grocery-bg hidden bg-white rounded shadow-md md:w-44 sm:w-44 w-16">
              <p>Grocery</p>
            </div>
            <div className="p-4 ml-2 hero-bg md:font-bold sm:font-bold bg-white rounded shadow-md md:w-44 sm:w-44 w-24">
              <p>Accessories</p>
            </div>
            <div className="p-4 ml-2 mr-1 md:font-bold sm:font-bold sale-bg bg-white rounded shadow-md md:w-44 sm:w-44 w-24">
              <p>Sale</p>
            </div>
          </div>
          <a href="#categories" className="text-blue-500 hover:underline mt-4 block">Browse all categories</a>
        </div>
      </section>

      {/* Shop by Collection Section */}
      <section className="bg-white py-5 mx-1  w-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Shop by Collection</h2>
          <p className="mb-6">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
          <div className="flex justify-center space-x-4">
            <div className="p-4 ml-2 font-bold text-white bg-white handcraft-bg rounded shadow-md">
              <p>Handcrafted Collection</p>
            </div>
            <div className="p-4 bench-bg font-bold  bg-white rounded shadow-md">
              <p>Organized Desk Collection</p>
            </div>
            <div className="fashion-bg font-bold text-white bg-white rounded shadow-md">
            </div>
          </div>
        </div>
      </section>

      {/* Simple Productivity Section */}
      <section className="bg-gray-100 mx-5  w-full py-5 ">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Simple productivity</h2>
          <p className="mb-6">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we’re doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded">Shop Focus</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8   ">
        <div className="flex">
          <div className='w-1/4 ml-5'>
            <h3 className="font-bold mb-2">Shop</h3>
            <ul>
              <li><a href="#bags" className="hover:underline">Bags</a></li>
              <li><a href="#tees" className="hover:underline">Tees</a></li>
              <li><a href="#objects" className="hover:underline">Objects</a></li>
              <li><a href="#home-goods" className="hover:underline">Home Goods</a></li>
              <li><a href="#accessories" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          <div className='w-1/4'>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#who-we-are" className="hover:underline">Who we are</a></li>
              <li><a href="#sustainability" className="hover:underline">Sustainability</a></li>
              <li><a href="#press" className="hover:underline">Press</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#terms-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div className='w-1/4'>
            <h3 className="font-bold mb-2">Account</h3>
            <ul>
              <li><a href="#manage-account" className="hover:underline">Manage Account</a></li>
              <li><a href="#returns-exchanges" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="#redeem-gift-card" className="hover:underline">Redeem a Gift Card</a></li>
            </ul>
          </div>
          <div className='w-1/4'>
            <h3 className="font-bold mb-2">Connect</h3>
            <ul>
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#facebook" className="hover:underline">Facebook</a></li>
              <li><a href="#instagram" className="hover:underline">Instagram</a></li>
              <li><a href="#pinterest" className="hover:underline">Pinterest</a></li>
            </ul>
          </div>
          
        </div>
        <div className='w-full  ml-5 mt-5 mb-5'>
            <h3 className="font-bold mb-2">Sign up for our newsletter</h3>
            <p className="mb-4">The latest deals and savings, sent to your inbox weekly.</p>
            <div className="flex  ">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l h-10 bg-white text-black  " />
              <button className="p-2 bg-blue-500 text-white rounded-r h-10 w-20">Sign up</button>
            </div>
          </div>
        <div className='text-center '>&copy; 2024 Guddu Kumar</div>
      </footer>
    </div>
  );
};

export default HomePage;
