import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import DataTable from '../DataTable/DataTable';
import UserForm from './UserFormComponent';


const UserManagement = () => {
  const initialPeople = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image: 'https://bit.ly/33HnjK0',
    },
    {
      name: 'John Doe',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Tester',
      email: 'john.doe@example.com',
      image: 'https://bit.ly/3I9nL2D',
    },
    {
      name: 'Veronica Lodge',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Software Engineer',
      email: 'veronica.lodge@example.com',
      image: 'https://bit.ly/3vaOTe1',
    },
    // More people...
  ];

  const [people, setPeople] = useState(initialPeople);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter people based on search term
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle form save
  const handleSaveUser = (newUser) => {
    setPeople([...people, newUser]);
    setIsFormOpen(false);
  };

  // Function to handle form cancel
  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 font-semibold">Search:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-2 py-1 border border-gray-300 rounded-md"
            placeholder="Search by name..."
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => setIsFormOpen(true)}
        >
          <FaPlus className="mr-2" /> Add User
        </button>
      </div>
      <DataTable people={filteredPeople} />
      {isFormOpen && <UserForm onSave={handleSaveUser} onCancel={handleCancel} />}
    </div>
  );
};

export default UserManagement;
