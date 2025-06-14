import React from 'react';

const MyEnrollments = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Enrollments</h1>

      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border-b">Course</th>
            <th className="px-4 py-2 border-b">Duration</th>
            <th className="px-4 py-2 border-b">Completed Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default MyEnrollments;
