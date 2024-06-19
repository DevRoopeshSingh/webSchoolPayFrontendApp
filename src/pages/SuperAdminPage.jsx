import React, { useState } from 'react';
import { BsPeople, BsFillPersonLinesFill, BsHouseDoor, BsGearWideConnected } from 'react-icons/bs';
import DashboardOverview from '../components/DashboardOverview';
import UserList from '../components/UserList';
import RoleList from '../components/RoleList';
import SchoolList from '../components/SchoolList';
import Settings from '../components/Settings';

const SuperAdminPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      isActive: true,
    },
    // Add more dummy users as needed
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    // Add more dummy roles as needed
  ]);

  const [schools, setSchools] = useState([
    { id: 1, name: 'School A', location: 'City A' },
    { id: 2, name: 'School B', location: 'City B' },
    // Add more dummy schools as needed
  ]);

  const [settings, setSettings] = useState({ appName: 'School Management App', appLogo: '' });

  const [searchTermUsers, setSearchTermUsers] = useState('');
  const [searchTermRoles, setSearchTermRoles] = useState('');
  const [searchTermSchools, setSearchTermSchools] = useState('');
  const [searchTermSettings, setSearchTermSettings] = useState('');

  const [activeTab, setActiveTab] = useState('users'); // Initialize active tab state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchUsers = (e) => {
    setSearchTermUsers(e.target.value);
  };

  const handleSearchRoles = (e) => {
    setSearchTermRoles(e.target.value);
  };

  const handleSearchSchools = (e) => {
    setSearchTermSchools(e.target.value);
  };

  const handleSearchSettings = (e) => {
    setSearchTermSettings(e.target.value);
  };

  const handleAddUser = () => {
    // Logic to add user
  };

  const handleEditUser = (user) => {
    // Logic to edit user
  };

  const handleDeleteUser = (user) => {
    // Logic to delete user
  };

  const handleAddRole = () => {
    // Logic to add role
  };

  const handleEditRole = (role) => {
    // Logic to edit role
  };

  const handleDeleteRole = (role) => {
    // Logic to delete role
  };

  const handleAddSchool = () => {
    // Logic to add school
  };

  const handleEditSchool = (school) => {
    // Logic to edit school
  };

  const handleDeleteSchool = (school) => {
    // Logic to delete school
  };

  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  const stats = {
    totalUsers: users.length,
    totalSchools: schools.length,
    totalRoles: roles.length,
    activeUsers: users.filter(user => user.isActive).length,
  };

  const userProfile = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    joinDate: '2023-01-01',
    // Add more profile details as needed
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Super Admin Dashboard</h1>
      <DashboardOverview userProfile={userProfile} />
      <div className="grid grid-cols-1 gap-8 mt-8">
        <div className="flex gap-4 mb-8">
          {/* Manage Users */}
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'users' ? 'bg-gray-200' : ''}`}
            onClick={() => handleTabClick('users')}
          >
            <BsPeople className="text-4xl text-indigo-600 mr-2" />
            Manage Users
          </button>
          {/* Manage Roles */}
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'roles' ? 'bg-gray-200' : ''}`}
            onClick={() => handleTabClick('roles')}
          >
            <BsFillPersonLinesFill className="text-4xl text-yellow-600 mr-2" />
            Manage Roles
          </button>
          {/* Manage Schools */}
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'schools' ? 'bg-gray-200' : ''}`}
            onClick={() => handleTabClick('schools')}
          >
            <BsHouseDoor className="text-4xl text-green-600 mr-2" />
            Manage Schools
          </button>
          {/* Manage Settings */}
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'settings' ? 'bg-gray-200' : ''}`}
            onClick={() => handleTabClick('settings')}
          >
            <BsGearWideConnected className="text-4xl text-blue-600 mr-2" />
            Manage Settings
          </button>
        </div>
      </div>

      {/* Manage Users */}
      {activeTab === 'users' && (
        <div className="mb-8">
          <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BsPeople className="text-2xl text-indigo-600 mr-2" /> Manage Users
          </h2>
          <input
            type="text"
            value={searchTermUsers}
            onChange={handleSearchUsers}
            className="px-2 py-1 border border-gray-300 rounded-md mb-4"
            placeholder="Search users..."
          />
          </div>
          <UserList users={users.filter(user => user.name.toLowerCase().includes(searchTermUsers.toLowerCase()))} onEdit={handleEditUser} onDelete={handleDeleteUser} onAdd={handleAddUser} />
        </div>
      )}

      {/* Manage Roles */}
      {activeTab === 'roles' && (
        <div className="mb-8">
          <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BsFillPersonLinesFill className="text-2xl text-yellow-600 mr-2" /> Manage Roles
          </h2>
          <input
            type="text"
            value={searchTermRoles}
            onChange={handleSearchRoles}
            className="px-2 py-1 border border-gray-300 rounded-md mb-4"
            placeholder="Search roles..."
          />
           </div>
          <RoleList roles={roles.filter(role => role.name.toLowerCase().includes(searchTermRoles.toLowerCase()))} onEdit={handleEditRole} onDelete={handleDeleteRole} onAdd={handleAddRole} />
        </div>
      )}

      {/* Manage Schools */}
      {activeTab === 'schools' && (
        <div className="mb-8">
          <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BsHouseDoor className="text-2xl text-green-600 mr-2" /> Manage Schools
          </h2>
          <input
            type="text"
            value={searchTermSchools}
            onChange={handleSearchSchools}
            className="px-2 py-1 border border-gray-300 rounded-md mb-4"
            placeholder="Search schools..."
          />
          </div>
          <SchoolList schools={schools.filter(school => school.name.toLowerCase().includes(searchTermSchools.toLowerCase()))} onEdit={handleEditSchool} onDelete={handleDeleteSchool} onAdd={handleAddSchool} />
        </div>
      )}

      {/* Manage Settings */}
      {activeTab === 'settings' && (
        <div className="mb-8">
          <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BsGearWideConnected className="text-2xl text-blue-600 mr-2" /> Manage Settings
          </h2>
          <input
            type="text"
            value={searchTermSettings}
            onChange={handleSearchSettings}
            className="px-2 py-1 border border-gray-300 rounded-md mb-4"
            placeholder="Search settings..."
          />
          </div>
          <Settings initialSettings={settings} onSave={handleSaveSettings} />
        </div>
      )}

    </div>
  );
};

export default SuperAdminPage;
