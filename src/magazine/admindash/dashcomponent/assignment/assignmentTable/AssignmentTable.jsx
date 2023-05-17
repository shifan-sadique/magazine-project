import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, getDoc,doc } from 'firebase/firestore';
import { db } from '../../../../../firebase';
import { DataGrid } from '@mui/x-data-grid';

const AssignmentTable = () => {
  const [searchText, setSearchText] = useState('');
  const [assignments, setAssignments] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'assignment'), (snapshot) => {
      const assignmentData = snapshot.docs.map((doc) => {
        const assignment = doc.data();
        return {
          id: doc.id,
          ...assignment,
        };
      });
      setAssignments(assignmentData);
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  useEffect(() => {
    const fetchAssignedBy = async () => {
      const updatedAssignments = await Promise.all(
        assignments.map(async (assignment) => {
          if (assignment.AssignedById) {
            const userDoc = await getDoc(doc(db, 'user', assignment.assignedById));
            const userName = userDoc.data().name || ''; // Access the user's name directly
            return {
              ...assignment,
              assignedBy: userName,
            };
          }
          return assignment;
        })
      );
  
      setAssignments(updatedAssignments);
    };
  
    fetchAssignedBy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'assignedTo', headerName: 'Assigned To', width: 150 },
    // { field: 'assignedBy', headerName: 'Assigned By', width: 150 }, // Added Assigned By column
    { field: 'category', headerName: 'Category', width: 100 },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
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
    { field: 'startDate', headerName: 'Start Date', width: 120 },
    { field: 'endDate', headerName: 'End Date', width: 120 },
  ];

  const filteredRows = assignments.filter((row) =>
    row.assignedTo && row.assignedTo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="assignmentTable">
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
          rowClassName={(params) => {
            const endDate = new Date(params.row.endDate);
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

export default AssignmentTable;    