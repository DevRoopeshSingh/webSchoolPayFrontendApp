import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

  const menuItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/students', label: 'Students' },
    { path: '/fees', label: 'Fees' },
    { path: '/payments', label: 'Payments' },
    { path: '/settings', label: 'Settings' },
    { path: '/logout', label: 'Logout' },
  ];

  const loggedInUser = {
    name: 'John Doe',
    designation: 'Admin',
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
  };

  const location = useLocation();

  const getInitials = (name) => {
    const nameArray = name.split(' ');
    const initials = nameArray.map((word) => word.charAt(0));
    return initials.join('').toUpperCase();
  };

  // Function to generate a lettered avatar
  const generateAvatar = (initials) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-gray-500',
    ];
    // Choose a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className={`h-20 w-20 rounded-full flex items-center justify-center ${randomColor}`}>
        <span className="text-white font-bold text-lg">{initials}</span>
      </div>
    );
  };


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200">
        <div className="py-4 px-6">
        <div className="flex flex-col items-center">
            {/* <img
              className="h-20 w-20 rounded-full object-cover"
              src={loggedInUser.image}
              alt={loggedInUser.name}
            /> */}
            {generateAvatar(getInitials(loggedInUser.name))}
            <h1 className="text-lg font-semibold text-gray-800 mt-2">{loggedInUser.name}</h1>
            <h2 className="text-sm text-gray-600">{loggedInUser.designation}</h2>
          </div>
        </div>
  <nav className="mt-6 min-h-full">
    {/* Map over the menuItems array to generate the links */}
    {menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <Link
          to={item.path}
          className={`block py-2 px-4 text-sm text-gray-700 ${location.pathname === item.path ? 'bg-blue-200' : 'hover:bg-blue-200 hover:text-gray-900'}`}
        >
          {item.label}
        </Link>
        {index !== menuItems.length - 1 && <hr className="border-gray-300" />}
      </React.Fragment>
    ))}
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