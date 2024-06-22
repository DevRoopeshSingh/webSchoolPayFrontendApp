import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-gray-700 mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
