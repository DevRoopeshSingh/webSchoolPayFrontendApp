import React from 'react';

const FeeDetails = () => {
  // Sample fee details (can be fetched from API)
  const feeDetails = {
    tuitionFee: 1500,
    libraryFee: 100,
    transportationFee: 200,
    totalFees: 1800,
    paymentStatus: 'Paid', // Can be 'Paid' or 'Unpaid'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Fee Details</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Tuition Fee:</span> ${feeDetails.tuitionFee}</p>
        <p><span className="font-semibold">Library Fee:</span> ${feeDetails.libraryFee}</p>
        <p><span className="font-semibold">Transportation Fee:</span> ${feeDetails.transportationFee}</p>
        <p><span className="font-semibold">Total Fees:</span> ${feeDetails.totalFees}</p>
        <p><span className="font-semibold">Payment Status:</span> {feeDetails.paymentStatus}</p>
      </div>
    </div>
  );
};

export default FeeDetails;
