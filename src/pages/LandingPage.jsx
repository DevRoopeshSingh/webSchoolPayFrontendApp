import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-between items-center">
      <header className="w-full bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">School Management System</h1>
        <div className='px-6 flex justify-between'>
            <Link to="/about" className='ml-4'>About Us</Link>
            <Link to="/products" className='ml-4'>Products</Link>
            <Link to="/contact" className='ml-4'>Contact Us</Link>
        </div>
        <div>
          <Link to="/signup" className="bg-orange-500 text-white py-2 px-4 rounded-md mx-2">Sign In</Link>
          <Link to="/guest" className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md">Guest Mode</Link>
        </div>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to School Management System</h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Commodo elit aute nostrud incididunt exercitation do occaecat sint,
          qui voluptate commodo velit consequat. Anet deserunt fugiat sit consectetur
          eiusmod aliquip ut ex amet consequat tempor. Et ea qus qus
          magna adipiscing eu reprehenderit veniam laborum nostrud minim.
        </p>
      </main>
      <footer className="w-full bg-blue-500 p-4 flex justify-center items-center">
        <p className="text-white">© 2024 School Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
