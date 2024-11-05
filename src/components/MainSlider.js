import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import { Pagination } from 'swiper';
// use fetch hook
import useFetch from '../hooks/useFetch';

const MainSlider = () => {
  const { data } = useFetch('/sliders?populate=*');

  return (
    <Swiper modules={[Pagination]} loop={true} pagination={{ clickable: true }}
      className=' mainSlider h-full bg-primary  xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'
    >
      <>
        {
          data?.map((slider, idx) => {
            return (<SwiperSlide key={idx}>
              <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
                {/* text */}
                <div className='w-full lg:flex-1'>
                  <div className='mb-1 uppercase text-center lg:text-left'>
                    {slider?.preTitle}
                  </div>
                  <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                    {slider?.titlePart1}<br />
                    {slider?.titlePart2}<br />
                    {slider?.titlePart3}
                  </div>
                  <button className=' btn btn-accent mx-auto lg:mx-0'>{slider?.btnText}</button>
                </div>
                {/* img */}
                <div className='flex-1'>
                  <img className='xl:absolute xl:-right-40 xl:-bottom-20' src={`${process.env.REACT_APP_API_BASE_URL}${slider?.image[0]?.url}`} alt="slider img" />
                </div>
              </div>
            </SwiperSlide>)
          })

        }

      </>
    </Swiper>
  )
};

export default MainSlider;
