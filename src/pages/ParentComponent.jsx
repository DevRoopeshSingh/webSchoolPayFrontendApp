import React from 'react';
import DynamicGridComponent from '../DataTable/DynamicGridComponent';

const ParentComponent = () => {
  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true }
  ];

  const rowData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Sam Brown', age: 40 }
  ];

  return (
    <div>
      <DynamicGridComponent columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default ParentComponent;
