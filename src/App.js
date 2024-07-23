import { ProductContext, ProductProvider } from './Context/ProductContext';
import HomePage from './Pages/HomePage';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import ProductPage from './Pages/ProductPage';
import NavBar from './components/NavBar';
import ProductView from './Pages/ProductView';
import { CartProvider } from './Context/CartContext';
import CartPage from './Pages/CartPage';
function App() {
  const { id } = useParams();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <NavBar />
        <HomePage />
      </>
    },
    {
      path: '/product',
      element: <><NavBar /><ProductPage /></>
    },
    {
      path: `/viewproduct/:id`,
      element: <><NavBar /><ProductView /></>
    },
    {
      path: '/cartpage', // Make sure path is enclosed in quotes
      element: <><NavBar /><CartPage /></>
    }
  ])

  return (
    <div className='font-serif'>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
