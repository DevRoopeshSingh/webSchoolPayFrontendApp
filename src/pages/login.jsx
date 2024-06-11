import React, { useState } from 'react';

const Login = ({ login, setIsLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    emailOrMobile: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login function from props with credentials
      //await login(credentials);
      setIsLoggedIn();
      // Clear the input fields after successful login
      setCredentials({
        emailOrMobile: '',
        password: '',
      });
      setError('');
    } catch (error) {
      // Handle login error
      setError('Invalid email/mobile or password. Please try again.');
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
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 w-full"
            type="submit"
          >
            Login
          </button>
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mt-2 w-full"
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

export default Login;
