import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-3 px-4 whitespace-nowrap">{student.id}</td>
              <td className="py-3 px-4 whitespace-nowrap">{student.name}</td>
              <td className="py-3 px-4 whitespace-nowrap">{student.class}</td>
              <td className="py-3 px-4 whitespace-nowrap">{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
