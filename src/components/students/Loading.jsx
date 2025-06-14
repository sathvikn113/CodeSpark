import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-lg text-gray-700 font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
