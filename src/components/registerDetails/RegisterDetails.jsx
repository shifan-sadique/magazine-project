import { useState } from 'react';
import "./registerDetails.css"
import BackupIcon from '@material-ui/icons/Backup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function RegisterDetails(props) {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form
    console.log("Submitting form...");
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">COMMITTEE REGISTRATION</span>
        <div className="bottom">
          <div className="left">
            <img className='imageBox' src="https://filestore.community.support.microsoft.com/api/images/490b996b-e45f-4985-b2af-cf36da33849a?upload=true" alt="" />       
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <BackupIcon className="icon"/></label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <div className="formInput">
                <TextField label="Batch" variant="outlined" value={batch} onChange={(e) => setBatch(e.target.value)} />
              </div>
              <div className="formInput">
                <TextField label="Roll Number" variant="outlined" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
              </div>
              <div className="formInput">
                <TextField label="Specialization" variant="outlined" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
              </div>
              <div className="formInput">
                <TextField label="Experience" variant="outlined" value={experience} onChange={(e) => setExperience(e.target.value)} />
              </div>
              <div className="formInput">
                <Button variant="contained" endIcon={<SendIcon />} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}
