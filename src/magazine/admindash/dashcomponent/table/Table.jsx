import './table.scss'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';





const List = () => {

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
  return (
    <div className='table'>
      <TableContainer id="articlepending" component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="sticky table">
        <TableHead className='th'>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Article Name</TableCell>
            <TableCell >Student Name</TableCell>
            <TableCell >Roll Number</TableCell>
            <TableCell >Type</TableCell>
            <TableCell>Upvotes</TableCell>
            <TableCell>DownVotes</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Approve</TableCell>
            <TableCell>Read</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell  >{row.date}</TableCell>
              <TableCell  >{row.article_name}</TableCell>
              <TableCell  >{row.student_name}</TableCell>
              <TableCell  >{row.roll_no}</TableCell>
              <TableCell  >{row.type}</TableCell>
              <TableCell  >{row.upvotes}</TableCell>
              <TableCell  >{row.downvotes}</TableCell>
              <TableCell  >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell  >{row.approve}</TableCell>
              <TableCell><Button variant="outlined" color="primary" href="#outlined-buttons">READ</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List