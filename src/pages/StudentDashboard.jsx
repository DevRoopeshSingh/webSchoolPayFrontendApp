import React from 'react';

const Students = () => {
  const studentStats = {
    totalStudents: 500,
    activeStudents: 450,
    inactiveStudents: 50,
  };

  const recentActivities = [
    { id: 1, activity: 'John Doe enrolled in Mathematics' },
    { id: 2, activity: 'Jane Smith completed Physics assignment' },
    { id: 3, activity: 'Mike Johnson updated profile' },
  ];

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="text-3xl font-bold flex justify-center mb-8">Students Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Student Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Student Statistics</h2>
          <div className="space-y-2">
            <p>Total Students: <span className="font-semibold">{studentStats.totalStudents}</span></p>
            <p>Active Students: <span className="font-semibold">{studentStats.activeStudents}</span></p>
            <p>Inactive Students: <span className="font-semibold">{studentStats.inactiveStudents}</span></p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            {recentActivities.map(activity => (
              <li key={activity.id} className="border-b pb-2">{activity.activity}</li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add New Student
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              View All Students
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Manage Student Groups
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700">
          Here you can add more sections or components to provide detailed information, charts, or other interactive elements relevant to the student dashboard.
        </p>
      </div>
    </div>
  );
};

export default Students;
