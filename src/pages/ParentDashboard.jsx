import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs'; // Import icons from React Icons
import DashboardOverview from '../components/DashboardOverview';
import ChildInformation from '../components/ChildInformation';
import ChildFeeDetails from '../components/ChildFeeDetails';
import PaymentForm from '../components/PaymentFormPage';

const ParentDashboard = () => {
  // Sample state data (can be fetched from API)
  const [activeTab, setActiveTab] = useState('childInformation'); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Parents' Dashboard</h1>
      <DashboardOverview />

      {/* Tabs */}
      <div className="flex gap-4 mt-8 mb-4">
        <button
          onClick={() => handleTabClick('childInformation')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'childInformation' ? 'bg-gray-200' : ''}`}
        >
          <BsFillPersonFill className="text-2xl text-green-600 mr-2" />
          View Child's Information
        </button>
        <button
          onClick={() => handleTabClick('childFeeDetails')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'childFeeDetails' ? 'bg-gray-200' : ''}`}
        >
          View Child's Fee Details
        </button>
        <button
          onClick={() => handleTabClick('makePayment')}
          className={`flex items-center bg-white shadow-md rounded-lg p-4 ${activeTab === 'makePayment' ? 'bg-gray-200' : ''}`}
        >
          Make Payments
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'childInformation' && (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BsFillPersonFill className="text-2xl text-green-600 mr-2" /> View Child's Information
            </h2>
            <ChildInformation />
          </div>
        )}

        {activeTab === 'childFeeDetails' && (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              View Child's Fee Details
            </h2>
            <ChildFeeDetails />
          </div>
        )}

        {activeTab === 'makePayment' && (
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Make Payment</h2>
            <PaymentForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
