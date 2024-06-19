import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUserFriends, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between h-16 px-4 bg-blue-500">
      <Link to="/" className="text-white text-lg font-bold">School Pay App</Link>
      <div className="flex items-center text-white">
        <div className="relative ml-4" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center hover:text-gray-300 focus:outline-none"
          >
            <span>Roles</span>
            <FaChevronDown className="ml-2" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <Link to="/users" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaUser className="mr-2" /> User Management
              </Link>
              <Link to="/superadmin" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaUserShield className="mr-2" /> Super Admin
              </Link>
              <Link to="/admin" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaUserShield className="mr-2" /> Admin
              </Link>
              <Link to="/teacher" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaChalkboardTeacher className="mr-2" /> Teacher
              </Link>
              <Link to="/student" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaUserGraduate className="mr-2" /> Student
              </Link>
              <Link to="/parents" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaUserFriends className="mr-2" /> Parent
              </Link>
            </div>
          )}
        </div>
        <Link to="/logout" className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 focus:outline-none">
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
