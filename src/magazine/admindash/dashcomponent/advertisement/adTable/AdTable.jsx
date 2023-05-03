import './adTable.scss'

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { TextField } from '@material-ui/core';


const AdTable = () => {
  const rows = [
    {
      id: 123,
      company_name: 'TCS',
      contacted_by: 'Abhijith',
      amount: 10000,
      columns: 2,
      manager: 'Ravi',
      phone: '9847810718',
      email: 'sbc@gmail.com',
      referral: 'none',
    },
    {
      id: 124,
      company_name: 'bbg',
      contacted_by: 'shifan',
      amount: 5000,
      columns: 2,
      manager: 'blahh',
      phone: '9847555718',
      email: 'bbg@gmail.com',
      referral: 'nelwin',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredRows = rows.filter(
    (row) =>
      row.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.contacted_by.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="table">
      <TextField
        style={{ margin: '20px' }}
        id="search"
        label="Search"
        variant="standard"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <TableContainer id="adlist" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead className="th">
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Contacted By</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Columns</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Referral</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Confirm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.company_name}</TableCell>
                <TableCell>{row.contacted_by}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.columns}</TableCell>
                <TableCell>{row.manager}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.referral}</TableCell>
                <TableCell>{(row.adstatus = 'pending')}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" style={{ margin: '5px' }}>
                    Accepted
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Rejected
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

export default AdTable;
