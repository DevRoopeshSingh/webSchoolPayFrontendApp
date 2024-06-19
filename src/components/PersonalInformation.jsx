import React from 'react';

const PersonalInformation = () => {
  // Sample student data (can be fetched from API)
  const student = {
    id: 1,
    name: 'John Doe',
    age: 12,
    class: 'Class A',
    address: '123 Main St, Cityville',
    guardianName: 'Jane Doe',
    contactNumber: '+1234567890',
    email: 'john.doe@example.com',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {student.name}</p>
        <p><span className="font-semibold">Age:</span> {student.age}</p>
        <p><span className="font-semibold">Class:</span> {student.class}</p>
        <p><span className="font-semibold">Address:</span> {student.address}</p>
        <p><span className="font-semibold">Guardian Name:</span> {student.guardianName}</p>
        <p><span className="font-semibold">Contact Number:</span> {student.contactNumber}</p>
        <p><span className="font-semibold">Email:</span> {student.email}</p>
      </div>
    </div>
  );
};

export default PersonalInformation;
