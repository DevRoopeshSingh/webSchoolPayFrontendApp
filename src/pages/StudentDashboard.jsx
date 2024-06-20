import React, { useState } from 'react';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs'; 
import DashboardOverview from '../components/DashboardOverview';
import ClassList from '../components/ClassList';
import StudentList from '../components/StudentList';
import AttendanceTracking from '../components/AttendanceTracking';
import PersonalInformation from '../components/PersonalInformation';
import FeeDetails from '../components/FeeDetails';
import PaymentForm from '../components/PaymentFormPage';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const [classes, setClasses] = useState([
    { id: 1, name: 'Class A', grade: '5', teacher: 'Mr. Smith' },
    { id: 2, name: 'Class B', grade: '6', teacher: 'Ms. Johnson' },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 12, class: 'Class A' },
    { id: 2, name: 'Jane Smith', age: 11, class: 'Class B' },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Student Dashboard</h1>
      
      <DashboardOverview stats={{ totalClasses: classes.length, totalStudents: students.length }} />

      <div className="grid grid-cols-1 gap-8 mt-8 mb-4">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => handleTabClick('overview')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'overview' ? 'bg-gray-200 border-b-4 border-blue-600' : ''}`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabClick('classes')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'classes' ? 'bg-gray-200 border-b-4 border-green-600' : ''}`}
          >
            <BsPeopleFill className="text-4xl text-green-600 mr-2" />
            Manage Classes
          </button>
          <button
            onClick={() => handleTabClick('students')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'students' ? 'bg-gray-200 border-b-4 border-indigo-600' : ''}`}
          >
            <BsFillPersonFill className="text-4xl text-indigo-600 mr-2" />
            Manage Students
          </button>
          <button
            onClick={() => handleTabClick('attendance')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'attendance' ? 'bg-gray-200 border-b-4 border-yellow-600' : ''}`}
          >
            Attendance Tracking
          </button>
          <button
            onClick={() => handleTabClick('personalInfo')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'personalInfo' ? 'bg-gray-200 border-b-4 border-purple-600' : ''}`}
          >
            View Personal Information
          </button>
          <button
            onClick={() => handleTabClick('feeDetails')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'feeDetails' ? 'bg-gray-200 border-b-4 border-teal-600' : ''}`}
          >
            View Fee Details
          </button>
          <button
            onClick={() => handleTabClick('makePayment')}
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'makePayment' ? 'bg-gray-200 border-b-4 border-red-600' : ''}`}
          >
            Make Payments
          </button>
        </div>
      </div>

      <div>
        {activeTab === 'overview' && (
          <div>
            <p>Student Dashboard Overview</p>
          </div>
        )}

        {activeTab === 'classes' && (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BsPeopleFill className="text-2xl text-green-600 mr-2" /> Manage Classes
            </h2>
            <ClassList classes={classes} />
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BsFillPersonFill className="text-2xl text-indigo-600 mr-2" /> Manage Students
            </h2>
            <StudentList students={students} />
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Attendance Tracking</h2>
            <AttendanceTracking />
          </div>
        )}

        {activeTab === 'personalInfo' && (
          <div>
            <h2 className="text-xl font-bold mb-4">View Personal Information</h2>
            <PersonalInformation />
          </div>
        )}

        {activeTab === 'feeDetails' && (
          <div>
            <h2 className="text-xl font-bold mb-4">View Fee Details</h2>
            <FeeDetails />
          </div>
        )}

        {activeTab === 'makePayment' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Make Payments</h2>
            <PaymentForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
