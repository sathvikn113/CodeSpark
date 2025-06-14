import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import { dummyCourses } from '../../assets/assets';

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-16 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Learn from the Best Faculties
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Dive into a wide range of courses taught by industry experts and top educators. 
        Whether you're a beginner or a pro, we’ve got something for everyone!
      </p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-12">
        {dummyCourses.slice(0, 4).map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* Show All Courses Button */}
      <button
        onClick={() => navigate('/course-list')}
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full text-lg transition duration-300"
      >
        Show All Courses
      </button>
    </div>
  );
};

export default CoursesSection;

