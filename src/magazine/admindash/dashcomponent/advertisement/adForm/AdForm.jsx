import './adForm.scss'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AdForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactedBy, setContactedBy] = useState('');
  const [amount, setAmount] = useState('');
  const [columnsBooked, setColumnsBooked] = useState('');
  const [managerName, setManagerName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setEmail(value);
    setEmailError(!emailPattern.test(value));
  }

  const validatePhoneNo = (value) => {
    const phonePattern = /^\d{10}$/;
    setContactNo(value);
    setPhoneError(!phonePattern.test(value));
  }

  const handleSubmit = () => {
    // Handle form submission here
  }

  return (
    <div className="afterClick">
      <div className='formInput'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ margin: '20px', marginLeft: '10%' }}
            id="companyName"
            label="Company Name"
            variant="standard"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
          <TextField
            style={{ margin: '20px' }}
            id="contactedBy"
            label="Contacted By"
            variant="standard"
            value={contactedBy}
            onChange={(event) => setContactedBy(event.target.value)}
          />
           <TextField
            style={{ margin: '20px' }}
            id="amount"
            label="Amount"
            variant="standard"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            inputProps={{ pattern: '[0-9]*' }}
            error={!/^[0-9]*$/.test(amount)}
            helperText={!/^[0-9]*$/.test(amount) ? 'Please enter a valid number' : ''}
          />

          <TextField
            style={{ margin: '20px' }}
            id="columnsBooked"
            label="Columns Booked"
            variant="standard"
            value={columnsBooked}
            onChange={(event) => setColumnsBooked(event.target.value)}
          />
          <TextField
            style={{ margin: '20px', marginLeft: '10%' }}
            id="managerName"
            label="Manager Name"
            variant="standard"
            value={managerName}
            onChange={(event) => setManagerName(event.target.value)}
          />
          <TextField
            style={{ margin: '20px' }}
            id="contactNo"
            label="Contact No"
            variant="standard"
            value={contactNo}
            onChange={(event) => validatePhoneNo(event.target.value)}
            error={phoneError}
            helperText={phoneError ? 'Please enter a valid 10 digit phone number' : ''}
          />
          <TextField
            style={{ margin: '20px' }}
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={(event) => validateEmail(event.target.value)}
            error={emailError}
            helperText={emailError ? 'Please enter a valid email address' : ''}
            />
            <TextField
            style={{ margin: '20px' }}
            id="referredBy"
            label="Referred By"
            variant="standard"
            value={referredBy}
            onChange={(event) => setReferredBy(event.target.value)}
            />
            </Box>
            </div>
            <div className="formInput">
              <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
      </div>

      )
}

export default AdForm;
