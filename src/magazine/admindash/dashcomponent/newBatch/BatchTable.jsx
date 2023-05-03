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
import "./batchTable.scss"

const batchTable = () => {
    const rows=[
        {
          id:123,
          batch:"19-22",
          Editor:"Murshid",
          Contact:9876543210 ,
        },
        {
            id:124,
            batch:"20-22",
            Editor:"Bismi",
            Contact:9786542310 ,
          },
          {
            id:125,
            batch:"21-23",
            Editor:"Shifan",
            Contact:9876003210 ,
          },

    
      ]

  return (
    <div className='batchTable'>
        <div className="table">            
            <TableContainer id="batch" component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="sticky table">
                    <TableHead className="th">
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Batch</TableCell>
                            <TableCell>Remove</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell  ><a className='batchlink' href="">{row.batch}</a></TableCell>

              <TableCell><Button variant="outlined" color="secondary" href="#outlined-buttons">REMOVE</Button></TableCell>
            </TableRow>
          ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default batchTable