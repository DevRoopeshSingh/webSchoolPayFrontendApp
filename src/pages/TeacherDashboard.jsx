import React, { useState } from 'react';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs'; // Import icons from React Icons
import DashboardOverview from '../components/DashboardOverview';
import ClassList from '../components/ClassList';
import StudentList from '../components/StudentList';
import AttendanceTracking from '../components/AttendanceTracking';

const TeacherDashboard = () => {
  // Sample state data (can be fetched from API)
  const [activeTab, setActiveTab] = useState('classes'); // State to track active tab

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

  // Dummy stats for DashboardOverview component
  const stats = {
    totalClasses: classes.length,
    totalStudents: students.length,
    classesTaught: 2, // Dummy data for demonstration
    upcomingEvents: 3, // Dummy data for demonstration
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <DashboardOverview stats={stats} />

      {/* Tabs */}
      <div className="flex gap-4 mt-8 mb-4">
        <button
          onClick={() => handleTabClick('classes')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'classes' ? 'bg-gray-200' : ''}`}
        >
          <BsPeopleFill className="text-2xl text-green-600 mr-2" />
          Manage Classes
        </button>
        <button
          onClick={() => handleTabClick('students')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'students' ? 'bg-gray-200' : ''}`}
        >
          <BsFillPersonFill className="text-2xl text-indigo-600 mr-2" />
          Manage Students
        </button>
        <button
          onClick={() => handleTabClick('attendance')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'attendance' ? 'bg-gray-200' : ''}`}
        >
          Attendance Tracking
        </button>
      </div>

      {/* Tab Content */}
      <div>
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
            <AttendanceTracking students={students} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
