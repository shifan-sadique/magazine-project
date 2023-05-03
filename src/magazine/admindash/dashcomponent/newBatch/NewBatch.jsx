import './newbatch.scss'
import Nav from "../../dashcomponent/Nav/Nav"
import Sidebar from "../../dashcomponent/dashSidebar/Dashsidebar"
import Button from '@mui/material/Button';
import BackupIcon from '@material-ui/icons/Backup';
import SendIcon from '@mui/icons-material/Send';
import BatchTable from "./BatchTable.jsx";
import YearPicker from "../yearpicker/YearPicker"
import StudentList from '../studentList/StudentList';


const NewBatch = () => {
  return (
    <div className='newbatch'>
        <Sidebar/>
        <div className="batchContainer">
            <Nav/>
            <div className="pagetop">
                <div className="left">
                <form action="">
                <h1 className="title">Add New User List</h1>
                <div className="formInput">
                    <p className="desc">Add new batch to the user list</p>
                    <label htmlFor="">Batch</label>
                    <input type="text" placeholder='Eg: 20-23'/>
                    <label htmlFor="file"><BackupIcon className="icon"/>Upload </label>
                    <input type="file" id="file" style={{display:"none"}} />
                    <Button variant="contained" endIcon={<SendIcon />} size='small'>
                        ADD
                    </Button>
                </div>
                </form>
                </div>
                <div className="right">
                    <BatchTable/>
                </div>
            </div>
            <div className="pagebottom">
                    <StudentList/>
            </div>
        </div>

    </div>
  )
}

export default NewBatch