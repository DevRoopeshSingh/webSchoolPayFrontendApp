import React, { useState } from 'react';
import EditForm from './EditForm';
import DataRow from './DataRow';

const DataTable = ({ data, columns }) => {
  const [editFormData, setEditFormData] = useState(null);

  const handleEdit = (rowData) => {
    setEditFormData({ ...rowData });
  };

  const handleSave = (formData) => {
    // Handle saving the edited data (e.g., call an API or update state)
    console.log('Saving edited data:', formData);
    // Close the form after saving
    setEditFormData(null);
  };

  const handleCancel = () => {
    // Close the form without saving
    setEditFormData(null);
  };

  return (
    <div className="flex flex-col">
      {/* DataTable */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-extrabold uppercase tracking-wider">
                      {column.header}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                      <DataRow key={index} item={item} columns={columns} onEdit={handleEdit} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      {editFormData && (
        <EditForm formData={editFormData} onSave={handleSave} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default DataTable;
