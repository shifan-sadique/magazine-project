import './articleTable.scss';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../../firebase';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const List = () => {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'article'));
        const fetchedRows = querySnapshot.docs.map((doc) => doc.data());
        setRows(fetchedRows);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    const unsubscribe = onSnapshot(collection(db, 'article'), (snapshot) => {
      const fetchedRows = snapshot.docs.map((doc) => doc.data());
      setRows(fetchedRows);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleRead = (fileUrl) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = ''; // Use the file name from the server if available

    // Trigger the download
    link.click();
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const articleName = row.article_name || '';
    const studentName = row.student_name || '';
    return (
      articleName.toLowerCase().includes(searchText.toLowerCase()) ||
      studentName.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="table">
      <div className="search">
        <TextField id="search" label="Search" type="search" value={searchText} onChange={handleSearch} />
      </div>
      <TableContainer id="articlepending" component={Paper}>
        <Table className={classes.table} aria-label="sticky table">
          <TableHead className="th">
            <TableRow>
              {/* <TableCell>id</TableCell> */}
              <TableCell>Date</TableCell>
              <TableCell>Article Name</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Roll Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Upvotes</TableCell>
              <TableCell>DownVotes</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Approve</TableCell>
              <TableCell>Read</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                {/* <TableCell component="th" scope="row">
                  {row.id}
                </TableCell> */}
                <TableCell>{row.timestamp ? row.timestamp.toDate().toLocaleDateString() : ''}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.workBy}</TableCell>
                <TableCell>{row.rollNo}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.upVote}</TableCell>
                <TableCell>{row.downVote}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell>{row.approve}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleRead(row.fileUrl)}>
                    READ
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
