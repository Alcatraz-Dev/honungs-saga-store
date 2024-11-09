import React, { useContext, useState } from 'react';
// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
// link
import { Link } from 'react-router-dom';
// components
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';
// cart context 
import { CartContext } from '../context/CartContext';
// use fetch hook
import useFetch from '../hooks/useFetch';
const Header = () => {
  const { data } = useFetch('/logos?populate=*');
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>

        {/* Header flex container */}
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>

          {/* Menu icon for mobile */}
          <div onClick={() => setCatNavMobile(!catNavMobile)} className='text-3xl xl:hidden cursor-pointer'>
            <FiMenu />
          </div>

          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={`${data?.[0]?.image?.[0]?.url}`}
                alt="logo"
                className="w-[120px] h-auto sm:w-[150px] lg:w-[180px] object-contain"
              />
            </Link>
          </div>

          {/* Search form (desktop only) */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>

          {/* Contact and Cart */}
          <div className='flex items-center gap-x-[10px]'>

            {/* Contact text (desktop only) */}
            {/* <div className='hidden xl:flex uppercase'>
              Need help? Call us
            </div> */}

            {/* Cart icon with amount */}
            <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
              <SlBag className='text-2xl' />
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
                {itemsAmount}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
          <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
        </div>

        {/* Cart overlay */}
        <div className={`${isOpen ? "right-0" : "-right-full"} bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
          <Cart />
        </div>

        {/* Search form for mobile */}
        <div className='xl:hidden mt-4'>
          <SearchForm />
        </div>

      </div>
    </header>
  );
};

export default Header;