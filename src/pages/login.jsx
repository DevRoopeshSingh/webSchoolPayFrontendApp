import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../Global/LoadingContext';

const Login = ({ setIsLoggedIn, setUser }) => {
  const [credentials, setCredentials] = useState({
    emailOrMobile: '',
    password: '',
  });

  const { showLoading, hideLoading } = useLoading();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();

    try {
      // Simulate an API call
      const user = await mockApiLogin(credentials); // Replace this with your actual API call

      // If login is successful, set the user in state and mark as logged in
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

      // Clear the input fields after successful login
      setCredentials({
        emailOrMobile: '',
        password: '',
      });
      setError('');
    } catch (error) {
      // Handle login error
      setError('Invalid email/mobile or password. Please try again.');
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-full max-w-xs bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="emailOrMobile">
            Email or Mobile:
            <input
              id="emailOrMobile"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              type="text"
              name="emailOrMobile"
              value={credentials.emailOrMobile}
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
              value={credentials.password}
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
            Login
          </button>
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mt-2 w-full transition duration-300 ease-in-out transform hover:scale-105"
            type="button"
            onClick={() => {
              // Handle forgot password action here
              console.log('Forgot password clicked');
            }}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};

// Mock function to simulate API login
const mockApiLogin = async (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { emailOrMobile, password } = credentials;
      if (emailOrMobile === 'superadmin@example.com' && password === 'password') {
        resolve({
          name: 'Super Admin',
          role: 'SuperAdmin',
        });
      } else if (emailOrMobile === 'admin@example.com' && password === 'password') {
        resolve({
          name: 'Admin',
          role: 'Admin',
        });
      } else if (emailOrMobile === 'teacher@example.com' && password === 'password') {
        resolve({
          name: 'Teacher',
          role: 'Teacher',
        });
      } else if (emailOrMobile === 'student@example.com' && password === 'password') {
        resolve({
          name: 'Student',
          role: 'Student',
        });
      } else if (emailOrMobile === 'parent@example.com' && password === 'password') {
        resolve({
          name: 'Parent',
          role: 'Parent',
        });
      } else {
        reject(new Error('Invalid email/mobile or password'));
      }
    }, 2000);
  });
};

export default Login;
