import React, { useContext, useState } from 'react';
// Icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
// Link
import { Link } from 'react-router-dom';
// Components
import CategoryNavMobile from '../components/CategoryNavMobile';
import LanguageSelector from '../components/LanguageSelector';
import Cart from '../components/Cart';
// Cart context
import { CartContext } from '../context/CartContext';
// Custom hook for fetching data
import useFetch from '../hooks/useFetch';

const Header = () => {
  const { data } = useFetch('/logos?populate=*');
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        {/* Header flex container */}
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">

          {/* Menu icon for mobile */}
          <div onClick={() => setCatNavMobile(!catNavMobile)} className="text-3xl xl:hidden cursor-pointer">
            <FiMenu />
          </div>

          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={`${data?.[0]?.image?.[0]?.url}`}
                alt="logo"
                className="w-[120px] h-auto sm:w-[140px] lg:w-[160px] xl:w-[180px] object-contain"
              />
            </Link>
          </div>

          {/* Language Selector */}
          <LanguageSelector />

          {/* Cart icon with item count */}
          <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
            <SlBag className="text-2xl" />
            <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
              {itemsAmount}
            </div>
          </div>
        </div>

        {/* Mobile category navigation menu */}
        <div className={`fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200 ${catNavMobile ? 'left-0' : '-left-full'}`}>
          <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
        </div>

        {/* Cart overlay */}
        <div className={`fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300 bg-[#0e0f10] shadow-xl ${isOpen ? 'right-0' : '-right-full'}`}>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;