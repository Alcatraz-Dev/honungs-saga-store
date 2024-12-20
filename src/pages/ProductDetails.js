import React, { useContext } from 'react';
// use params hook
import { useParams } from 'react-router-dom';
// use fetch hook
import useFetch from '../hooks/useFetch';
// components
import RelatedProducts from '../components/RelatedProducts';
// context 
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
// icons
import { ImSpinner9 } from "react-icons/im";
//images 
import comingSoon from '../img/comingSoon.jpg';
const ProductDetails = () => {
  const { language } = useContext(LanguageContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`products?[locale]=${language}&populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className='h-screen flex justify-center items-center'><ImSpinner9 className='animate-spin text-accent text-4xl' /></div>;
  }
  // category  title
  const categoryTitle = data[0]?.categories[0]?.title;
  return <div className="mb-16 pt-56 sm:pt-44 lg:pt-[30px] xl:pt-0">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px] mt-[30px] '>
        <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
          {data[0]?.image?.url ? (
            <img className='w-full max-w-[65%] rounded-md'
              src={`${data[0]?.image?.url}`}
              alt='product image' />
          ) : (
            <img className='w-full max-w-[65%] rounded-md'
              src={comingSoon}
              alt='product image' />
          )}
        </div>
        <div className='flex-1  bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
          {/* category title */}
          <div className=' uppercase text-accent text-lg font-medium mb-2'>
            {data[0]?.categories[0]?.title}
          </div>
          {/*  title */}
          <h2 className='h2 mb-4'>
            {data[0]?.title}
          </h2>
          {/* description */}
          <p className='mb-12'>{data[0]?.description}</p>
          <div className='text-sm text-white font-semibold mb-12'>
            {data[0]?.volume}
          </div>
          {/* price & btn */}
          <div className='flex items-center gap-x-8'>
            {/* price */}
            <div className='text-sm text-accent font-semibold'>
              {(data[0]?.price).toFixed(2)} Kr
            </div>
            <button
              onClick={() => addToCart(data, id)}
              className='btn btn-accent'>Add to cart</button>
          </div>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts categoryTitle={categoryTitle} />
    </div>
  </div>;
};

export default ProductDetails;
