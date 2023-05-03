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

const AssignmentForm = () => {
  const [showAfterClick, setShowAfterClick] = useState(false);

  const handleClick = () => {
    setShowAfterClick(true);
  }

  const handleSubmit = () => {
    setShowAfterClick(false);
  }

  return (
    <div className='assignmentForm'>
      {!showAfterClick && (
        <div className="beforeclick">
          <div className="formInput">
            <AddCircleOutlineRoundedIcon className='plusIcon' onClick={handleClick} />
            <h2>ADD ASSIGNMENT</h2>
          </div>
        </div>
      )}
      {showAfterClick && (
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
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Title" variant="standard" />
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
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AssignmentForm;
