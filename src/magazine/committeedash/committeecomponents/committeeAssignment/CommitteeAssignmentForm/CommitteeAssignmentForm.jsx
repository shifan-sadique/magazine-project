import React, { useState } from 'react';
import './committeeAssignmentForm.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { auth } from '../../../../../firebase';


import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase';


const CommitteeAssignmentForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Perform search operation on the user collection based on the value
    const q = query(collection(db, 'user'), where('name', '>=', value), where('name', '<', value + 'z'));

    try {
      const querySnapshot = await getDocs(q);
      const matchingUsers = querySnapshot.docs.map((doc) => {
        const user = doc.data();
        return {
          id: doc.id,
          name: user.name,
          profilePic: user.profilePic,
        };
      });
      setSearchResults(matchingUsers);
    } catch (error) {
      console.error('Error searching for users: ', error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
  
    console.log('handleAdd function called');
  
    console.log('searchValue:', searchValue);
    console.log('searchResults:', searchResults);
    const assignedTo = searchValue
    console.log('assignedTo:', assignedTo);
    const assignedToId = searchResults.id
    console.log('assignedToId:', assignedToId);
    
    const title = document.getElementById('title-input').value;
    const category = document.getElementById('category-input').value;
    const description = document.getElementById('description-input').value;
    const startDate = document.getElementById('start-date-input').value;
    const endDate = document.getElementById('end-date-input').value;
  
    const assignmentData = {
      title: title,
      assignedTo: assignedTo,
      assignedToId: assignedToId, // Add the assignedToId field to the assignment data
      category: category,
      description: description,
      startDate: startDate,
      endDate: endDate,
      AssignedById: userId,
    };
  
    try {
      const res = await addDoc(collection(db, 'assignment'), assignmentData);
      console.log('Document written with ID: ', res.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="assignmentForm">
      <h1 className="title">Assignment Page</h1>
      <form>
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
                id="title-input"
                placeholder="Title"
                label="Title"
                variant="standard"
              />
              <TextField
                style={{ margin: '20px' }}
                id="category-input"
                placeholder="Category"
                label="Category"
                variant="standard"
              />
              <TextField
                style
                ={{ margin: '20px' }}
                id="assigned-to-input"
                placeholder="Assigned To"
                label="Assigned To"
                variant="standard"
                value={searchValue}
                onChange={handleSearch}
                />
                {searchResults.length > 0 && (
                <div className="searchResults">
                {searchResults.map((user) => (
                <div className="searchResult" key={user.id}>
                <div
                className="searchResultItem"
                onClick={() => {
                setSearchValue(user.name);
                setSearchResults(user);
                }}
                >
                <Avatar alt={user.name} src={user.profilePic} />
                <span>{user.name}</span>
                </div>
                </div>
                ))}
                </div>
                )}
                </Box>
                </div>

                <div className="formInput">
                <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                id="description-input"
                placeholder="Enter the Description"
                style={{ width: 800, borderRadius: '8px' }}
                />
                </div>
                <div className="formInput formInputInline">
                <TextField
                id="start-date-input"
                label="Start Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                shrink: true,
                }}
                style={{ margin: '20px' }}
                />
                <TextField
                id="end-date-input"
                label="End Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                shrink: true,
                }}
                style={{ margin: '20px' }}
                />
                </div>
                <div className="formInput">
                <Button variant="contained" onClick={handleAdd}>
                Submit
                </Button>
                </div>
                </div>
                </form>
                </div>
                );
                };
                export default CommitteeAssignmentForm;
