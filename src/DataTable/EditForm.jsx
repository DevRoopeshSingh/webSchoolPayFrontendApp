import React, { useState } from 'react';

// Define role options
const roleOptions = [
    { id: '1', name: 'Super Admin', description: 'has full access to all features and settings' },
    { id: '2', name: 'Admin', description: 'manages school settings and user accounts' },
    { id: '3', name: 'Teacher', description: 'manages classes and students' },
    { id: '4', name: 'Student', description: 'can view personal academic information' },
    { id: '5', name: 'Parent', description: 'can view child\'s academic information' },
  ];

const EditForm = ({ rowData, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        ...rowData,
        is_active: Boolean(rowData.is_active), // Convert to boolean
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Phone number validation regex (for demonstration purposes)
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number

    // Validate phone number format
  if (name === 'phone_no' && !phoneRegex.test(value)) {
    // Handle invalid phone number (you can display an error message or handle as needed)
    console.log('Invalid phone number format'); // Example: Log to console
    // Optionally, you can prevent updating formData for invalid input
    return;
  }

    setFormData({ ...formData, [name]: value });
  };

  const handleToggleActive = () => {
    setFormData({ ...formData, is_active: !formData.is_active });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-9/12">
        <h2 className="text-lg flex items-center justify-center font-semibold mb-4">Edit Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* First Row */}
            <div className="col-span-1">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="middle_name" className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                value={formData.middle_name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Second Row */}
            <div className="col-span-1">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="email_id" className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                type="text"
                id="email_id"
                name="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Third Row */}
            <div className="col-span-1">
              <label htmlFor="user_pwd" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="user_pwd"
                name="user_pwd"
                value={formData.user_pwd}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="user_role_id" className="block text-sm font-medium text-gray-700">
                Role ID
              </label>
              <select
                id="user_role_id"
                name="user_role_id"
                value={formData.user_role_id}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
              >
                {roleOptions.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
            {/* Fourth Row */}
            <div className="col-span-1">
              <label htmlFor="is_active" className="block text-sm font-medium text-gray-700">
                Is Active
              </label>
              <div className="col-span-1 flex items-center justify-end">
              <button
                type="button"
                onClick={handleToggleActive}
                className={`inline-flex justify-center py-2 px-4 rounded-md text-sm font-medium focus:outline-none ${formData.is_active ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
              >
                {formData.is_active ? 'Active' : 'Inactive'}
              </button>
            </div>
            </div>
            <div className="col-span-1">
              <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone_no"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Fifth Row */}
            <div className="col-span-1">
              <label htmlFor="permanent_address" className="block text-sm font-medium text-gray-700">
                Permanent Address
              </label>
              <textarea
                type="text"
                id="permanent_address"
                name="permanent_address"
                value={formData.permanent_address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="current_address" className="block text-sm font-medium text-gray-700">
                Current Address
              </label>
              <textarea
                type="text"
                id="current_address"
                name="current_address"
                value={formData.current_address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Sixth Row */}
            <div className="col-span-1">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
