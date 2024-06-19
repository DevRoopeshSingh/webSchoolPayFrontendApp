import React, { useState, useEffect } from 'react';
import { BsPeople, BsFileEarmarkText, BsPlusCircle } from 'react-icons/bs';
import DashboardOverview from '../components/DashboardOverview';
import UserList from '../components/UserList';
import FeeManagement from '../components/FeeManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('manageUsers');
  const [searchTermUsers, setSearchTermUsers] = useState('');
  const [searchTermFees, setSearchTermFees] = useState('');

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

  const [fees, setFees] = useState([
    { id: 1, name: 'Tuition Fee', amount: 500 },
    { id: 2, name: 'Library Fee', amount: 100 },
    // Add more dummy fees as needed
  ]);

  const handleAddUser = () => {
    // Logic to add user for the school
  };

  const handleEditUser = (user) => {
    // Logic to edit user for the school
  };

  const handleDeleteUser = (user) => {
    // Logic to delete user for the school
  };

  const handleAddFee = () => {
    // Logic to add fee structure for the school
  };

  const handleEditFee = (fee) => {
    // Logic to edit fee structure for the school
  };

  const handleDeleteFee = (fee) => {
    // Logic to delete fee structure for the school
  };

  const handleSearchUsers = (event) => {
    setSearchTermUsers(event.target.value);
  };

  const handleSearchFees = (event) => {
    setSearchTermFees(event.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTermUsers.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTermUsers.toLowerCase())
  );

  const filteredFees = fees.filter(fee => 
    fee.name.toLowerCase().includes(searchTermFees.toLowerCase())
  );

  const stats = {
    totalUsers: users.length,
    totalFees: fees.length,
    activeUsers: users.filter(user => user.isActive).length,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <DashboardOverview stats={stats} />

      <div className="flex space-x-4 mb-8 mt-8">
        <button 
          onClick={() => setActiveTab('manageUsers')} 
          className={`flex items-center px-4 py-2 rounded ${activeTab === 'manageUsers' ? 'bg-gray-200 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
        >
          <BsPeople className="text-3xl mr-2" />
          Manage Users
        </button>
        <button 
          onClick={() => setActiveTab('manageFees')} 
          className={`flex items-center px-4 py-2 rounded ${activeTab === 'manageFees' ? 'bg-gray-200 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}
        >
          <BsFileEarmarkText className="text-3xl mr-2" />
          Manage Fees
        </button>
      </div>

      {activeTab === 'manageUsers' && (
        <div className="mb-8">
          <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BsPeople className="text-3xl text-indigo-600 mr-2" /> Manage Users
            </h2>
            <div className='flex items-center space-x-4'>
              <input
                type="text"
                value={searchTermUsers}
                onChange={handleSearchUsers}
                className="px-2 py-1 border border-gray-300 rounded-md mb-1"
                placeholder="Search users..."
              />
              <button onClick={handleAddUser} className="px-4 py-2 bg-green-500 text-white rounded flex items-center">
                <BsPlusCircle className="mr-2" /> Add User
              </button>
            </div>
          </div>
          <UserList users={filteredUsers} onEdit={handleEditUser} onDelete={handleDeleteUser} />
        </div>
      )}

      {activeTab === 'manageFees' && (
        <div className="mb-8">
          <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BsFileEarmarkText className="text-3xl text-yellow-600 mr-2" /> Manage Fees
            </h2>
            <div className='flex items-center space-x-4'>
              <input
                type="text"
                value={searchTermFees}
                onChange={handleSearchFees}
                className="px-4 py-1 border border-gray-300 rounded-md mb-1"
                placeholder="Search fees..."
              />
              <button onClick={handleAddFee} className="px-4 py-2 bg-green-500 text-white rounded flex items-center">
                <BsPlusCircle className="mr-2" /> Add Fee Structure
              </button>
            </div>
          </div>
          <FeeManagement fees={filteredFees} onEdit={handleEditFee} onDelete={handleDeleteFee} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
