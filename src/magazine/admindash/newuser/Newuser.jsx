import Nav from "../dashcomponent/Nav/Nav"
import Sidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import Button from '@mui/material/Button';
import './newuser.scss'
import BackupIcon from '@material-ui/icons/Backup';
import SendIcon from '@mui/icons-material/Send';


function Newuser() {
  return (
    <div className="newuser">
      <Sidebar/>
      <div className="newContainer">
      <Nav/>
      <div className="top">
        <h1 className="title">Join the Magazine Committee!</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="https://filestore.community.support.microsoft.com/api/images/490b996b-e45f-4985-b2af-cf36da33849a?upload=true" alt="" />       
        </div>

        <div className="right">
          <form >
          <div className="formInput">
            <label htmlFor="file">Image: <BackupIcon className="icon"/></label>
            
              <input type="file" id="file" style={{display:"none"}} />
            </div>
          <div className="formInput">
              <label>Name</label>
              <input type="text" placeholder="john_doe" />
            </div>

            <div className="formInput">
              <label>Batch</label>
              <input type="text" placeholder="Select Batch" />
            </div>
            <div className="formInput">
              <label>Roll Number</label>
              <input type="number" placeholder="Roll Number" />
            </div>
            <div className="formInput">
              <label>Specialization</label>
              <input type="text" placeholder="Select" />
            </div>
            <div className="formInput">
              <label>Do you have Experience</label>
              <input type="text" placeholder="john_doe" />
            </div>
            <div className="formInput">
              <label>Email</label>
              <input type="email" placeholder="john_doe" />
            </div>
            <div className="formInput">
              <label>Phone Number</label>
              <input type="number" placeholder="john_doe" />
            </div>
            
              <Button variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Newuser