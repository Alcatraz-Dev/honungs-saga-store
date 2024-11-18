import React, { useState } from 'react';
// icons 
import { FiX } from 'react-icons/fi'
//link 
import { Link } from 'react-router-dom';
//use fetch hook
import useFetch from '../hooks/useFetch';
import { LanguageContext } from '../context/LanguageContext';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { language } = useContext(LanguageContext);
  //get categories
  const { data } = useFetch(`/categories[locale]=${language}&populate=*`);
  return <div className='w-full h-full bg-primary p-8 '>
    {/* clase icon  */}
    <div
      onClick={() => setCatNavMobile(false)}
      className='flex justify-end mb-8 cursor-pointer'>
      <FiX className='text-3xl' />
    </div>
    <div className='flex flex-col gap-y-8'>
      {data?.map(category => {
        return (
          <Link to={`/products/${category?.id}`} onClick={() => setCatNavMobile(false)} className='uppercase font-medium ' key={category?.id}>
            {category?.title}
          </Link>
        )
      })}
    </div>
  </div>;
};

export default CategoryNavMobile;
