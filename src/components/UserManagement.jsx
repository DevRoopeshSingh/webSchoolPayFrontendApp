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
      status: 'active',
      email: 'jane.cooper@example.com',
      image: 'https://bit.ly/33HnjK0',
    },
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      status:'active',
      email: 'jane.cooper@example.com',
      image: 'https://bit.ly/33HnjK0',
    },
    {
      name: 'John Doe',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Tester',
      status:'active',
      email: 'john.doe@example.com',
      image: 'https://bit.ly/3I9nL2D',
    },
    {
      name: 'Veronica Lodge',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Software Engineer',
      status:'active',
      email: 'veronica.lodge@example.com',
      image: 'https://bit.ly/3vaOTe1',
    },
    {
      name: 'Ronny Dillon',
      title: 'Paradigm Technician',
      department: 'Optimization',
      role: 'Teacher',
      status:'deactive',
      email: 'veronica.lodge@example.com',
      image: 'https://bit.ly/3vaOTe1',
    },{
      "name": "Ronny Dillon",
      "title": "Paradigm Technician",
      "department": "Optimization",
      "role": "Teacher",
      "status": "active",
      "email": "veronica.lodge@example.com",
      "image": "https://bit.ly/3vaOTe1"
  },
  {
      "name": "Neha Sharma",
      "title": "Data Analyst",
      "department": "Analytics",
      "role": "Analyst",
      "status": "deactive",
      "email": "neha.sharma@example.com",
      "image": "https://bit.ly/3dzB82Z"
  },
  {
      "name": "Raj Singh",
      "title": "Software Engineer",
      "department": "Engineering",
      "role": "Developer",
      "status": "active",
      "email": "raj.singh@example.com",
      "image": "https://bit.ly/3fQNJQm"
  },
  {
    "name": "Rahul Sharma",
    "title": "Software Engineer",
    "department": "Development",
    "role": "Developer",
    "status": "deactive",
    "email": "rahul.sharma@example.com",
    "image": "https://bit.ly/3vaOTe1"
},
{
  "name": "Priya Patel",
  "title": "Data Analyst",
  "department": "Analytics",
  "role": "Analyst",
  "status": "active",
  "email": "priya.patel@example.com",
  "image": "https://bit.ly/3vaOTe1"
},{
      "name": "Ronny Dillon",
      "title": "Paradigm Technician",
      "department": "Optimization",
      "role": "Teacher",
      "status": "active",
      "email": "veronica.lodge@example.com",
      "image": "https://bit.ly/3vaOTe1"
  },
  {
      "name": "Neha Sharma",
      "title": "Data Analyst",
      "department": "Analytics",
      "role": "Analyst",
      "status": "deactive",
      "email": "neha.sharma@example.com",
      "image": "https://bit.ly/3dzB82Z"
  },
  {
      "name": "Raj Singh",
      "title": "Software Engineer",
      "department": "Engineering",
      "role": "Developer",
      "status": "active",
      "email": "raj.singh@example.com",
      "image": "https://bit.ly/3fQNJQm"
  },
  {
    "name": "Rahul Sharma",
    "title": "Software Engineer",
    "department": "Development",
    "role": "Developer",
    "status": "deactive",
    "email": "rahul.sharma@example.com",
    "image": "https://bit.ly/3vaOTe1"
},
{
  "name": "Priya Patel",
  "title": "Data Analyst",
  "department": "Analytics",
  "role": "Analyst",
  "status": "active",
  "email": "priya.patel@example.com",
  "image": "https://bit.ly/3vaOTe1"
}

  ];

  const [people, setPeople] = useState(initialPeople);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Function to filter people based on search term
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPeople = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);

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
      <DataTable people={currentPeople} />
      {isFormOpen && <UserForm onSave={handleSaveUser} onCancel={handleCancel} />}
      
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-1 bg-gray-300 rounded-md"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-3 py-1">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-3 py-1 mx-1 bg-gray-300 rounded-md"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
