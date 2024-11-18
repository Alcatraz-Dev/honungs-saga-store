import React, { useContext } from 'react';
// use fetch hook
import useFetch from '../hooks/useFetch';
// components
import ProductSlider from '../components/ProductSlider';
import { LanguageContext } from '../context/LanguageContext';
const RelatedProducts = ({ categoryTitle }) => {
  // get products by category title
  const { language } = useContext(LanguageContext);
  const { data } = useFetch(`products?[locale]=${language}&populate=*&filters[categories][title][$eq]=${categoryTitle}`);
  return <div className='mb-16 mt-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>Related Products</h2>
      <ProductSlider data={data} />
    </div>
  </div>;
};

export default RelatedProducts;
