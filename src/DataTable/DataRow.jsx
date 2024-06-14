import React from 'react';

const DataRow = ({ person, onEdit }) => {
  return (
    <tr className="hover:bg-blue-100 cursor-pointer">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.status}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEdit(person)}
          className="text-green-600 hover:text-green-900 focus:outline-none"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default DataRow;
