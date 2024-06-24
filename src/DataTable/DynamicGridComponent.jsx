import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

const DynamicGridComponent = ({ columnDefs, rowData }) => {
  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      {/* <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
      /> */}
    </div>
  );
};

export default DynamicGridComponent;
