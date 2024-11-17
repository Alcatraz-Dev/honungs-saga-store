import React from 'react';
// use fetch hook
import useFetch from '../hooks/useFetch';

function AboutUs() {
  const { data } = useFetch('/about-uses?populate=*');

  return (
    <section aria-labelledby="about-us-title" className="text-center">
      {data ? (
        <h2
          id="about-us-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-6"
        >
          {data[0]?.title}
        </h2>
      ) : (
        <h1
          id="about-us-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-6"
        >
          About Us
        </h1>
      )}
      {data ? (
        <div className="text-base sm:text-lg lg:text-xl text-gray-200 leading-loose max-w-4xl mx-auto space-y-4">
          {data[0]?.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <div className="text-base sm:text-lg lg:text-xl text-gray-200 leading-loose max-w-4xl mx-auto space-y-4">
          <p>
            We are passionate about providing you with the purest, organic wild honey, ethically harvested from untouched, pristine environments.
          </p>
          <p>
            Our commitment to quality means that every jar of honey is carefully sourced and crafted to retain its natural richness, flavor, and nutritional properties.
          </p>
          <p>
            We are unique in selling honey with fresh blended royal jelly and bee pollen from the same beekeeper, with a guarantee to result in immunity against flu for our customers. Our quality is one of the world's highest quality, improved by our own studies before selling these products online.
          </p>
          <p>
            We are dietitians and experts in nutrition. We have different premium honey mixes for immunity, energy, and concentration.
          </p>
          <p>
            Long time ago, the people in the area where this honey comes from used only honey against different diseases. Science has proven that the honeys we have are truly good against them.
          </p>
          <p>
            The origin of our honey is from the East Atlas Mountains near the Mediterranean Sea, Tunisia. We can deliver our products directly from the farm in Tunisia or from Europe, Sweden.
          </p>
          <p>Remember, good honey never gets old 😉</p>
        </div>
      )}
    </section>
  );
}

export default AboutUs;