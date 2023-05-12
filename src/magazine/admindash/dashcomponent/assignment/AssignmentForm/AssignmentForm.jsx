import React, { useState } from 'react';
import './assignmentForm.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import {db} from "../../../../../firebase"



const AssignmentForm = ({inputs,title}) => {
  const [file, setFile] = useState("");


  const handleAdd = async(e) => {
    e.preventDefault();


    console.log("handleAdd function called"); // Add this line to log a message

    const data = {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    };

    try {
      const res = await addDoc(collection(db, "advertisement"), data);
      console.log("Document written with ID: ", res.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    // console.log(res)
    
  }

  return (
    <div className='assignmentForm'>
        <form>

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
              <TextField style={{ margin: '20px' }} id="standard-basic title-input" label="Title" variant="standard" />
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Assigned To" variant="standard" />
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Category" variant="standard" />
            </Box>
          </div>
          <div className="formInput">
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder="Enter the Description"
              style={{ width: 800, borderRadius: '8px' }}
            />
          </div>
          <div className="formInput formInputInline">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker localeText={{ start: 'Start Date', end: 'Deadline' }} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="formInput">
            <Button variant="contained"  onClick={handleAdd}>Submit</Button>
          </div>
        </div>
        </form>
    </div>
  )
}

export default AssignmentForm;
