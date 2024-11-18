import React, { useContext } from 'react';
//components
import ProductSlider from '../components/ProductSlider';
//use fetch hooks
import useFetch from '../hooks/useFetch';
import { LanguageContext } from '../context/LanguageContext';
const LatestProducts = () => {
  const { language } = useContext(LanguageContext);
  const { data } = useFetch(`/products?[locale]=${language}&populate=*&[filters][isNew][$eq]=true`);
  return (

    <div className='mb-16 '>
      <div className='container mx-auto '>
        <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
      </div>
      {/*  products slider*/}
      <ProductSlider data={data} />
    </div>
  )
};

export default LatestProducts;
