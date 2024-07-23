import React from 'react';
import './page.css'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-5 relative -z-10 top-24 ">
      <section className='mx-3  mt-8 font-semibold  flex justify-between bg-white text-center px-28'>
        <div className=''>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100" alt="" />
          <p>Top Offers</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100" alt="" />
          <p>Mobiles&Tablets</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100" alt="" />
          <p>TV & Appliances</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="" />
          <p>Electronics</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" alt="" />
          <p>Fashion</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100" alt="" />
          <p>Beuty</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100" alt="" />
          <p>Home&Kitchen</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100" alt="" />
          <p>Furniture</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100" alt="" />
          <p>Travel</p>
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100" alt="" />
          <p>Grocery</p>
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-white  mx-3 offers-bg h-11/12 mt-3 text-white  py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">New arrivals are here</h1>
          <button className="px-6 py-3 mt-56 bg-blue-500 text-white rounded">Shop New Arrivals</button>
        </div>
      </section>
      <section className='mt-5 pb-8 bg-white py-2 mx-3'>
        <h1 className='text-2xl  font-semibold mx-10 mb-5'>Deals on Smartphone</h1>
        <section className='flex justify-between mx-5 text-center'>
          <div className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/r/d/-original-imah2nyhz7jehgrn.jpeg?q=70" className='h-56 hover:scale-50' alt="" />
            <p>CMF Phone 1</p>
            <p className='font-semibold'>From 14999*</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/q/5/-original-imahfkf6jcuhhzyb.jpeg?q=70" alt="" className='h-56' />
            <p>Redmi 13c 5G</p>
            <p className='font-semibold'>Just ₹10,499</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70" alt="" className='h-56' />
            <p>Realme P1 5g</p>
            <p className='font-semibold'>Just ₹15,999</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/p/y/12-pro-5g-rmx3842-realme-original-imagxgnhafyjz8rb.jpeg?q=70" alt="" className='h-56' />
            <p>realme 12 Pro 5G </p>
            <p className='font-semibold'>₹22,999</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/r/-original-imagpfbtmrr7spgc.jpeg?q=70" alt="" className='h-56' />
            <p>vivo T2 5G</p>
            <p className='font-semibold'>₹23,999</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="" className='h-56' />
            <p>Apple iPhone 15 </p>
            <p className='font-semibold'  >₹65,499</p>
          </div>
        </section>
      </section>

      <section className='flex bg-white mt-2 mx-3 '>
        <img  className='ml-2 w-1/3' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/1a6ccb003d9a7b3d.jpg?q=20" alt="" />
        <img className='ml-2 w-1/3 ' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e5cac70efd92ae9a.png?q=20" alt="" />
        <img className='ml-2 mr-2 w-1/3 overflow-hidden ' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/83aefeef8cd78687.jpg?q=20" alt="" />
      </section>
      <section  className='bg-white mx-3 px-2 pb-5 '>
        <h1 className='text-2xl  font-semibold mx-10 mb-5 mt-5'>Top Deals On Fashion</h1>
        <section className='flex justify-between  text-center'>
          <div className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/l2nmnww0/shoe/x/c/t/8-ga2882-8-adidas-ftwwht-ambsky-orarus-original-imagdyczngyhuagc.jpeg?q=70" className='h-44 hover:scale-50' alt="" />
            <p>Shoes</p>
            <p className='font-semibold'>From 4,999*</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/q/u/-original-imahfxtgtf7enxkj.jpeg?q=70" alt="" className='h-44' />
            <p>Adidas Sneakers</p>
            <p className='font-semibold'>₹3,499</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/ku1k4280/card-holder/m/q/d/swka-86blk-card-holder-1-skywalk-6-original-imag799dzgza8yqz.jpeg?q=70" alt="" className='h-44' />
            <p>Wallet And Belt</p>
            <p className='font-semibold'>Just ₹500</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/q/s/a/xl-sk-4-big-carry-multicolor-st-kurta-kjfab-original-imahyybd2hy9vrm6.jpeg?q=70" alt="" className='h-44' />
            <p>Printed Kutas </p>
            <p className='font-semibold'>₹999</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/o/e/s-trishul-01-sanvi-fashion-original-imahfu37gzxrsag4.jpeg?q=70" alt="" className='h-44' />
            <p>Kurtas</p>
            <p className='font-semibold'>₹1,499</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/l0igvww0/shirt/4/a/s/s-rgw-den01-shd-regrowth-original-imagcamjaazjd3bt.jpeg?q=70" alt="" className='h-44' />
            <p>Regular </p>
            <p className='font-semibold'  >₹659</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70" alt="" className='h-44' />
            <p>Formal </p>
            <p className='font-semibold'  >₹1,599</p>
          </div>
          <div  className='border border-gray-300 rounded p-2'>
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/6/w/s-jawan-one-nb-nicky-boy-original-imahfyq2abjg4nyq.jpeg?q=70" alt="" className='h-44' />
            <p>Casual Outfits </p>
            <p className='font-semibold'  >₹199+</p>
          </div>

         
        </section>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100  py-16 h-auto ">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="flex justify-center space-x-4">
            <div className="p-4 bg-white  font-bold arrival-bg rounded object-cover  shadow-md">
              <p>New Arrivals</p>
            </div>
            <div className="p-4 font-bold product-bg bg-white rounded shadow-md">
              <p>Productivity</p>
            </div>
            <div className="p-4 font-bold grocery-bg bg-white rounded shadow-md">
              <p>Grocery</p>
            </div>
            <div className="p-4 hero-bg font-bold bg-white rounded shadow-md">
              <p>Accessories</p>
            </div>
            <div className="p-4 font-bold sale-bg bg-white rounded shadow-md w-32">
              <p>Sale</p>
            </div>
          </div>
          <a href="#categories" className="text-blue-500 hover:underline mt-4 block">Browse all categories</a>
        </div>
      </section>

      {/* Shop by Collection Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Shop by Collection</h2>
          <p className="mb-6">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
          <div className="flex justify-center space-x-4">
            <div className="p-4 font-bold text-white bg-white handcraft-bg rounded shadow-md">
              <p>Handcrafted Collection</p>
            </div>
            <div className="p-4 bench-bg font-bold  bg-white rounded shadow-md">
              <p>Organized Desk Collection</p>
            </div>
            <div className="p-4   fashion-bg font-bold text-white bg-white rounded shadow-md">
            </div>
          </div>
        </div>
      </section>

      {/* Simple Productivity Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Simple productivity</h2>
          <p className="mb-6">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we’re doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded">Shop Focus</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="flex">
          <div className='w-1/5 ml-10'>
            <h3 className="font-bold mb-2">Shop</h3>
            <ul>
              <li><a href="#bags" className="hover:underline">Bags</a></li>
              <li><a href="#tees" className="hover:underline">Tees</a></li>
              <li><a href="#objects" className="hover:underline">Objects</a></li>
              <li><a href="#home-goods" className="hover:underline">Home Goods</a></li>
              <li><a href="#accessories" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          <div className='w-1/5'>
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
          <div className='w-1/5'>
            <h3 className="font-bold mb-2">Account</h3>
            <ul>
              <li><a href="#manage-account" className="hover:underline">Manage Account</a></li>
              <li><a href="#returns-exchanges" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="#redeem-gift-card" className="hover:underline">Redeem a Gift Card</a></li>
            </ul>
          </div>
          <div className='w-1/5'>
            <h3 className="font-bold mb-2">Connect</h3>
            <ul>
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#facebook" className="hover:underline">Facebook</a></li>
              <li><a href="#instagram" className="hover:underline">Instagram</a></li>
              <li><a href="#pinterest" className="hover:underline">Pinterest</a></li>
            </ul>
          </div>
          <div className='w-1/2'>
            <h3 className="font-bold mb-2">Sign up for our newsletter</h3>
            <p className="mb-4">The latest deals and savings, sent to your inbox weekly.</p>
            <div className="flex ">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l bg-white text-black w-96 " />
              <button className="p-2 bg-blue-500 text-white rounded-r">Sign up</button>
            </div>
          </div>
        </div>
        <div className='text-center'>&copy; 2024 Guddu Kumar</div>
      </footer>
    </div>
  );
};

export default HomePage;
