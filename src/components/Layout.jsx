import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChalkboard, FaUserGraduate, FaChalkboardTeacher, FaExclamationCircle, FaCommentDots, FaMoneyBillWave, FaMoneyCheckAlt, FaCog } from 'react-icons/fa';

const Layout = ({ children, loggedInUser }) => {
  const location = useLocation();

  // Define menu items based on user roles
  const getMenuItems = (role) => {
    switch (role) {
      case 'Super Admin':
        return [
          { path: '/', label: 'Dashboard', icon: FaHome },
          { path: '/classes', label: 'Classes', icon: FaChalkboard },
          { path: '/students', label: 'Students', icon: FaUserGraduate },
          { path: '/teachers', label: 'Teachers', icon: FaChalkboardTeacher },
          { path: '/notice', label: 'Notice', icon: FaExclamationCircle },
          { path: '/complain', label: 'Complaints', icon: FaCommentDots },
          { path: '/fees', label: 'Fees', icon: FaMoneyBillWave },
          { path: '/payments', label: 'Payments', icon: FaMoneyCheckAlt },
          { path: '/settings', label: 'Settings', icon: FaCog },
        ];
      case 'Admin':
        return [
          { path: '/', label: 'Dashboard', icon: FaHome },
          { path: '/classes', label: 'Classes', icon: FaChalkboard },
          { path: '/students', label: 'Students', icon: FaUserGraduate },
          { path: '/teachers', label: 'Teachers', icon: FaChalkboardTeacher },
          { path: '/notice', label: 'Notice', icon: FaExclamationCircle },
          { path: '/complain', label: 'Complaints', icon: FaCommentDots },
          { path: '/settings', label: 'Settings', icon: FaCog },
        ];
      case 'Teacher':
        return [
          { path: '/', label: 'Dashboard', icon: FaHome },
          { path: '/students', label: 'Students', icon: FaUserGraduate },
          { path: '/notice', label: 'Notice', icon: FaExclamationCircle },
        ];
      case 'Student':
        return [
          { path: '/', label: 'Dashboard', icon: FaHome },
          { path: '/fees', label: 'Fees', icon: FaMoneyBillWave },
          { path: '/payments', label: 'Payments', icon: FaMoneyCheckAlt },
        ];
      case 'Parent':
        return [
          { path: '/', label: 'Dashboard', icon: FaHome },
          { path: '/students', label: 'Students', icon: FaUserGraduate },
          { path: '/notice', label: 'Notice', icon: FaExclamationCircle },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems(loggedInUser.role);

  const getInitials = (name) => {
    const nameArray = name.split(' ');
    const initials = nameArray.map((word) => word.charAt(0));
    return initials.join('').toUpperCase();
  };

  const hashStringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 75%, 50%)`;
    return color;
  };

  const initials = getInitials(loggedInUser.name);
  const avatarColor = hashStringToColor(loggedInUser.name);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200">
        {/* <div className="py-4 px-6">
          <div className="flex flex-col items-center">
            <div
              className="h-20 w-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: avatarColor }}
            >
              <span className="text-white font-bold text-lg">{initials}</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-800 mt-2">{loggedInUser.name}</h1>
            <h2 className="text-sm text-gray-600">{loggedInUser.designation}</h2>
          </div>
        </div> */}
        <nav className="mt-6 min-h-full">
          {/* Map over the menuItems array to generate the links */}
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item.path}
                className={`flex items-center py-2 px-4 text-sm text-gray-700 ${location.pathname === item.path ? 'bg-blue-200' : 'hover:bg-blue-200 hover:text-gray-900'}`}
              >
                <item.icon className="mr-2 text-xl" />
                <span>{item.label}</span>
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
