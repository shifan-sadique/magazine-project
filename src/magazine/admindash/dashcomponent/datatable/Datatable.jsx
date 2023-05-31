import './datatable.scss';
import { userColumns, userRows } from '../../../../datatablesource';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../../../../firebase';
import { collection, getDocs,onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { auth } from '../../../../firebase'
import { Link } from 'react-router-dom';


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
  
      // Update the document with the new status
      await updateDoc(userRef, { status: "active" });
  
      // Listen for real-time changes to the document
      const unsubscribe = onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
          const updatedData = { id: doc.id, ...doc.data() };
          // Update the data state with the updated document
          setData((prevData) =>
            prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
          );
        }
      });
  
      // Unsubscribe the snapshot listener when the component unmounts or the status is updated
      return () => {
        unsubscribe();
      };
  
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    try {
      const userRef = doc(db, "user", id);
  
      // Delete the document from Firestore database
      await deleteDoc(userRef);
      console.log("User removed from Firestore database successfully");
  
      // Remove the user from Firebase Authentication
      await auth().deleteUser(id);
      console.log("User removed from authentication successfully");
  
      // Remove the deleted user from the local state
      setData((prevData) => prevData.filter((item) => item.id !== id));
  
      console.log("User removed successfully");
    } catch (error) {
      console.log("Error removing user:", error);
    }
  };

  const handleRemove = async (id) => {
    console.log("button click succesful");
    try {
      // Remove the user from Firebase Authentication
      await auth.deleteUser(id);
      console.log("User removed from authentication successfully");
  
      // Delete the document from Firestore database
      const userRef = doc(db, "user", id);
      await deleteDoc(userRef);
      console.log("User removed from Firestore database successfully");
    } catch (error) {
      console.log("Error removing user:", error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const status = params.row.status;
        const id = params.row.id; // Add this line to retrieve the ID
  
        if (status === "active") {
          return (
            <div className="cellAction">
              <div>
                {/* <Button variant="contained" size="small" color="secondary">
                  Remove
                </Button> */}
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
              <Button variant="contained" size="small" color="secondary" onClick={() => handleReject(id)}>
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
              <Button variant="contained" size="small" color="secondary" onClick={() => handleRemove(params.row.id)}>
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
