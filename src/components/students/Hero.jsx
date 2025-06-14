import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8 min-h-[30vh] text-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 leading-snug relative">
        Knowledge is power,<br className="hidden sm:block" />
        and this is where you <span className="text-green-500">charge up</span>.
        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-7 right-0 w-24"
        />
      </h1>
      <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-md">
        You're provided with the best resources to learn, grow, and succeed in your journey.
      </p>
    </div>
  );
};

export default Hero;
