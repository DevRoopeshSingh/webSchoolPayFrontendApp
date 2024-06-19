import React from 'react';

const SchoolDetails = ({ school }) => {
  if (!school) {
    return <div>Loading school details...</div>; // Placeholder for loading state
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">School Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Name:</p>
          <p className="font-semibold">{school.name}</p>
        </div>
        <div>
          <p className="text-gray-600">Location:</p>
          <p className="font-semibold">{school.location}</p>
        </div>
        <div>
          <p className="text-gray-600">Principal:</p>
          <p className="font-semibold">{school.principal}</p>
        </div>
        <div>
          <p className="text-gray-600">Total Students:</p>
          <p className="font-semibold">{school.totalStudents}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;
