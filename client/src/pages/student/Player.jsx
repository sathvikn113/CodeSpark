import React from 'react';
import { dummyCourses } from '../../assets/assets'; // Adjust path if needed

const MyEnrollments = () => {
  const calculateDuration = (course) => {
    let totalSeconds = 0;

    course.courseContent.forEach((chapter) => {
      chapter.chapterContent?.forEach((lecture) => {
        totalSeconds += lecture.lectureDuration || 0;
      });
    });

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  const calculateProgress = (index) => {
    return index % 2 === 0 ? 100 : 40; // Simulated progress
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Enrollments</h1>

      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border-b">Course</th>
            <th className="px-4 py-2 border-b">Duration</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Progress</th>
          </tr>
        </thead>
        <tbody>
          {dummyCourses.map((course, index) => {
            const progress = calculateProgress(index);
            return (
              <tr key={course._id} className="hover:bg-gray-50">
                <td className="flex items-center gap-4 px-4 py-3 border-b">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{course.courseTitle}</span>
                </td>
                <td className="px-4 py-3 border-b">{calculateDuration(course)}</td>
                <td className="px-4 py-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      progress === 100
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {progress === 100 ? 'Done' : 'In Progress'}
                  </span>
                </td>
                <td className="px-4 py-3 border-b w-1/4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        progress === 100 ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 mt-1 block">{progress}%</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrollments;

