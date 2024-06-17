import React from 'react';
import PropTypes from 'prop-types';

const SchoolList = ({ schools, onEdit, onDelete, onAdd }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">School Management</h2>
      {/* Example list structure, replace with actual school list rendering */}
      <ul className="divide-y divide-gray-200">
        {schools.map((school) => (
          <li key={school.id} className="py-2 flex justify-between items-center">
            <div className="flex-1 truncate">
              <div className="font-medium text-gray-900">{school.name}</div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <button onClick={() => onEdit(school)} className="text-green-600 hover:text-green-900 focus:outline-none">
                Edit
              </button>
              <button onClick={() => onDelete(school)} className="ml-2 text-red-600 hover:text-red-900 focus:outline-none">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={onAdd} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Add School
      </button>
    </div>
  );
};

SchoolList.propTypes = {
  schools: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default SchoolList;
