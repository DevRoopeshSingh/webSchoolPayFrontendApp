import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Statistics Cards */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-medium">Total Schools</h3>
          <p className="text-2xl">56</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-medium">Recent Activities</h3>
          <ul className="text-sm">
            <li>User John Doe added</li>
            <li>School ABC updated</li>
            <li>User Jane Smith deleted</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
