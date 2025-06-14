import React from 'react';
import { dummyTestimonial } from '../../assets/assets';

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        What Our Learners Say
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-cyan-600"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex items-center mb-2 text-yellow-500 text-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>
                  {i < Math.floor(testimonial.rating) ? '★' : i < testimonial.rating ? '★' : '☆'}
                </span>
              ))}
              <span className="ml-2 text-gray-600 font-medium">
                {testimonial.rating.toFixed(1)}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{testimonial.feedback}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
