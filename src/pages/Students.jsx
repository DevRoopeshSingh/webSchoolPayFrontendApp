import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import DataTable from '../DataTable/DataTable';
import StudentForm from './StudentForm';

// Mock data for students
const mockStudentData = [
  { id: 1, name: 'John Doe', class: '10', section: 'A', rollNo: 5 },
  { id: 2, name: 'Jane Smith', class: '9', section: 'B', rollNo: 12 },
  { id: 3, name: 'Samuel Green', class: '11', section: 'C', rollNo: 8 },
  { id: 4, name: 'Emily White', class: '10', section: 'A', rollNo: 20 },
  { id: 5, name: 'Michael Brown', class: '12', section: 'D', rollNo: 15 },
  // Add more mock data as needed
];

const Students = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState(mockStudentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [editFormData, setEditFormData] = useState(null);

  const columns = [
    { header: 'Name', field: 'name' },
    { header: 'Class', field: 'class' },
    { header: 'Section', field: 'section' },
    { header: 'Roll No', field: 'rollNo' },
    { header: 'Action', field: 'action' } 
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setStudents(mockStudentData);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchData();
  }, []);

  const handleView = (id) => {
    console.log('View student with ID:', id);
    navigate(`/students/view/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleSaveStudent = (student) => {
    if (editFormData) {
      const updatedStudents = students.map(s =>
        s.id === editFormData.id ? { ...s, ...student } : s
      );
      setStudents(updatedStudents);
    } else {
      setStudents([...students, student]);
    }
    setIsFormOpen(false);
    setEditFormData(null);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditFormData(null);
  };

  const handleEdit = (student) => {
    setEditFormData({ ...student });
    setIsFormOpen(true);
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
          onClick={() => {
            setIsFormOpen(true);
            setEditFormData(null);
          }}
        >
          <FaPlus className="mr-2" /> Add Student
        </button>
      </div>
      <DataTable data={currentStudents} columns={columns} onEdit={handleEdit} />
      {isFormOpen && (
        <StudentForm
          formData={editFormData}
          onSave={handleSaveStudent}
          onCancel={handleCancel}
        />
      )}
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

export default Students;
