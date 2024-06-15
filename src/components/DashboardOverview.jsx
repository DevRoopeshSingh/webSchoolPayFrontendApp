import React from 'react';

const DashboardOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Total Users</h2>
        <p className="text-2xl">{stats.totalUsers}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Total Schools</h2>
        <p className="text-2xl">{stats.totalSchools}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Total Roles</h2>
        <p className="text-2xl">{stats.totalRoles}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Active Users</h2>
        <p className="text-2xl">{stats.activeUsers}</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
