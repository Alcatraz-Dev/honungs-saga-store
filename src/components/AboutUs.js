import React from 'react';
// use fetch hook
import useFetch from '../hooks/useFetch';
function AboutUs() {
  const { data } = useFetch('/about-uses?populate=*');
  return (
    <section aria-labelledby="about-us-title" className="text-center ">
      {data ? (
        <h2 id="about-us-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-6 ">
          {data[0]?.title}
        </h2>
      ) : (
        <h1 id="about-us-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-6 ">
          About Us
        </h1>
      )
      }
      {data ? (
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-loose max-w-4xl mx-auto ">
          {data[0]?.description}
        </p>
      ) : (
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-loose max-w-4xl mx-auto">
          We are passionate about providing you with the purest, organic wild honey, ethically harvested from untouched, pristine environments.
          Our commitment to quality means that every jar of honey is carefully sourced and crafted to retain its natural richness, flavor, and nutritional properties.

          We are unique on selling honey with fresh blended royal jelly and bee pollen from the same beekeeper ,with a guarantee to result in immunity against flu for our customers.
          Our quality is one of the worlds highest quality. Improved by our own studies before selling these products online.
          We are dietist and experts in nutrition.
          We got different premium honey mixes for immunity, energy, concentration .

          Long time ago the people in the area where this honey comes from used only honey against different diseases.

          The science has improved that these honeys we got are truly good against them.

          The origin of our honey is from the east atlas mountains near the meditereanan sea, Tunisia.

          We can deliver directly our products from the farm in Tunisia or from Europe, Sweden.

          Remember, good honey becomes never old 😉
        </p>
      )}

    </section>
  );
}

export default AboutUs;