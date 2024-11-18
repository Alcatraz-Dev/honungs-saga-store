import React, { useContext } from 'react';
// icons 
import { BsInstagram } from 'react-icons/bs';
// use fetch hook
import useFetch from '../hooks/useFetch';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { data } = useFetch('/api/social-medias?populate=*');
  const InstagramUrl = data?.[0]?.url || 'https://www.instagram.com/organicwildhoney?igsh=dWI4cGcxZTI0dm82';

  // Translations for different languages
  const translations = {
    en: {
      title: 'Subscribe to our newsletter',
      description: 'Be the first to get our latest newsletter about trends, products and promotions.',
      returnsPolicy: 'Returns Policy',
      trackOrder: 'Track your order',
      shipping: 'Shipping & Delivery',
      copyright: `&copy; ${new Date().getFullYear()}. All rights reserved.`
    },
    sv: {
      title: 'Prenumerera på vårt nyhetsbrev',
      description: 'Var den första att ta emot vårt senaste nyhetsbrev om trender, produkter och kampanjer.',
      returnsPolicy: 'Returpolicy',
      trackOrder: 'Spåra din beställning',
      shipping: 'Frakt & Leverans',
      copyright: `&copy; ${new Date().getFullYear()}. Alla rättigheter förbehålls.`
    },
    ar: {
      title: 'اشترك في نشرتنا الإخبارية',
      description: 'كن أول من يتلقى نشرتنا الإخبارية حول الاتجاهات والمنتجات والعروض الترويجية.',
      returnsPolicy: 'سياسة الإرجاع',
      trackOrder: 'تتبع طلبك',
      shipping: 'الشحن والتوصيل',
      copyright: `&copy; ${new Date().getFullYear()}. جميع الحقوق محفوظة.`
    }
  };

  // Get the current language's translations
  const t = translations[language];

  return (
    <footer className='pt-16 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>{t.title}</h2>
          <p className='text-white/70 mb-6'>{t.description}</p>
        </div>

        {/* subscribe form */}
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 mb-14'>
          <input type='text' placeholder={language === 'en' ? 'Enter your email' : language === 'sv' ? 'Ange din e-post' : 'أدخل بريدك الإلكتروني'} className='input ' />
          <button className='btn btn-accent min-w-[150px]'>{t.title}</button>
        </form>

        {/* links */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
          <a href='#' className='hover:text-white transition-all'>{t.returnsPolicy}</a>
          <a href='#' className='hover:text-white transition-all'>{t.trackOrder}</a>
          <a href='#' className='hover:text-white transition-all'>{t.shipping}</a>
        </div>

        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <a href={`${InstagramUrl}`} target='_blank' className='hover:text-accent transition-all duration-300'>
            <BsInstagram />
          </a>
        </div>

        {/* copyright */}
        <div className='py-10 border-t border-white/10'>
          <div className='container mx-auto'>
            <p className='text-center text-sm text-white/60'>{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;