import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-600 text-dark-blue py-16 px-6 sm:px-12 text-center rounded-2xl my-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        “The beautiful thing about learning is nobody can take it away from you.”
      </h2>
      <p className="text-lg sm:text-xl mb-8 italic">
        “Your future is created by what you learn today.”
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button
          onClick={() => navigate('/course-list')}
          className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Get Started
        </button>

        <button className="flex items-center gap-2 text-white underline hover:text-gray-200">
          Learn More
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
