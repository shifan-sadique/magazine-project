import React, { useState } from 'react';
import './magazineIssueForm.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes ,getDownloadURL} from 'firebase/storage';
import { db, storage } from '../../../../../firebase';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import { Link } from 'react-router-dom';




const MagazineIssueForm = () => {
  const [showAfterClick, setShowAfterClick] = useState(false);
  const [magazineName, setMagazineName] = useState('');
  const [batch, setBatch] = useState('');
  const [year, setYear] = useState('');
  const [magazineEditor, setMagazineEditor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);


  const handleClick = () => {
    setShowAfterClick(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  let downloadUrl = '';

  const handleSubmit = async () => {
    try {
      setIsLoading(true); // Start loading state
  
      let downloadUrl = '';
  
      // If a file is selected, upload it to Firebase Storage
      if (file) {
        const storageRef = ref(storage, `magazine/${file.name}`);
  
        await uploadBytes(storageRef, file)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((downloadURL) => {
            downloadUrl = downloadURL;
            console.log('Download URL', downloadURL);
          });
      }
  
      // Add the form data to the article collection in the database
      const articleData = {
        
        fileUrl: downloadUrl, // Save the file URL in the document
        magazineName,
        batch,
        year,
        magazineEditor,
        timestamp: serverTimestamp(), // Add the timestamp field with the current server timestamp
      };
  
      await addDoc(collection(db, 'magazines'), articleData);
  
      // Reset the form and state
      setShowAfterClick(false);
      setMagazineName('');
      setBatch('');
      setYear('');
      setMagazineEditor('');
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
                '& > :not(style)': { m: 1, width: '23ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                style={{ margin: '17px' }}
                id="standard-basic"
                label="Magazine Name"
                variant="standard"
                value={magazineName}
                onChange={(e) => setMagazineName(e.target.value)}
                />

                <TextField
                style={{ margin: '17px' }}
                id="standard-basic"
                label="Batch"
                variant="standard"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                />

                <TextField
                style={{ margin: '17px' }}
                id="standard-basic"
                label="Year"
                variant="standard"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />

                <TextField
                style={{ margin: '17px' }}
                id="standard-basic"
                label="Magazine Editor"
                variant="standard"
                value={magazineEditor}
                onChange={(e) => setMagazineEditor(e.target.value)}
                />
            </Box>
            
          </div>
          <div className="formInput">
            <Button variant="contained" component="label">
              {file ? 'File Selected' : 'Upload'}
              <input hidden accept="image/jpeg, image/png" type="file" onChange={handleFileChange} />
            </Button>
          </div>
          <div className="formInput">
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={file && isLoading} // Disable the button if no file selected or in loading state
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

export default MagazineIssueForm;
