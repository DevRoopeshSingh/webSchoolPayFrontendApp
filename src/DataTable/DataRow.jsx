import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const DataRow = ({ item, columns, onEdit }) => {
  return (
    <tr className="hover:bg-blue-100 cursor-pointer transition duration-300 ease-in-out">
      {columns.map((column, index) => (
        <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {column.field === 'status' ? (
            item[column.field] === 'active' ? (
              <FaCheckCircle className="text-green-500" title="Active" aria-label="Active" />
            ) : (
              <FaTimesCircle className="text-red-500" title="Inactive" aria-label="Inactive" />
            )
          ) : (
            item[column.field]
          )}
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEdit(item)}
          className="text-green-600 hover:text-green-900 focus:outline-none"
          aria-label={`Edit ${item.name}`}
          title="Edit"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default DataRow;
