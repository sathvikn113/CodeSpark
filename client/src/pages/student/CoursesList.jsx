import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/students/SearchBar';
import CourseCard from '../../components/students/CourseCard';
import { dummyCourses } from '../../assets/assets'; // ✅ use the same import
import Footer from '../../components/students/Footer';

const CoursesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(dummyCourses);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = dummyCourses.filter(course =>
      course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchQuery]);

  return (
    <>
    <div className="px-6 md:px-20 lg:px-36 py-6 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <p>
          <span
            onClick={() => navigate('/')}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">Course List</span>
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Course List</h1>

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {/* Course Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
       
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default CoursesList;


