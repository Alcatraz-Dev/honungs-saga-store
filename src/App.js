import React from 'react';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';


//layout 
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Benefits/>
      <Testimonials/>
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);
const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
