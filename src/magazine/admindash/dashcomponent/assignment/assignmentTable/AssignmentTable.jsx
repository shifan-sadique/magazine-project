import './assignmentTable.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


const AssignmentTable = () => {
  const [searchText, setSearchText] = useState(''); // add searchText state and setSearchText function to update it

  const handleSearch = (event) => {
    setSearchText(event.target.value); // update searchText state with the value entered in the search box
  };

    const columns=[
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'assignedto', headerName: 'Assigned To', width: 150 },
        { field: 'category', headerName: 'Category', width: 100 },
        {
            field: 'description',
            headerName: 'Description',
            width: 450,
            renderCell: (params) => {
              return (
                <div
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    maxHeight: '150px',
                    overflowY: 'auto',
                  }}
                >
                  {params.value}
                </div>
              );
            },
          },
        //   In this example, params.value represents the value of the 'Description' field for the current row. The whiteSpace: 'pre-wrap' CSS property preserves white spaces and allows line breaks, while wordWrap: 'break-word' allows long words to be broken into multiple lines. The maxHeight property limits the height of the cell to a maximum of 150 pixels, and the overflowY: 'auto' property enables vertical scrolling if the content exceeds the maximum height.
              
        { field: 'startdate', headerName: 'Start Date', width: 80 },
        { field: 'enddate', headerName: 'End Date', width: 80 },
    ]
    const rows=[
        {
          id:123,
          title:"chatgpt",
          assignedto:"shifan",
          category:"proof read",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores ab consequuntur harum consectetur voluptatum possimus porro, pariatur hic tenetur vero expedita sint iusto necessitatibus odit sunt officiis saepe sapiente?",
          startdate:"04-21-23" ,
          enddate:"04-02-23"
        },  
        {
            id:124,
            title:"Beauty and the beast",
            assignedto:"blahh",
            category:"edit",
            description: "Lorem ipsum consequuntur harum consectetur voluptatum possimus porro, pariatur hic tenetur vero expedita sint iusto necessitatibus odit sunt officiis saepe sapiente?",
            startdate:"05-22-23" ,
            enddate:"04-05-23"
          },
      ]

      const filteredRows = rows.filter(
        (row) =>
          row.assignedto.toLowerCase().includes(searchText.toLowerCase()) 
          
      );
    
  return (
    <div className='assignmentTable'>
      <div className="search">
        <input type="text" value={searchText} onChange={handleSearch} placeholder="Search by name" />
      </div>
      <div className="table" style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          // add a rowClassName function to conditionally set the row color based on the end date
          rowClassName={(params) => {
            const endDate = new Date(params.row.enddate);
            if (endDate < new Date()) {
              return 'red-row';
            } else if (endDate <= new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)) {
              return 'orange-row';
            } else {
              return '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default AssignmentTable