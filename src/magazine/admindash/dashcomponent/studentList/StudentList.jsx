import './studentList.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StudentList = () => {
  return (
    <div className='studentList'>
                <div className="table">            
            <TableContainer id="batch" component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="sticky table">
                    <TableHead className="th">
                    <h1 className="title">Batch</h1>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell  ><a className='batchlink' href="">{row.batch}</a></TableCell>
              <TableCell  >{row.Editor}</TableCell>
              <TableCell  >{row.Contact}</TableCell>
              <TableCell><Button variant="outlined" color="secondary" href="#outlined-buttons">REMOVE</Button></TableCell>
            </TableRow>
          ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default StudentList