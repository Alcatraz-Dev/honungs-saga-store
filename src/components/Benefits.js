import React from 'react';
// icons 
import { FaLeaf, FaHeart, FaTruck } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="grad py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl uppercase mb-6 font-semibold text-white">Benefits of our Honey</h2>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-center items-center gap-x-10 text-white/60">
          <div className="flex flex-col items-center max-w-xs">
            <FaLeaf size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">100% Natural Honey</p>
            <span className="text-center text-xs mt-2">Pure honey with no additives or preservatives</span>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <FaHeart size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">Health Benefits</p>
            <span className="text-center text-xs mt-2">Rich in antioxidants and nutrients</span>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <FaTruck size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">Fast Delivery</p>
            <span className="text-center text-xs mt-2">Quick and secure shipping to your doorstep</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;