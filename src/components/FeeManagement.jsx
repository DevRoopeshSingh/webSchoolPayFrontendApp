import React, { useState } from 'react';
import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs'; // Importing icons from React Icons

function FeeManagement() {
  const [studentId, setStudentId] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [pendingFees, setPendingFees] = useState([
    { id: 1, studentId: '123', amount: 500, dueDate: '2023-06-01' },
    { id: 2, studentId: '124', amount: 600, dueDate: '2023-07-01' },
  ]);

  const handleAddFee = (e) => {
    e.preventDefault();
    const newFee = {
      id: pendingFees.length + 1,
      studentId: studentId,
      amount: amount,
      dueDate: dueDate,
    };
    setPendingFees([...pendingFees, newFee]);
    // Clear input fields after adding fee
    setStudentId('');
    setAmount('');
    setDueDate('');
  };

  const handleDeleteFee = (id) => {
    const updatedFees = pendingFees.filter((fee) => fee.id !== id);
    setPendingFees(updatedFees);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center">
        <BsFillPlusSquareFill className="text-3xl text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold">Fee Management</h2>
      </div>

      <div className="mb-4">
        <form onSubmit={handleAddFee} className="mb-4">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Student ID"
              className="border p-2 flex-1"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              className="border p-2 flex-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <input
              type="date"
              className="border p-2 flex-1"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
              Add Fee
            </button>
          </div>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Pending Fees</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingFees.map((fee) => (
                <tr key={fee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.studentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹ {fee.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDeleteFee(fee.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <BsFillTrashFill className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FeeManagement;
