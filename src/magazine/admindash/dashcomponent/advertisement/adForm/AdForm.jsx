import './adForm.scss'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import {db} from "../../../../../firebase"

const AdForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactedBy, setContactedBy] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('pending');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      companyName,
      contactedBy,
      amount,
      columnsBooked,
      managerName,
      contactNo,
      email,
      referredBy,
      status,
      timeStamp: serverTimestamp()
    };
  
    try {
      const res = await addDoc(collection(db, "advertisement"), data);
      console.log("Document written with ID: ", res.id);
      // Reset the form fields
      setCompanyName('');
      setContactedBy('');
      setAmount('');
      setColumnsBooked('');
      setManagerName('');
      setContactNo('');
      setEmail('');
      setReferredBy('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  return (
    <div className="afterClick">
      <form onSubmit={handleSubmit}>
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
              <Button variant="contained" type='submit'>Submit</Button>
            </div>
          </form>
      </div>

      )
}

export default AdForm;
