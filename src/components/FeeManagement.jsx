
function FeeManagement() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Fee Management</h2>
      <div className="mb-4">
        <input type="text" placeholder="Student ID" className="border p-2 w-full mb-2" />
        <input type="number" placeholder="Amount" className="border p-2 w-full mb-2" />
        <input type="date" className="border p-2 w-full mb-2" />
        <button className="bg-blue-500 text-white p-2 w-full">Add Fee</button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Pending Fees</h3>
        <ul>
          <li className="border p-2 mb-2">Student ID: 123 - Amount: $500 - Due: 2023-06-01</li>
          <li className="border p-2 mb-2">Student ID: 124 - Amount: $600 - Due: 2023-07-01</li>
        </ul>
      </div>
    </div>
  );
}

export default FeeManagement;
