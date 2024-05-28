
function AttendanceTracking() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
      <div className="mb-4">
        <input type="text" placeholder="Student ID" className="border p-2 w-full mb-2" />
        <select className="border p-2 w-full mb-2">
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
        <button className="bg-blue-500 text-white p-2 w-full">Record Attendance</button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Attendance Records</h3>
        <ul>
          <li className="border p-2 mb-2">Student ID: 123 - Date: 2023-06-01 - Status: Present</li>
          <li className="border p-2 mb-2">Student ID: 124 - Date: 2023-06-01 - Status: Absent</li>
        </ul>
      </div>
    </div>
  );
}

export default AttendanceTracking;
