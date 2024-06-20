import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUserFriends, FaSignOutAlt, FaChevronDown, FaEdit } from 'react-icons/fa';

function Navbar({ loggedInUser }) {
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(loggedInUser?.role || "Roles"); // Initialize with loggedInUser role

  const rolesDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        rolesDropdownRef.current && !rolesDropdownRef.current.contains(event.target) &&
        profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)
      ) {
        setRolesDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleRolesDropdown = () => {
    setRolesDropdownOpen(!rolesDropdownOpen);
    setProfileDropdownOpen(false); // Close profile dropdown when roles dropdown opens
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setRolesDropdownOpen(false); // Close roles dropdown when profile dropdown opens
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setRolesDropdownOpen(false); // Close dropdown after selecting role
  };

  const avatarColor = "#3182CE"; // Example avatar color
  const initials = loggedInUser ? loggedInUser.name.split(" ").map((name) => name[0]).join("") : ""; // Example initials logic

  return (
    <div className="flex items-center justify-between h-16 px-4 bg-blue-500">
      <Link to="/" className="text-white text-lg font-bold">School Pay App</Link>
      <div className="flex items-center text-white">
        <div className="relative ml-4" ref={rolesDropdownRef}>
          <button
            onClick={toggleRolesDropdown}
            className="flex items-center hover:text-gray-300 focus:outline-none"
          >
            <span>{selectedRole}</span> {/* Display selected role */}
            <FaChevronDown className="ml-2" />
          </button>
          {rolesDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <Link
                to="/users"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "User Management" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("User Management")}
              >
                <FaUser className="mr-2" /> User Management
              </Link>
              <Link
                to="/superadmin"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "Super Admin" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("Super Admin")}
              >
                <FaUserShield className="mr-2" /> Super Admin
              </Link>
              <Link
                to="/admin"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "Admin" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("Admin")}
              >
                <FaUserShield className="mr-2" /> Admin
              </Link>
              <Link
                to="/teacher"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "Teacher" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("Teacher")}
              >
                <FaChalkboardTeacher className="mr-2" /> Teacher
              </Link>
              <Link
                to="/student"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "Student" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("Student")}
              >
                <FaUserGraduate className="mr-2" /> Student
              </Link>
              <Link
                to="/parents"
                className={`px-4 py-2 hover:bg-gray-200 flex items-center ${selectedRole === "Parent" ? "font-bold" : ""}`}
                onClick={() => handleRoleSelect("Parent")}
              >
                <FaUserFriends className="mr-2" /> Parent
              </Link>
            </div>
          )}
        </div>
        <div className="relative ml-4" ref={profileDropdownRef}>
          <button
            onClick={toggleProfileDropdown}
            className="flex items-center hover:text-gray-300 focus:outline-none"
          >
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: avatarColor }}
            >
              <span className="text-white font-bold text-lg">{initials}</span>
            </div>
            <FaChevronDown className="ml-2" />
          </button>
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <Link to="/edit-profile" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaEdit className="mr-2" /> Edit Profile
              </Link>
              <Link to="/logout" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                <FaSignOutAlt className="mr-2" /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
