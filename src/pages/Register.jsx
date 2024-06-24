import React, { useState } from 'react';

const Register = ({ register }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the register function from props with user data
      // await register(userData);
      // Clear the input fields after successful registration
      setUserData({
        name: '',
        email: '',
        password: '',
      });
      setError('');
    } catch (error) {
      // Handle registration error
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-full max-w-xs bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="name">
            Name:
            <input
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="block mb-2" htmlFor="email">
            Email:
            <input
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="block mb-2" htmlFor="password">
            Password:
            <input
              id="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 w-full"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
