import React, { useState } from 'react';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs';
import DashboardOverview from '../components/DashboardOverview';
import ClassList from '../components/ClassList';
import StudentList from '../components/StudentList';
import AttendanceTracking from '../components/AttendanceTracking';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('classes');
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

  const stats = {
    totalClasses: classes.length,
    totalStudents: students.length,
    classesTaught: 2,
    upcomingEvents: 3,
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Teacher Dashboard</h1>
      <DashboardOverview stats={stats} />

      <div className="grid grid-cols-1 gap-8 mt-8">
        <div className="flex gap-4 mb-8">
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'classes' ? 'bg-gray-200 border-b-4 border-green-600' : ''}`}
            onClick={() => handleTabClick('classes')}
          >
            <BsPeopleFill className="text-4xl text-green-600 mr-2" />
            Manage Classes
          </button>
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'students' ? 'bg-gray-200 border-b-4 border-indigo-600' : ''}`}
            onClick={() => handleTabClick('students')}
          >
            <BsFillPersonFill className="text-4xl text-indigo-600 mr-2" />
            Manage Students
          </button>
          <button
            className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'attendance' ? 'bg-gray-200 border-b-4 border-yellow-600' : ''}`}
            onClick={() => handleTabClick('attendance')}
          >
            Attendance Tracking
          </button>
        </div>
      </div>

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
