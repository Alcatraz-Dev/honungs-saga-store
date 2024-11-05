
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
// use fetch hook
import useFetch from '../hooks/useFetch';
const Testimonials = () => {
  const { data: testimonial } = useFetch('/testimonials?populate=*')
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const scroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += 1; // Scrolls the container to the right
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed here (lower is faster)

    return () => clearInterval(interval);
  }, [!isHovered]);
  return (

    <div className=" py-12 md:py-24">
      <div className="max-w-screen-xl ">
        <h2 className="font-black text-white text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
          What Our Customers Say
        </h2>

        <motion.div
          className="flex gap-6 overflow-hidden"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonial && Array.from(testimonial).map((testimonial, index) => (
            <div key={index} className="p-10">
              <div className="grad px-10 py-8 shadow-lg rounded-lg flex flex-col justify-between w-[500px] h-[250px]">
                {/* Feedback Section */}
                <div className="text-base leading-6 text-gray-500 relative z-0">
                  <span className="absolute top-0 left-0 -mt-12 -ml-8">
                    <span className="text-gray-600 relative leading-none" style={{ fontSize: '20rem', zIndex: -1 }}>
                      “
                    </span>
                  </span>
                  <p className="relative z-10 text-white">
                    "{testimonial?.feedback}"
                  </p>
                </div>

                {/* User Details Section */}
                <div className="mt-6 flex items-center z-20">
                  <div className="flex-shrink-0">
                    <div className="border-2 border-accent rounded-full p-1">
                      <img src={`${testimonial?.image?.url}`} className="h-12 w-12 rounded-full " alt={testimonial.name} />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg leading-5 font-medium text-accent">
                      {testimonial.name}
                    </p>
                    <div className="text-sm leading-5 text-gray-300">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-600"}
                      size={20}
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto  ">
        <p className="text-center text-white/60 mt-8 text-sm px-8 "> After your order you will receive a confirmation email you can write a review and share your experience , we will be happy to help you
          , and your review will be published on our website and will be visible to all our customers.
        </p>
      </div>

    </div>
  );
};

export default Testimonials;