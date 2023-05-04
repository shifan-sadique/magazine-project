import React, { useState } from 'react';
import './committeeArticlesForm.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CommitteeArticlesForm = () => {
  const [showAfterClick, setShowAfterClick] = useState(false);

  const handleClick = () => {
    setShowAfterClick(true);
  }

  const handleSubmit = () => {
    setShowAfterClick(false);
  }

  return (
    <div >
      {!showAfterClick && (
        <div className="beforeclick">
          <div className="formInput">
            <AddCircleOutlineRoundedIcon className='plusIcon' onClick={handleClick} />
            <h2>ADD ARTICLE</h2>
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
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Work By" variant="standard" />
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Roll No" variant="standard" />
              <TextField style={{ margin: '20px' }} id="standard-basic" label="Category" variant="standard" />
            </Box>
          </div>
          <div className="formInput">
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
          <div className="formInput">
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommitteeArticlesForm;
