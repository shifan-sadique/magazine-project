import './committeeDataTable.scss'
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase';

const CommitteeDatatable = () => {
  const [searchText, setSearchText] = useState('');
  const [userRows, setUserRows] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'user'), (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        const { name, rollNumber, batch, email, phoneNumber, specialization } = doc.data();
        fetchedData.push({
          id: doc.id,
          name,
          rollNumber,
          batch,
          email,
          phoneNumber,
          specialization,
        });
      });
      setUserRows(fetchedData);
    });

    return () => {
      unsubscribe(); // Unsubscribe the snapshot listener when the component unmounts
    };
  }, []);

  const actionColumn = [
    // Action column definition
  ];

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'rollNumber', headerName: 'Roll Number', width: 150 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'specialization', headerName: 'Specialization', width: 200 },
    ...actionColumn, // Include the action column
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

        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <DataGrid
          className="tableContent"
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
};

export default CommitteeDatatable;
