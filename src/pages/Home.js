import React from 'react';

// import components
import LatestProducts from '../components/LatestProducts';
import Hero from '../components/Hero';
const Home = () => {
  //get new products

  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  )
};

export default Home;
