import React from 'react';
//link
import { Link } from 'react-router-dom';
//images 
import comingSoon from '../img/comingSoon.jpg';
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} className='w-full mt-[30px]'>
      <div className=' grad group w-full h-[362px] rounded-[8px] overflow-hidden relative  '>
        {/* badge */}
        {product.isNew ? (
          <div className='absolute  bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
            new
          </div>
        ) : (
          ""
        )}
        {/* image */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          {product?.image?.url ? (
            <img
              className='w-[150px] h-[150px] group-hover:scale-90 transition-all duration-300 rounded-md'
              src={`${product?.image?.url}`}
              alt='product image' />
          ) : (
            <img
              className='w-[150px] h-[150px] group-hover:scale-90 transition-all duration-300 rounded-md'
              src={comingSoon}
              alt='product image' />
          )}

        </div>

        {/* text */}
        <div className='px-6 pb-8 flex flex-col '>
          {/* category title */}
          <div className='text-sm text-accent capitalize mb-2'>
            {product?.categories?.[0]?.title}
          </div>
          {/*  title */}
          <div className='text-[15px] mb-4 lg:mb-9 line-clamp-1'>
            {product?.title.substring(0, 35) + "..."}
          </div>
          {/*  price & volume */}
          <div className='flex justify-between items-center'>
            <div className='text-sm text-white'>
              {product?.volume}
            </div>
            <div className='text-base text-accent'>
              {product?.price} kr
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
    ;
};

export default Product;
