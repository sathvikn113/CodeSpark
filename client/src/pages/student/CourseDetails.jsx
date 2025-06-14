import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyCourses } from '../../assets/assets';
import Loading from '../../components/students/Loading';
import humanizeDuration from 'humanize-duration';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const found = dummyCourses.find(c => c._id === id);
      setCourse(found);
      setLoading(false);
    }, 1500);
  }, [id]);

  if (loading) return <Loading />;
  if (!course) return <p className="text-red-500">Course not found</p>;

  const {
    courseTitle,
    description,
    courseThumbnail,
    courseVideo,
    coursePrice,
    discount,
    duration,
    educator = {},
    courseStructure = [],
  } = course;

  const finalPrice = coursePrice - (discount / 100) * coursePrice;

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{courseTitle}</h1>

      {/* Video */}
      {courseVideo && (
        <div className="aspect-video mb-6">
          <iframe
            src={courseVideo}
            title="Course Video"
            className="w-full h-full rounded"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Thumbnail and educator */}
      <div className="flex gap-6 flex-wrap mb-6">
        <img
          src={courseThumbnail}
          alt={courseTitle}
          className="w-64 h-40 object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-600 mb-2"><strong>Instructor:</strong> {educator.name || "Unknown"}</p>
          <p className="text-gray-600 mb-2"><strong>Duration:</strong> {humanizeDuration(duration, { units: ['h', 'm'], round: true })}</p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong>{' '}
            <span className="line-through text-red-400">₹{coursePrice}</span>{' '}
            <span className="text-green-600 font-semibold">₹{finalPrice}</span>
          </p>
          {!enrolled ? (
            <button
              className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          ) : (
            <p className="mt-2 text-green-600 font-medium">✅ You are enrolled</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Structure */}
      {courseStructure.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Course Structure</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {courseStructure.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;


