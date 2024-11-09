import React from 'react';
// icons 
import { BsInstagram } from 'react-icons/bs';
// use fetch hook
import useFetch from '../hooks/useFetch';
const Footer = () => {
  const { data } = useFetch('/api/social-medias?populate=*');
  const InstagramUrl = data?.[0]?.url || 'https://www.instagram.com/organicwildhoney?igsh=dWI4cGcxZTI0dm82';
  return <footer className='pt-16 bg-primary'>
    <div className='container mx-auto'>
      <div className='text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold'> Subscribe to our newsletter</h2>
        <p className='text-white/70 mb-6'> Be the first to get our latest newsletter aubout trends, products and promotions. </p>
      </div>
      {/* subscribe form */}
      <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 mb-14'>
        <input type='text' placeholder='Enter your email' className='input ' />
        <button className='btn btn-accent min-w-[150px]'>Join</button>
      </form>
      {/* links */}
      <div className='text-base text-white/60 flex  gap-x-6 capitalize max-w-max mx-auto mb-9'>
        <a href='#' className='hover:text-white transition-all'> Returns Policy</a>
        <a href='#' className='hover:text-white transition-all'> Track your order</a>
        <a href='#' className='hover:text-white transition-all'> Shipping & Delivery</a>
      </div>
      {/* socials */}
      <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
        <a href={`${InstagramUrl}`} target='_blank'
          className='hover:text-accent transition-al bg-gradient-to-r from-purple-600 via-yellow-500 to-yellow-200 inline-block text-transparent bg-clip-textl'
        ><BsInstagram /></a>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-white/10'>
        <div className='container mx-auto'>
          <p className='text-center text-sm text-white/60'> &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
