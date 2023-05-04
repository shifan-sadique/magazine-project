import './datatable.scss'
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { userColumns, userRows } from '../../../../datatablesource';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@mui/icons-material/Add';

const Datatable = () => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const status = params.row.status;
  
        if (status === "Active") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small" color="secondary">
                  Remove
                </Button>
              </div>
            </div>
          );
        } else if (status === "Pending") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small"style={{ backgroundColor: '#00ff10', color: '#ffffff' }}>
                  Accept
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small" color="secondary">
                  Reject
                </Button>
              </div>
            </div>
          );
        } else if (status === "Passive") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small" color="primary">
                  Remind
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small" color="secondary">
                  Remove
                </Button>
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
      },
    },
  ];

  const filteredRows = userRows.filter((row) =>
    row.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="user">
      <div className="title">
        <h1>MAGAZINE COMMITTEE</h1>
      </div>

      <div className="datatable">
        <div className="tabletitle">
          <h3>Committee List</h3>
        </div>

        <div className="search-container">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>

        <DataGrid
          className="tableContent"
          rows={filteredRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
};

export default Datatable;
