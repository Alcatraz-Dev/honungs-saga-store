import React, { useContext } from 'react';
// import components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
import AboutUs from '../components/AboutUs';
//images
import discount from '../img/discount.png';
import { LanguageContext } from '../context/LanguageContext';
// use fetch hook
import useFetch from '../hooks/useFetch';
const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { data: promoOne } = useFetch(`/promo-banner-ones?[locale]=${language}&populate=*`);
  const { data: promoTwo } = useFetch(`/promo-banner-tows?[locale]=${language}&populate=*`);
  return (
    <section className='mb-[30px] pt-36 lg:pt-0 '>
      <div className='container mx-auto'>
        <div className=' mb-10 pt-[100px] px-4 lg:pt-1 '>
          <AboutUs />
        </div>
        <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
            <MainSlider />
          </div>
          {/* promos */}

          <div className='flex flex-col gap-y-[30px] w-full max-w-lg  mx-auto h-[500px] '>
            {/* promo img 1 */}
            {promoOne && promoOne.length > 0 && (
              <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                {/* text */}
                <div className='flex flex-col max-w-[144px] h-full justify-center'>
                  <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                    {promoOne[0]?.title}
                  </div>
                  <a href='#' className='uppercase text-accent'>
                    {promoOne[0]?.btnText}
                  </a>
                </div>
                {/* image */}
                {promoOne?.image?.[0]?.url ? (

                  <img className=' absolute  z-20 -top-7 -right-16' src={`${promoOne?.[0]?.image?.[0]?.url}`} alt=' Promo img' />
                ) : (
                  <img className=' absolute  z-20 -top-7 -right-16 p-10' src={discount} alt=' Promo img' />
                )}
              </div>
            )}
            {/* promo img 2*/}
            {promoTwo && promoTwo.length > 0 && (
              <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                {/* text */}
                <div className='flex flex-col max-w-[144px] h-full justify-center'>
                  <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                    {promoTwo[0]?.title}
                  </div>
                  <a href='#' className='uppercase text-accent'>
                    {promoTwo[0]?.btnText}
                  </a>
                </div>
                {/* image */}
                {promoTwo?.image?.[0]?.url ? (

                  <img className=' absolute  z-20 top-5 -right-20' src={`${promoTwo?.[0]?.image?.[0]?.url}`} alt=' Promo img' />
                ) : (
                  <img className=' absolute  z-20 top-5 -right-20 p-10' src={discount} alt=' Promo img' />
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>);
};

export default Hero;
