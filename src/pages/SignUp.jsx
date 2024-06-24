import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../Global/LoadingContext';

const SignUp = ({ setIsLoggedIn, setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrMobile: '',
    password: '',
  });

  const { showLoading, hideLoading } = useLoading();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();

    try {
      // Simulate an API call for sign-up
      const user = await mockApiSignUp(formData); // Replace this with your actual API call

      // If sign-up is successful, set the user in state and mark as logged in
      setUser(user);
      setIsLoggedIn(user);

      // Redirect based on the user's role
      switch (user.role) {
        case 'Super Admin':
          navigate('/superadmin');
          break;
        case 'Admin':
          navigate('/admin');
          break;
        case 'Teacher':
          navigate('/teacher');
          break;
        case 'Student':
          navigate('/student');
          break;
        case 'Parent':
          navigate('/parents');
          break;
        default:
          navigate('/dashboard');
          break;
      }

      // Clear the input fields after successful sign-up
      setFormData({
        name: '',
        emailOrMobile: '',
        password: '',
      });
      setError('');
    } catch (error) {
      // Handle sign-up error
      setError('Failed to sign up. Please try again.');
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-full max-w-xs bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="name">
            Name:
            <input
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="block mb-2" htmlFor="emailOrMobile">
            Email or Mobile:
            <input
              id="emailOrMobile"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="text"
              name="emailOrMobile"
              value={formData.emailOrMobile}
              onChange={handleChange}
              placeholder="Enter your email or mobile number"
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 w-full transition duration-300 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <button
              className="text-blue-500 underline"
              type="button"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

// Mock function to simulate API sign-up
const mockApiSignUp = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.emailOrMobile === 'admin@example.com') {
        resolve({
          name: formData.name,
          role: 'Admin',
        });
      } else {
        reject(new Error('Sign-up failed'));
      }
    }, 2000);
  });
};

export default SignUp;
