import './datatable.scss';
import { userColumns, userRows } from '../../../../datatablesource';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../../../../firebase';
import { collection, getDocs, onSnapshot, updateDoc,deleteDoc , doc } from "firebase/firestore";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

 useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "user"), (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
    });

    return () => {
      unsubscribe(); // Unsubscribe the snapshot listener when the component unmounts
    };
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleAccept = async (id) => {
    try {
      const userRef = doc(db, "user", id);
      await updateDoc(userRef, { status: "active" });
      console.log("Status updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id) => {
    try {
      // Remove user from authentication (Replace with your logic to remove from Firebase Authentication)
      // ...

      const userRef = doc(db, "user", id);
      await deleteDoc(userRef);
      console.log("User removed successfully");
    } catch (error) {
      console.log(error);
    }
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const status = params.row.status;
        const id = params.row.id;
  
        if (status === "active") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small" color="secondary">
                  Remove
                </Button>
              </div>
            </div>
          );
        } else if (status === "pending") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small"style={{ backgroundColor: '#00ff10', color: '#ffffff' }} onClick={() => handleAccept(id)}>
                  Accept
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small" color="secondary" onClick={() => handleRemove(id)}>
                  Reject
                </Button>
              </div>
            </div>
          );
        } else if (status === "passive") {
          return (
            <div className="cellAction">
              <div>
                <Button variant="contained" size="small" color="primary">
                  Remind
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small" color="secondary" onClick={() => handleRemove(id)}>
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

  const filteredRows = data.filter((row) =>
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
