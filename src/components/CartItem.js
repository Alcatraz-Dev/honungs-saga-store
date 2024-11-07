import React, { useContext } from 'react';
// link
import { Link } from 'react-router-dom';
// icons
import { FaRegTrashCan } from "react-icons/fa6";
// components 
import Qty from '../components/Qty';
// context
import { CartContext } from '../context/CartContext';
import comingSoon from '../img/comingSoon.jpg';
const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)
  return <div className='flex gap-x-8'>
    <Link to={`/product/${item?.id}`} className='w-[100px] h-[100px]'>
      {item?.image?.url ? <img className=' w-[150px] h-[150px] object-cover mt-4  '
        src={`${item?.image?.url}`}
        alt="product image" /> : <img className=' w-[150px] h-[150px] object-cover mt-4  '
          src={comingSoon}
          alt="product image" />}
    </Link>
    <div className='flex-1  '>
      {/* title & romive icon */}
      <div className='flex gap-x-4 mb-3  mt-7 justify-between '>
        <Link to={`/product/${item?.id}`} >
          {item?.title}
        </Link>
        <div onClick={() => removeFromCart(item?.id)} className=' cursor-pointer text-[24px] hover:text-accent transition-all mr-5 '>
          <FaRegTrashCan className='mt-3' />
        </div>
      </div>
      <div className='flex items-center gap-x-12'>
        {/* quantity */}
        <div className='flex gap-x-4 mb-2'>
          <Qty item={item} />
        </div>
        <div className='text-accent text-xl mb-3'>
          {(item?.price * item?.amount).toFixed(2)} Kr
        </div>

      </div>
      {/* price */}
      <div>
        <span className='text-accent '>
          {item?.price} Kr per piece
        </span>
      </div>
    </div>
  </div>;
};

export default CartItem;
