import './committeeArticlesTable.scss'

import React, { useState } from 'react';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CommitteeArticlesTable = () => {
  const classes = useStyles();

  const rows=[
    {
      id:123,
      date:"1 march 2023",
      article_name:"Chat Gpt",
      student_name:"shifan",
      roll_no: "tve21mca2051",
      type: "Article",
      upvotes:3,
      downvotes:2,
      status: "Rejected",
      approve:0,
    },
    {
      id:124,
      date:"1 apr 2023",
      article_name:"Game",
      student_name:"Shahban",
      roll_no: "tve21mca2050",
      type: "Photo",
      upvotes:3,
      downvotes:2,
      status: "Approved",
      approve:1,
    },
    {
      id:127,
      date:"1 june 2023",
      article_name:"football",
      student_name:"adwaith",
      roll_no: "tve21mca2008",
      type: "Article",
      upvotes:3,
      downvotes:5,
      status: "Pending",
      approve:0,
    },

  ]

  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.article_name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.student_name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className='table'>
      <div className="search">
        <TextField
          id="search"
          label="Search"
          type="search"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <TableContainer id="articlepending" component={Paper}>
        <Table className={classes.table} aria-label="sticky table">
          <TableHead className='th'>
            <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Article Name</TableCell>
            <TableCell >Type</TableCell>
            <TableCell>Upvotes</TableCell>
            <TableCell>DownVotes</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.article_name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.upvotes}</TableCell>
                <TableCell>{row.downvotes}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" href="#outlined-buttons">
                    VIEW
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

export default CommitteeArticlesTable;
