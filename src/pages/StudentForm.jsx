import React, { useState, useEffect } from 'react';

const EditForm = ({ formData, onSave, onCancel }) => {
  const [studentData, setStudentData] = useState({
    name: '',
    department: '',
    batch: '',
    status: 'active', // Default status
    email: '',
    image: '',
  });

  // Update form data if editing existing student
  useEffect(() => {
    if (formData) {
      setStudentData(formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(studentData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-9/12">
        <h2 className="text-lg flex items-center justify-center font-semibold mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          {/* Example: Name input */}
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Add more inputs for department, batch, etc. */}
          
          <div className="mt-4 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
