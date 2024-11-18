import React, { useState } from 'react';
//use fetch hooks
import useFetch from '../hooks/useFetch';
//link
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
const CategoryNav = () => {
  const { language } = useContext(LanguageContext);
  const { data } = useFetch(`/categories?[locale]=${language}&populate=*`);
  const [isOpen, setIsOpen] = useState(false);
  return <aside className='hidden xl:flex'>
    <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
      <div className='bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center'>
        Browse Categories
      </div>
      <div className='flex flex-col gap-y-6 p-6 '>
        {data?.map(category => {
          return <Link to={`/products/${category?.id}`} onClick={() => setIsOpen(false)} key={category?.id}
            className="curser-pointer uppercase"
          >{category?.title}</Link>
        })}
      </div>
    </div>
  </aside>;
};

export default CategoryNav;
