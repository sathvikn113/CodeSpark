import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const {
    _id,
    courseTitle,
    courseThumbnail,
    educator = {},
    coursePrice = 0,
    discount = 0,
    rating = 4.5,
  } = course;

  const discountedPrice = (coursePrice - (discount * coursePrice) / 100).toFixed(2);

  return (
    <Link
      to={`/course/${_id}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full sm:w-[250px] overflow-hidden"
    >
      <img
        src={courseThumbnail}
        alt={courseTitle}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {courseTitle}
        </h3>
        <p className="text-sm text-gray-500 mb-2 truncate">
          By {educator.name || 'Unknown'}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
          <span>₹{discountedPrice}</span>
          <span>⭐ {Number(rating).toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;


