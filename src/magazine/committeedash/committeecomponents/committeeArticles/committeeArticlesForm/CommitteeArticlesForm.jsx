import React, { useState } from 'react';
import './committeeArticlesForm.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes ,getDownloadURL} from 'firebase/storage';
import { db, storage } from '../../../../../firebase';


const CommitteeArticlesForm = () => {
  const [showAfterClick, setShowAfterClick] = useState(false);
  const [title, setTitle] = useState('');
  const [workBy, setWorkBy] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [upVote, setUpvote]= useState(0);
  const [downVote, setDownvote] = useState(0);
  const [status, setStatus] = useState('pending');
  const [approve, setApprove] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setShowAfterClick(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  let downloadUrl=''
  const handleSubmit = async () => {
    try {
      setIsLoading(true); // Start loading state

      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `article/${file.name}`);
  
      // timestamp=serverTimestamp()
     await uploadBytes(storageRef, file)
      .then(snapshot => {
        return getDownloadURL(snapshot.ref)
      })
      .then(downloadURL => {
        downloadUrl=downloadURL
        alert(downloadURL)
        console.log('Download URL', downloadURL)
      })
  

      // Add the form data to the article collection in the database
      const articleData = {
        title,
        workBy,
        rollNo,
        category,
        fileUrl: downloadUrl, // Save the file URL in the document
        upVote,
        downVote,
        status,
        approve,
        timestamp: serverTimestamp(), // Add the timestamp field with the current server timestamp
      };

      await addDoc(collection(db, 'article'), articleData);

      // Reset the form and state
      setShowAfterClick(false);
      setTitle('');
      setWorkBy('');
      setRollNo('');
      setCategory('');
      setFile(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <div>
      {!showAfterClick && (
        <div className="beforeclick">
          <div className="formInput">
            <AddCircleOutlineRoundedIcon className="plusIcon" onClick={handleClick} />
            <h2>ADD ARTICLE</h2>
          </div>
        </div>
      )}
      {showAfterClick && (
        <div className="afterClick">
          <div className="formInput">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                style={{ margin: '20px' }}
                id="standard-basic"
                label="Title"
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                style={{ margin: '20px' }}
                id="standard-basic"
                label="Work By"
                variant="standard"
                value={workBy}
                onChange={(e) => setWorkBy(e.target.value)}
              />
              <TextField
                style={{ margin: '20px' }}
                id="standard-basic"
                label="Roll No"
                variant="standard"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
              <TextField
                style={{ margin: '20px' }}
                id="standard-basic"
                label="Category"
                variant="standard"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Box>
          </div>
          <div className="formInput">
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
            </Button>
          </div>
          <div className="formInput">
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!file || isLoading} // Disable the button if no file selected or in loading state
              style={{ backgroundColor: isLoading ? 'red' : '' }} // Set the button color to red if in loading state
            >
              {isLoading ? 'Uploading...' : 'Submit'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CommitteeArticlesForm;
