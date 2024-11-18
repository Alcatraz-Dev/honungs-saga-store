import React, { useEffect, useState } from 'react';
// use params hook
import { useParams } from 'react-router-dom';
// use fetch hook
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import { LanguageContext } from '../context/LanguageContext';
const Products = () => {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  // get products based on category
  const { data } = useFetch(`/products?[locale]=${language}&populate=*&[filters][categories][$eq]=${id}`);
  const [title, setTitle] = useState(null)
  //set the title when the data is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0]?.categories[0]?.title)
    }
  }, [])
  return <div className='mb-16 pt-40 lg:pt-0 '>
    <div className='container mx-auto'>
      <div className='flex gap-x-[30px]'>
        <CategoryNav />
        <main>
          {/* title */}
          <div className='py-3 text-xl uppercase text-center lg:text-left '>
            {title}
          </div>
          {/* products grid  */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
            {data?.map(product => {
              return (
                <Product product={product} key={product?.id} />
              )
            })}
          </div>
        </main>
      </div>
    </div>
  </div>;
};

export default Products;
