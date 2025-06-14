import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
        Trusted by learners from top companies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        <img
          src={assets.accenture_logo}
          alt="Accenture"
          className="h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={assets.adobe_logo}
          alt="Adobe"
          className="h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={assets.paypal_logo}
          alt="PayPal"
          className="h-10 grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Companies;
