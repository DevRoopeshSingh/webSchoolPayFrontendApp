import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const DataRow = ({ person, onEdit }) => {
  return (
    <tr className="hover:bg-blue-100 cursor-pointer transition duration-300 ease-in-out">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.title}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex ">
      {person.status === 'active' ? (
        <FaCheckCircle className="text-green-500" title="Active" aria-label="Active" />
      ) : (
        <FaTimesCircle className="text-red-500" title="Inactive" aria-label="Inactive" />
      )}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.role}</td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button
        onClick={() => onEdit(person)}
        className="text-green-600 hover:text-green-900 focus:outline-none"
        aria-label={`Edit ${person.name}`}
        title="Edit"
      >
        Edit
      </button>
    </td>
  </tr>
  );
};

export default DataRow;
