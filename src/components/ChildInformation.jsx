import React from 'react';

const ChildInformation = () => {
  // Sample child data (can be fetched from API)
  const child = {
    id: 1,
    name: 'Jane Doe',
    age: 12,
    class: 'Class A',
    address: '123 Main St, Cityville',
    guardianName: 'John Doe',
    contactNumber: '+1234567890',
    email: 'jane.doe@example.com',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Child's Information</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {child.name}</p>
        <p><span className="font-semibold">Age:</span> {child.age}</p>
        <p><span className="font-semibold">Class:</span> {child.class}</p>
        <p><span className="font-semibold">Address:</span> {child.address}</p>
        <p><span className="font-semibold">Guardian Name:</span> {child.guardianName}</p>
        <p><span className="font-semibold">Contact Number:</span> {child.contactNumber}</p>
        <p><span className="font-semibold">Email:</span> {child.email}</p>
      </div>
    </div>
  );
};

export default ChildInformation;
