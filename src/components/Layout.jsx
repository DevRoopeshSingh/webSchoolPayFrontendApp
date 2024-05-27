import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200">
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold text-gray-800">School App</h1>
        </div>
        <nav className="mt-6">
          <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Dashboard</Link>
          <Link to="/students" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Students</Link>
          <Link to="/fees"  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Fees</Link>
          <Link to="/payments" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Payments</Link>
          <Link to="/settings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Settings</Link>
          <Link to="/logout" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Logout</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;