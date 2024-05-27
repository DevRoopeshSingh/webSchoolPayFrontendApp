

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-600">Welcome back, Admin!</p>
        </div>
        
        {/* Summary of Student Data */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Data Summary</h3>
          {/* Charts for Student Demographics and Fee Payments */}
          {/* Placeholder for charts */}
          <div className="flex justify-center">
            <div className="w-1/2 h-64 bg-gray-200 rounded-md"></div>
            <div className="w-1/2 h-64 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

