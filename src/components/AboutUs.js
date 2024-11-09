import React from 'react';
// use fetch hook
import useFetch from '../hooks/useFetch';
function AboutUs() {
  const { data } = useFetch('/api/about-uses?populate=*');
  return (
    <section aria-labelledby="about-us-title" className=" mb-20 pt-[250px] px-4 lg:pt-0 text-center">
      {data?.title ? (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
          {data.title}
        </h2>
      ) : (
        <h1 id="about-us-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-6">
          About Us
        </h1>
      )
      }
      {data?.description ? (
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          {data.description}
        </p>
      ) : (
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          We are passionate about providing you with the purest, organic wild honey, ethically harvested from untouched, pristine environments. Our commitment to quality means that every jar of honey is carefully sourced and crafted to retain its natural richness, flavor, and nutritional properties.
        </p>
      )}

    </section>
  );
}

export default AboutUs;