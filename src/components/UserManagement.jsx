import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import DataTable from '../DataTable/DataTable';

const UserManagement = () => {
  const history = useHistory();
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

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter people based on search term
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to navigate to the new user form
  const handleAddUser = () => {
    history.push('/add-user');
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
          onClick={handleAddUser}
        >
          <FaPlus className="mr-2" /> Add User
        </button>
      </div>
      <DataTable people={filteredPeople} />
    </div>
  );
};

export default UserManagement;
