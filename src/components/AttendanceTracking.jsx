import React, { useState, useEffect } from 'react';

const AttendanceTracking = ({ students }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Dummy function to handle attendance recording
  const handleRecordAttendance = () => {
    if (selectedStudent && selectedStatus) {
      const newRecord = {
        studentId: selectedStudent,
        date: new Date().toISOString().slice(0, 10),
        status: selectedStatus,
      };
      setAttendanceRecords([...attendanceRecords, newRecord]);
    }
  };

  useEffect(() => {
    // Simulating fetching existing attendance records (can be fetched from API)
    const dummyRecords = [
      { studentId: 1, date: '2023-06-01', status: 'Present' },
      { studentId: 2, date: '2023-06-01', status: 'Absent' },
    ];

    // Simulate loading delay
    setTimeout(() => {
      setAttendanceRecords(dummyRecords);
      setLoading(false);
    }, 1000); // Adjust delay as needed
  }, []);

  // Ensure students data is loaded before rendering
  if (loading || !students || students.length === 0) {
    console.log('Loading or students data not ready:', loading, students);
    return <p>Loading...</p>;
  }

  console.log('Attendance Records:', attendanceRecords);
  console.log('Students:', students);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <select
            className="border p-2 flex-grow mr-2"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Select Student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>{student.name} - {student.class}</option>
            ))}
          </select>
          <select
            className="border p-2 flex-grow mr-2"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleRecordAttendance}
          >
            Record Attendance
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Attendance Records</h3>
        <table className="border-collapse border w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Student Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => {
              const student = students.find(student => student.id === record.studentId);
              if (!student) return null;
              return (
                <tr key={index} className="bg-white">
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.class}</td>
                  <td className="border p-2">{record.date}</td>
                  <td className="border p-2">{record.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTracking;
