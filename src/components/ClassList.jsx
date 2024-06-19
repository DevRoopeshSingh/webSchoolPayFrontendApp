import React from 'react';

const ClassList = ({ classes }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td className="py-3 px-4 whitespace-nowrap">{cls.id}</td>
              <td className="py-3 px-4 whitespace-nowrap">{cls.name}</td>
              <td className="py-3 px-4 whitespace-nowrap">{cls.grade}</td>
              <td className="py-3 px-4 whitespace-nowrap">{cls.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
